import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_DB_NAME}`)
    .then(() => {
      console.log("Database connection established");
    })
    .catch((error) => {
      console.log(error);
    });
};
