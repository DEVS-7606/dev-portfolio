import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { mkdir, existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const urls = [
  { name: 'weather-sphere', url: 'https://weather-sphere-one.vercel.app/' },
];

const outputDir = join(__dirname, 'public', 'images', 'projects');

if (!existsSync(outputDir)) {
  mkdir(outputDir, { recursive: true }, (err) => {
    if (err) throw err;
  });
}

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  
  for (const site of urls) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    
    await page.emulateMediaFeatures([
      { name: 'prefers-color-scheme', value: 'dark' },
    ]);
    
    // Use 'load' instead of networkidle0 as weather apps often have polling/websockets
    await page.goto(site.url, { waitUntil: 'load', timeout: 30000 });
    
    // Wait explicitly for JS execution and weather data to load
    await new Promise(r => setTimeout(r, 6000));
    
    const outputPath = join(outputDir, `${site.name}.png`);
    await page.screenshot({ path: outputPath, type: 'png' });
    console.log(`Saved screenshot for ${site.name} to ${outputPath}`);
    
    await page.close();
  }
  
  await browser.close();
})();
