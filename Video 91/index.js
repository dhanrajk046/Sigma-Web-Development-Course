// You have to write a Node.js program to clear clutter inside of a directory and organise the contents of that directory into different folders

//for example, these files become:

//1. name.jpg
//2. name.png
//3. this.pdf
//4. harry.zip
//5. Rohan.zip
//6. cat.jpg
//7. harry.pdf

// this:
// jpg/name.jpg, jpg/cat.jpg
// png/name.png
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip

const fs = require("fs");
const path = require("path");

const dirpath = "./"; //Current directory

fs.readdir(dirpath, (err, file) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  const currentScript = path.basename(__filename);

  file.forEach((file) => {
    const filepath = path.join(dirpath, file);

    //Skip directories and this script itself
    if (fs.statSync(filepath).isFile()) {

      if (file === currentScript) return;

      // 3. Get extension (e.g., 'jpg', 'pdf')
      const ext = path.extname(file).slice(1);

      // If the file actually has an extension (ignores files like '.gitignore' or files with no extension)
      if (ext) {
        const folderPath = path.join(dirpath, ext);

        // 4. Create folder if it doesn't exist
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath);
        }

        // 5. Move file into the folder
        const newPath = path.join(folderPath, file);
        fs.renameSync(filepath, newPath);

        console.log(`Moved: ${file} -> ${ext}/`);
        }
      }
  });
});
