import express from "express";
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 4000;
const route = require("./route");
const app = express();
app.use("/", route);
app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`)
);
