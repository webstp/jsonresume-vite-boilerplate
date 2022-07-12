const 
  vite = require('vite'),
  getConfig = require('./config'),
  readFileSync = require('fs').readFileSync,
  resolve = require('path').resolve;


async function render(resume) {
  await vite.build(getConfig(resume));
  return readFileSync(resolve(__dirname, 'dist/index.html'), 'utf-8');
}

module.exports = {
  render
}