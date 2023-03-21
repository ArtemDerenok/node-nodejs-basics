import { fork } from "child_process";

const spawnChildProcess = async (args) => {
  process.argv.push(args);
  const forked = fork("./src/cp/files/script.js", args);

  forked.on("message", (msg) => {
    console.log(msg);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 2, 3, 4]);
