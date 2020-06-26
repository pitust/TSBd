#!/bin/sh
echo -n "App name? "
read APP_NAME
echo -n "Author? "
read APP_AUTHOR
echo -n "Description? "
read APP_DESC
rm -rf .git
git init
APP_DESC="$APP_DESC" APP_AUTHOR="$APP_AUTHOR" APP_NAME="$APP_NAME" node customize.js
git add .
git commit -m "Inital commit"
./build.sh
echo "You are ready to go!"