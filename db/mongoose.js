const mongoose = require("mongoose");

const connectionURL = process.ENV.MONGO_URL;

mongoose.connect(connectionURL, () => {
  console.log("Database is Connected");
});
