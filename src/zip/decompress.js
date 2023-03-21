import { createUnzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";

const decompress = async () => {
  const unzip = createUnzip();

  const inp = createReadStream("./src/zip/files/archive.gz");
  const out = createWriteStream("./src/zip/files/fileToCompress.txt");

  inp.pipe(unzip).pipe(out);
};

await decompress();
