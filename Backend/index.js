import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
// const port = 3000;
dotenv.config();
const PORT = process.env.PORT || 4000;
const MongoDBURI = process.env.MongoDBURI;

// connect to mongoDB
try {
mongoose.connect
} catch (error)(URI,{
})

}


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});