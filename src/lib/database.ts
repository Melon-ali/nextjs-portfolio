import mongoose from "mongoose";

const dbConnect = async () => {
  if (mongoose.connections[0].readyState) {
    return true;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI as string, {
      dbName: "portfolio-auth",
    });
    return true;
  } catch (err) {
    console.log(err);
  }
};

export default dbConnect;