import { createGzip } from "zlib";
import { createWriteStream, createReadStream } from "fs";

const compress = async () => {
  const gzip = createGzip();

  const source = createReadStream("./src/zip/files/fileToCompress.txt");
  const destination = createWriteStream("./src/zip/files/archive.gz");

  source.pipe(gzip).pipe(destination);
};

await compress();
