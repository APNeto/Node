const fs = require("fs");

const my_callback = (message) => {
  console.log(message);
};

fs.readFile("tes.txt", (err, data) => {
  if (err) {
    my_callback("looks like we encountered an error...");
  }
  my_callback(data);
});