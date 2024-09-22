const fs = require("fs");
const path = require("path");

// Define the directories containing images (add all the relevant folders)
const imageDirectories = [
  path.join(__dirname, "public/images"), // Your 'public/images' directory
  path.join(__dirname, "public/icons"), // Add other image repository path
];

// Define the directory containing your source code
const codeDirectory = path.join(__dirname, "src"); // Adjust according to where your React components are

// Recursive function to get all files from a directory, including subdirectories
function getFilesRecursively(directory) {
  let files = [];
  fs.readdirSync(directory).forEach((file) => {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      files = files.concat(getFilesRecursively(fullPath));
    } else if (/\.(png|jpg|jpeg|svg|webp|gif)$/.test(fullPath)) {
      // Only include image files
      files.push(fullPath);
    }
  });
  return files;
}

// Get all images from all defined directories
let allImages = [];
imageDirectories.forEach((dir) => {
  allImages = allImages.concat(getFilesRecursively(dir));
});

// Extract just the filenames from the full path
const imageFiles = allImages.map((imagePath) => path.basename(imagePath));

// Get all code files (where the images may be used)
const codeFiles = getFilesRecursively(codeDirectory).filter((file) =>
  /\.(js|jsx|css|html)$/.test(file)
);

// Find unused images
const unusedImages = imageFiles.filter((image) => {
  let isUsed = false;
  for (const file of codeFiles) {
    const content = fs.readFileSync(file, "utf-8");
    if (content.includes(image)) {
      isUsed = true;
      break;
    }
  }
  return !isUsed;
});

console.log("Unused images:", unusedImages);
