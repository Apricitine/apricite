NITRO_PRESET=firebase yarn build && {
  cd .output/server
  yarn install && {
    npx firebase deploy --yarn
    cd ~/Programming/apricite
  }
}