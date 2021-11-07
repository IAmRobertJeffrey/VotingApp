const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
require("dotenv/config");
const cors = require("cors");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());

const pollsRoute = require("./routes/polls");
app.use("/polls", pollsRoute);


mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    console.log("connected to db");
  });

app.set("port", process.env.PORT || 3050);

app.get("/", (request, response) => {
  const rootObject = {
    routes: ["/polls"],
  };
  response.json(rootObject);
});

app.listen(app.get("port"), function () {
  console.log("Express server listening on port " + app.get("port"));
});
