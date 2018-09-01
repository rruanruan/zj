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
            pushFiles(files, subDir);
        }
        return false;
    }
    pushFiles(files, subDir);


});

function pushFiles(files, subDir) {
    files.map(filename => {
        let file = fs.readFileSync(path.resolve(__dirname, `./views/${subDir}/${filename}`), 'utf-8');
        let titles = file.match(/document\.title.*\n/)[0];
        let title = '';
        if (titles.length) {
            title = titles.split('=')[1].replace(/['|"|;|\n]/g, '');
        }
        fileNames.push({
            name: `${subDir}/${filename}`,
            title
        });
    });
}

console.log(fileNames);
if (fileNames.length === 0) {
    console.log('no files build.sh');
    process.exit(0);
}
module.exports = fileNames;

