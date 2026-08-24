#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const imagePath = path.join(__dirname, 'rem.png');

if (!fs.existsSync(imagePath)) {
  console.log('❌ rem.png not found');
  process.exit(1);
}

// Try to display using available tools
try {
  // macOS: use imgcat if available
  if (process.platform === 'darwin') {
    try {
      execSync(`which imgcat`, { stdio: 'ignore' });
      execSync(`imgcat ${imagePath}`, { stdio: 'inherit' });
      return;
    } catch {}
  }

  // Linux: try various image viewers
  if (process.platform === 'linux') {
    const viewers = ['feh', 'eog', 'display'];
    for (const viewer of viewers) {
      try {
        execSync(`which ${viewer}`, { stdio: 'ignore' });
        execSync(`${viewer} ${imagePath}`, { stdio: 'inherit' });
        return;
      } catch {}
    }
  }

  // Fallback: just open the file
  const opener = process.platform === 'darwin' ? 'open' : 'xdg-open';
  execSync(`${opener} ${imagePath}`, { stdio: 'inherit' });
} catch (err) {
  console.log(`💜 rem.png: ${imagePath}`);
}
