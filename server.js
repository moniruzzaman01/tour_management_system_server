const mongoose = require("mongoose");
require("dotenv").config();
require("colors");
const port = process.env.PORT || 5001;

const app = require("./app");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/tour_management");
  console.log("db connected!!!".green.bold);
}
main().catch((error) => console.log(`Connection error: ${error}`.red.bold));

app.listen(port, () => {
  console.log(`Listening from: ${port}`.bgWhite.bold);
});
