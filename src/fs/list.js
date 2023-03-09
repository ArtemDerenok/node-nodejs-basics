import fs from "fs/promises";

const list = async () => {
  try {
    const data = await fs.readdir("./src/fs/files");
    console.log(data);
  } catch (error) {
    console.log("FS operation failed");
  }
};

await list();
