NITRO_PRESET=firebase yarn build && {
  cd .output/server
  yarn install && {
    npx firebase deploy
    cd ~/Programming/apricite
  }
}