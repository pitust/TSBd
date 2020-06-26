#!/bin/bash
mkdir -p build/tmp
tsc --allowJs src/plugin.tsx --checkJs false --outDir build/tmp --module system --target ES2020 --jsx react --incremental --tsBuildInfoFile build/info.json
find build/tmp | xargs node boring/patchjs.js
cat boring/header.js boring/denold.js `find build/tmp` boring/final.js 2>/dev/null >build/badgify.plugin.js
cp build/badgify.plugin.js ~/.config/BetterDiscord/plugins/ 2>/dev/null