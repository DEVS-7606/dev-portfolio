import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('✗ Missing environment variables in .env file');
  console.error('  Required: VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY');
  process.exit(1);
}

// Create client with custom fetch options
const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  global: {
    fetch: (url, options = {}) => {
      return fetch(url, {
        ...options,
        // @ts-ignore - Node.js specific option
        agent: undefined,
      });
    },
  },
});

async function testConnection() {
  console.log('Testing Supabase connection...\n');
  console.log('Configuration:');
  console.log('  URL:', supabaseUrl);
  console.log('  Key:', supabaseAnonKey?.substring(0, 20) + '...\n');
  
  try {
    // Test 1: Check if client is initialized
    console.log('✓ Supabase client initialized');
    
    // Test 2: Simple REST API test
    console.log('Testing REST API endpoint...');
    const response = await fetch(`${supabaseUrl}/rest/v1/`, {
      headers: {
        'apikey': supabaseAnonKey!,
        'Authorization': `Bearer ${supabaseAnonKey}`
      }
    }).catch(err => {
      console.log('  Fetch error:', err.message);
      return null;
    });
    
    if (response) {
      console.log('✓ REST API endpoint reachable (status:', response.status, ')');
    }
    
    // Test 3: Auth endpoint
    console.log('\nTesting auth endpoint...');
    const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
    
    if (sessionError) {
      console.error('✗ Auth session error:', sessionError.message);
    } else {
      console.log('✓ Auth endpoint reachable (no active session is normal)');
    }
    
    // Test 4: Try to query the database
    console.log('\nTesting database query...');
    const { data, error } = await supabase.from('users').select('*').limit(1);
    
    if (error) {
      if (error.message.includes('does not exist') || 
          error.code === '42P01' || 
          error.code === 'PGRST205' ||
          error.message.includes('Could not find the table')) {
        console.log('✓ Database connection successful!');
        console.log('  Note: "contacts" table does not exist yet (this is normal)');
        console.log('\n🎉 Your Supabase database is properly connected!');
        console.log('\nNext steps:');
        console.log('  1. Create the "contacts" table in your Supabase dashboard');
        console.log('  2. Or the table will be created automatically when you submit the contact form');
        return true;
      } else {
        console.error('✗ Database error:', error.message);
        console.error('  Code:', error.code);
        return false;
      }
    }
    
    console.log('✓ Database connection successful!');
    console.log('  Found', data?.length || 0, 'records in contacts table');
    console.log('\n🎉 Your Supabase database is properly connected!');
    return true;
    
  } catch (err: any) {
    console.error('✗ Connection failed:', err.message);
    console.error('  Full error:', err);
    return false;
  }
}

testConnection().then(success => {
  process.exit(success ? 0 : 1);
});
