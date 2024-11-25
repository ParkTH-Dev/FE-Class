import mongoose from "mongoose";

mongoose.connect(`mongodb://127.0.0.1:27017/nodejs`);

const db = mongoose.connection;

const handleOpen = () => {
  console.log("connected to mongoDB 😀");
};
const handleError = (error) => {
  console.log("DB Error 🥲", error);
};

db.on("error", handleError);
db.once("open", handleOpen);
