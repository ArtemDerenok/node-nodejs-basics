import fs from "fs";

const write = async () => {
  const writeableStream = fs.createWriteStream(
    "./src/streams/files/fileToWrite.txt"
  );
  process.stdin.on("data", (data) => {
    writeableStream.write(data);
  });
};

await write();
