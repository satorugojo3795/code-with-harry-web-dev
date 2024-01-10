const fs = require("fs");
const path = require("path");

const srcFolder = './files';

//reading files
fs.readdir(srcFolder, (err,data)=>{
    if(err){
        console.error("error reading the source folder:",err);
        return;
    }

    //get the extensions of files
    let extensions = [];
    data.forEach((file)=>{
        const ext = path.extname(file).slice(1);
        if(!extensions.includes(ext)){
            extensions.push(ext);
        }
    })

    //make folders of each extension
    extensions.forEach((extension)=>{
        fs.mkdir(extension, (err)=>{
            if(err){
                console.error(`Error creating ${extension} folder`);
            }
            else{
                console.log(`created folder ${extension}`);
            }
        }); 
    });

    //move files into their respective folders
    data.forEach((file)=>{
        const sourceFilePath = path.join(srcFolder,file);
        const ext = path.extname(file).slice(1);
        const destinationFolder = ext;
        const destinationFilePath = path.join(destinationFolder,file);

        fs.rename(sourceFilePath,destinationFilePath,(err)=>{
            if(err){
                console.error(`error moving ${file} to ${ext}`);
            }
            else{
                console.log("File moved successfully");
            }
        });
    })
});
