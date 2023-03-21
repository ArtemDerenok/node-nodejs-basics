import { Worker } from "worker_threads";
import os from "os";

const performCalculations = async () => {
  const cores = os.cpus();
  let initNum = 9;
  const result = [];
  const promises = [];
  for (let i = 0; i < cores.length; i++) {
    initNum++;
    const worker = new Worker("./src/wt/worker.js", {
      workerData: initNum,
    });

    const obj = {};

    const done = (el) => {
      promises.push(
        new Promise((res) => {
          el.on("message", (msg) => {
            obj.status = "resolved";
            obj.data = msg;
            res(result.push(obj));
          });
          el.on("error", () => {
            obj.data = null;
            obj.status = "error";
            res(result.push(obj));
          });
        })
      );
    };

    done(worker);
  }
  Promise.all(promises).then(() => console.log(result));
};

await performCalculations();
