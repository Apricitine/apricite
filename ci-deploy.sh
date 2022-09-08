NITRO_PRESET=firebase npm run build && {
  cd .output/server
  npm i
  npm ci && {
    npx firebase deploy
    cd ~/Programming/apricite
  }
}