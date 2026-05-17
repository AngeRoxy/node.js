// 3 - File System
const fs = require("fs");

// Step 1: Create "welcome.txt" with "Hello Node"
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) {
    console.error("Error creating file:", err);
    return;
  }
  console.log("welcome.txt created successfully!");

  // Step 2: Read and console.log the content of welcome.txt
  fs.readFile("welcome.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    console.log("Content of welcome.txt:", data);
  });
});