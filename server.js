require("dotenv").config();
require("colors");
const port = process.env.PORT || 5001;

const app = require("./app");

app.listen(port, () => {
  console.log(`Connection error: ${port}`.bgWhite.bold);
});
