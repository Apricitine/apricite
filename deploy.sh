NITRO_PRESET=firebase yarn build && {
  cd .output/server
  yarn install && {
    yarn add firebase-tools
    npx firebase deploy
    cd ~/Programming/apricite
  }
}
