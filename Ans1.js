// Read the local directory and list all file names in it using JS.
const fs = require('fs');

function printFileNames(){
    const path = './';
    fs.readdirSync(path).forEach(file => {
        console.log(file);
    });
}

printFileNames();