#!/usr/bin/env node
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const imagePath = fileURLToPath(new URL('./rem.png', import.meta.url));

if (!existsSync(imagePath)) {
  console.log('❌ rem.png not found');
  process.exit(1);
}

function openImage() {
  const viewers = process.platform === 'darwin'
    ? ['imgcat', 'open']
    : process.platform === 'win32'
      ? ['explorer.exe']
      : ['feh', 'eog', 'display', 'xdg-open'];

  for (const viewer of viewers) {
    const result = spawnSync(viewer, [imagePath], { stdio: 'inherit' });
    if (!result.error && result.status === 0) return;
  }
  console.log(`💜 rem.png: ${imagePath}`);
}

openImage();
