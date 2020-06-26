#!/bin/bash
rm -rf build
mkdir -p build/tmp
tsc --allowJs src/plugin.tsx --checkJs false --outDir build/tmp --module system --target ES2020 --jsx react
find build/tmp | xargs node boring/patchjs.js
cat boring/header.js boring/denold.js `find build/tmp` boring/final.js 2>/dev/null >build/AppName.plugin.js
cp build/AppName.plugin.js ~/.config/BetterDiscord/plugins/ 2>/dev/null