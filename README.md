# The new Apricitine Homepage: Built with Nuxt3!

This is my third remake of my homepage (the first two were unfinished). This time, though, I have an even bigger tech stack, which makes me feel like a **real** developer and definitely won't introduce more bugs into my code that I won't be able to fix.
# Stack
- Nuxt.js (v3) 
- SCSS
- Typescript
- Vue.js (v3)
- Firebase Hosting
- Firebase Cloud Functions
- Firebase Realtime Database
- (More stuff will probably get added on)
# Usage
In case for some reason you want to run this site in a dev environment, I've provided instructions on installation. Remember, this is just a pathway for my CI, so some stuff might break.
 
First, clone the repo onto your local system:
```sh
gh repo clone Apricitine/apricite.git
```
Then run these commands to start the dev server:
```sh
yarn install
yarn dev
```
`yarn deploy` will run a script I made that manually deploys the hosting and functions to Firebase. Unfortunately, I haven't been able to set up a Github Actions workflow for CI yet because of some weird errors.
