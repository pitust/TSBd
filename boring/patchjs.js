let fs = require('fs');
for (let m of process.argv.slice(3)) {
    fs.writeFileSync(m, `System.register(${JSON.stringify('./' + m.slice(10, -3))}, ` + fs.readFileSync(m).slice(16))
}