import fs from "fs/promises";

const copy = async () => {
  try {
    await fs.cp("./src/fs/files", "./src/fs/files_copy", {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
  } catch (error) {
    console.log("FS operation failed");
  }
};

await copy();
