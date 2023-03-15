import { Transform } from "stream";

const transform = async () => {
  const transformStream = new Transform({ objectMode: true });

  transformStream._transform = function (chunk, encoding, callback) {
    callback(null, chunk);
  };

  process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
