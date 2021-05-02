const mongoose = require("mongoose");

const MONGO_URL=require("./keys").mongoURI

const connectDB = async () => {
  try {
    const conn = mongoose.connect(
     MONGO_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
    console.log(`connected: `);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDB;