const { spawn } = require('child_process');
const path = require('path');

console.log('\x1b[36m%s\x1b[0m', '🚀 Starting My-Coupon Full Stack Dev Environment...');

// Start Strapi Backend
console.log('\x1b[32m%s\x1b[0m', '📦 Starting Strapi backend (http://localhost:1337)...');
const backend = spawn('npm', ['run', 'develop'], {
  stdio: 'inherit',
  shell: true,
  cwd: path.resolve(__dirname, '..')
});

// Start Next.js Frontend
console.log('\x1b[34m%s\x1b[0m', '⚡ Starting Next.js frontend (http://localhost:3000)...');
const frontend = spawn('npm', ['run', 'dev'], {
  stdio: 'inherit',
  shell: true,
  cwd: path.resolve(__dirname, '..', 'frontend')
});

// Handle termination signals
const cleanup = () => {
  console.log('\x1b[31m%s\x1b[0m', '\nStopping servers...');
  backend.kill();
  frontend.kill();
  process.exit();
};

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
