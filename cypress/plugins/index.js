const path = require("path");
const fs = require("fs");

function readAllPractices() {
  const directoryPath = path.join(
    __dirname,
    "..",
    "..",
    "src",
    "pages",
    "practice"
  );

  var practices = [];

  files = fs.readdirSync(directoryPath);
  files.forEach(function (file) {
    practices = [...practices, file.split(".")[0]];
  });

  return practices;
}

module.exports = (on, config) => {
  // modify env var value
  config.env.files = readAllPractices();

  // return config
  return config;
};
