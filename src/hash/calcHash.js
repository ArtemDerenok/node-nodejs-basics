import fs from "fs/promises";
import { createHash } from "crypto";

const calculateHash = async () => {
  try {
    const data = await fs.readFile(
      "./src/hash/files/fileToCalculateHashFor.txt",
      "utf-8"
    );
    const hash = createHash("sha256").update(data).digest("hex");
    console.log(hash);
  } catch (error) {
    console.log(error.message);
  }
};

await calculateHash();
