import mongoose from "mongoose";

// database connection
export const mongoDB = () => {
  if (!process.env.MONGO_URI) {
    console.error("MONGO_URI is not defined in the environment variables.");
    return;
  }

  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDb database is connected!");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};
