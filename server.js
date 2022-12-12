const mongoose = require("mongoose");
require("dotenv").config();
require("colors");
const port = process.env.PORT || 5002;

const app = require("./app");

async function main() {
  await mongoose.connect(process.env.MONGODB_COMPASS).then(() => {
    console.log("db connected!!!".green.bold);
  });
}
main().catch((error) => console.log(`Connection error: ${error}`.red.bold));

app.listen(port, () => {
  console.log(`Listening from: ${port}`.bgWhite.bold);
});
