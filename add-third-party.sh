#!/bin/sh
# Adds a library to third_party folder
rm -rf third_party
mkdir -p third_party
cd third_party
git clone "$1"
cd ..
MOD_NAME=$(ls third_party)
if [ -e third_party/$MOD_NAME/name ]; then
    MOD_NAME=$(cat third_party/$MOD_NAME/name)
fi
cp -rf third_party/$MOD_NAME node_modules/$MOD_NAME
echo "node_modules/$MOD_NAME" >>.gitignore
echo "git clone '$1' node_modules/$MOD_NAME" >>setup.sh
git stage .gitignore setup.sh
git commit -m "Added module $1"
rm -rf third_party
mkdir -p third_party
