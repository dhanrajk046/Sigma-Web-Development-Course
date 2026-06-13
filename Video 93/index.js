// import fs from "fs/promises";
// import fsn from "fs";
// import path from "path";

// const basepath =
//   "C:\\Users\\pc\\OneDrive\\Desktop\\Sigma web development Course\\Video 93";

// let files = await fs.readdir(basepath);

// for (const item of files) {
//   console.log("running for", item);
//   let ext = item.split(".")[item.split(".").length - 1];
//   if (ext != "js" && ext != "json" && item.split(".").length > 1) {
//   }
//   if (fsn.existsSync(path.join(basepath, ext))) {
//     //Move the file to this directory if tis not a js or json file
//     fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
//   } else fs.mkdir(ext);
//   fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
// }


import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const basepath =
  "C:\\Users\\pc\\OneDrive\\Desktop\\Sigma web development Course\\Video 93";

let files = await fs.readdir(basepath);

for (const item of files) {
  console.log("running for", item);

  let fullPath = path.join(basepath, item);
  let stat = await fs.stat(fullPath);

  // Skip folders
  if (!stat.isFile()) {
    continue;
  }

  let ext = item.split(".").pop();

  // Skip js and json files
  if (ext === "js" || ext === "json") {
    continue;
  }

  let extFolder = path.join(basepath, ext);

  // Create extension folder if it doesn't exist
  if (!fsn.existsSync(extFolder)) {
    await fs.mkdir(extFolder);
  }

  // Move file
  await fs.rename(
    fullPath,
    path.join(extFolder, item)
  );
}