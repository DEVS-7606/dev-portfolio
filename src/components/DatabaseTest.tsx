import { useEffect, useState } from 'react';
import { supabase } from '@/supabase-client';

export function DatabaseTest() {
  const [status, setStatus] = useState<'testing' | 'success' | 'error'>('testing');
  const [message, setMessage] = useState('Testing connection...');
  const [details, setDetails] = useState<string[]>(['✓ Supabase client initialized']);

  async function testConnection() {
    const logs: string[] = ['✓ Supabase client initialized'];

    try {
      // Test auth endpoint
      const { error: authError } = await supabase.auth.getSession();
      if (authError) {
        logs.push(`✗ Auth error: ${authError.message}`);
      } else {
        logs.push('✓ Auth endpoint reachable');
      }
      setDetails([...logs]);


      // Test database query
      const { data, error } = await supabase.from('users').select('count', { count: 'exact', head: true });


      if (error) {
        if (error.message.includes('does not exist') ||
          error.code === '42P01' ||
          error.code === 'PGRST205' ||
          error.message.includes('Could not find the table')) {
          logs.push('✓ Database connected (table "contacts" does not exist yet)');
          setStatus('success');
          setMessage('Database connection successful!');
        } else {
          logs.push(`✗ Database error: ${error.message}`);
          if (error.message.includes('Failed to fetch')) {
            logs.push('');
            logs.push('Possible causes:');
            logs.push('• Supabase project is paused (check dashboard)');
            logs.push('• Network/firewall blocking connection');
            logs.push('• Invalid project URL or API key');
          }
          setStatus('error');
          setMessage('Database connection failed');
        }
      } else {
        logs.push(`✓ Database connected (found ${data?.length || 0} records)`);
        setStatus('success');
        setMessage('Database connection successful!');
      }

    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      logs.push(`✗ Error: ${errorMessage}`);
      setStatus('error');
      setMessage('Connection test failed');
    }

    setDetails(logs);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      testConnection();
    }, 0);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      padding: '20px',
      background: status === 'success' ? '#d4edda' : status === 'error' ? '#f8d7da' : '#fff3cd',
      border: `2px solid ${status === 'success' ? '#28a745' : status === 'error' ? '#dc3545' : '#ffc107'}`,
      borderRadius: '8px',
      maxWidth: '400px',
      zIndex: 9999,
      fontFamily: 'monospace',
      fontSize: '12px'
    }}>
      <h3 style={{ margin: '0 0 10px 0' }}>Database Connection Test</h3>
      <p style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>{message}</p>
      <div>
        {details.map((log, i) => (
          <div key={i} style={{ marginBottom: '5px' }}>{log}</div>
        ))}
      </div>
    </div>
  );
}
