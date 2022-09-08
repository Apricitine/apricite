NITRO_PRESET=firebase npm run build && {
  cd .output/server
  npm ci && {
    npx firebase deploy
    cd ~/Programming/apricite
  }
}