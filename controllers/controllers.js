const fs = require("fs");

const readData = () => {
return JSON.parse(fs.readFileSync("./data/data.json"));
}

module.exports = {
  readData,
};
