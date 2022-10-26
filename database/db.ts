import "colors";
import mongoose from "mongoose";

const connectDB = (url: string | undefined) => {
  // non null assertion operator, since url might be undefined, assure connectdb that at this must, it must not be underfined
  return mongoose
    .connect(url!)
    .then(() => console.log(`[mongoDB]: Connected to MongoDB`.cyan.underline));
};

export default connectDB;
