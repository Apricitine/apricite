#!/bin/bash

red='\033[0;31m'
green='\033[0;32m'
reset='\033[0m'

try_npm() {
  npm install
  npm run dev
} && {
  try_npm&&
  echo -e "${green}Success!${reset}" 
} || {
  echo -e "${red}An error occured.${reset}"
  echo -e "Please check that you have npm installed and that it is up to date by running npm -v."
}
