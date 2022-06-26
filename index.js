const express = require("express");
const mongoose = require("mongoose");

const app = express();

const dbURI = "mongodb+srv://Kihyun:BK8TtZtxvH3awbOf@cluster0.jlirg.mongodb.net/?retryWrites=true&w=majority";
app.use(express.json());  // makes sure the server can receive json as a request body.

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', err => console.error('err::: ', err));
db.once('open', () => console.log('DB started'));

app.listen(2400, () => console.log('Server started: 2400'));
