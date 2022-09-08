NITRO_PRESET=firebase npm run build && {
  cd .output/server
  npm i
  rm -rf .git/hooks
  npx firebase deploy
  cd ~/Programming/apricite
}