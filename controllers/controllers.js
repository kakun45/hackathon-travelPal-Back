const fs = require("fs");

const readData = () => {
  return JSON.parse(fs.readFileSync("./data/data.json"));
};

// var currentTime = new Date()
//   .toTimeString()
//   .replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
// console.log(myDate) // 10:38:47
// or new Date().toTimeString().split(" ")[0] // '10:41:23'
// function toLocaleTimeString(timestamp) {
//   let date = new Date(timestamp * 1000);
//   return date.toLocaleTimeString("default");
// }

module.exports = {
  readData,
  // toLocaleTimeString,
};
