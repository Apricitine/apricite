NITRO_PRESET=firebase npm run build && {
  cd .output/server
  npm i
  firebase deploy
  cd ~/Programming/apricite
}