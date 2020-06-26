let fs = require('fs');
fs.writeFileSync('src/plugin.tsx',
    fs.readFileSync('src/plugin.tsx')
        .toString()
        .replace(/AppDescr/g, process.env.APP_DESC)
        .replace(/AppAuthor/g, process.env.APP_AUTHOR)
        .replace(/AppName/g, process.env.APP_NAME)
        .replace(/AppShortName/g, process.env.APP_NAME.replace(/ [a-z]/g, (l) => l[1].toUpperCase())));
fs.writeFileSync('build.sh',
    fs.readFileSync('build.sh')
        .toString()
        .replace(/AppName/g, process.env.APP_NAME.toLowerCase().replace(/ /g, '')));