NITRO_PRESET=firebase yarn build && {
  cd .output/server
  yarn install
  yarn ci && {
    npx firebase deploy --yarn
    cd ~/Programming/apricite
  }
}