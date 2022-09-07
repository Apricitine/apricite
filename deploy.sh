NITRO_PRESET=firebase npm run build && {
  cd .output/server
  npm i
  npx firebase deploy
  cd ~/Programming/apricite
}