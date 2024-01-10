const fs = require('fs');
const path = require('path');

// Specify the folder path
const folderPath = './6. Backend, node.js and npm/1. Exercise - Clear Clutter/files';

// Read the contents of the folder
fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error(`Error reading folder: ${err}`);
        return;
    }

    // List the files in the folder
    console.log('Files in the folder:');
    files.forEach((file) => {
        console.log(file);
    });
});
