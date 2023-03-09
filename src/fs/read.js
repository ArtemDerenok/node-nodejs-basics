import fs from "fs/promises";

const read = async () => {
  try {
    const data = await fs.readFile("./src/fs/files/fileToRead.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log("FS operation failed");
  }
};

await read();
