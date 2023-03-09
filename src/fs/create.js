import fs from "fs/promises";

const create = async () => {
  try {
    await fs.writeFile("./src/fs/files/fresh.txt", "I am fresh and young", {
      flag: "wx",
    });
  } catch (error) {
    console.log("FS operation failed");
  }
};

await create();
