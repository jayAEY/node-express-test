// console.log("hello world");

// const { EventEmitter } = require("events");
// const { platform } = require("os");
// const eventEmitter = new EventEmitter();

// eventEmitter.on("lunch", () => {
//   console.log("yum ");
// });

// eventEmitter.emit("lunch");
// eventEmitter.emit("lunch");

// global.luckyNum = "23";

// console.log(global.luckyNum);

// console.log(process.platform);

// console.log(process.env.USER);

// process.on("exit", function () {
//   console.log("pp");
// });

// const { readFile, readFileSync } = require("fs");

// const txt = readFileSync("./hello.txt", "utf8");
// readFile("./hello.txt", "utf-8", (err, txt) => {
//   console.log(txt);
// });
// async function hello() {
//   const file = await readFile("./hello.txt", "utf-8");
// }
// console.log(txt);

// console.log("do this asap");

// const { hello } = require("./cool.js");
// console.log(hello);

const express = require("express");
const app = express();

// const { readFile } = require("fs");
const { readFile } = require("fs").promises;

// app.get("/", (request, response) => {
//   readFile("./home.html", "utf8", (err, html) => {
//     if (err) {
//       response.status(500).send("sorry, out of order");
//     }
//     response.send(html);
//   });
// });

app.get("/", async (req, res) => {
  res.send(await readFile("./home.html", "utf8"));
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`App available on http://localhost:3000`)
);
