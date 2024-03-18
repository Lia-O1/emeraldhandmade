import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  if (isConnected) {
    console.log("Already connected to the database");
    return;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("The MONGODB_URI environment variable is not set");
  }

  try {
    await mongoose.connect(uri, {
      dbName: "emerald_handmade",
    });

    isConnected = true;
    console.log("Successfully connected to the database");

    mongoose.connection.on("error", async (err) => {
      console.error(`Mongoose connection error: ${err}`);
      isConnected = false;
      console.log("Attempting to reconnect to the database...");
      await mongoose.connect(uri);
    });

    mongoose.connection.on("disconnected", async () => {
      console.error("Mongoose disconnected");
      isConnected = false;
      console.log("Attempting to reconnect to the database...");
      await mongoose.connect(uri);
    });
  } catch (error) {
    console.error("Error connecting to the database", error);
  }
};
