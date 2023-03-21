import { createUnzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";

const decompress = async () => {
  const unzip = createUnzip();

  const inp = createReadStream("./files/archive.gz");
  const out = createWriteStream("./files/fileToCompress.txt");

  inp.pipe(unzip).pipe(out);
};

await decompress();
