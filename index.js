const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const server = require("./graphql");

const app = express();

app.use(express(cors()));
app.use(express.json());
server.listen(9000);
mongoose
  .connect("mongodb://localhost:27017/real_chat")
  .then(() => console.log("Whassap man!"))
  .catch(() => console.log());
