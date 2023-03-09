import fs from "fs/promises";

const remove = async () => {
  try {
    await fs.unlink("./src/fs/files/fileToRemove.txt");
  } catch (error) {
    console.log("FS operation failed");
  }
};

await remove();
