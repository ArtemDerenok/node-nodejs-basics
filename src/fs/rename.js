import fs from "fs/promises";

const rename = async () => {
  try {
    await fs.rename(
      "./src/fs/files/wrongFilename.txt",
      "./src/fs/files/properFilename.md"
    );
  } catch (error) {
    console.log("FS operation failed");
  }
};

await rename();
