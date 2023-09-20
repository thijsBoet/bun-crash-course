import fetchUser from './githubAPI'

(async () => {
  const userData = await fetchUser('google')
  document.querySelector('h1')!.innerHTML = JSON.stringify(userData)
})();

// Create Bundle CLI Command
// bun build ./src/index.ts --output ./dist/bundle.js

// Watch Mode
// bun build ./src/index.ts --output ./dist/bundle.js --watch