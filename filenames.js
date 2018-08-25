const fs = require('fs');
const path = require('path');

let dirs = [];
dirs = (process.env.dirNames || '').split(' ').slice(1);
console.log(dirs);
let dir = fs.readdirSync(path.resolve(__dirname, './views'));
let fileNames = [];
dir.map(subDir => {
    let files = fs.readdirSync(path.resolve(__dirname, `./views/${subDir}`));
    if (dirs.length) {
        if (dirs.includes(subDir)) {
            files.map(filename => {
                fileNames.push(`${subDir}/${filename}`);
            });
        }
        return false;
    }
    files.map(filename => {
        fileNames.push(`${subDir}/${filename}`);
    });

});

console.log(fileNames);
if (fileNames.length === 0) {
    console.log('no files build.sh');
    process.exit(0);
}
module.exports = fileNames;
