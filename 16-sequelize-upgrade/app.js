const express = require("express");
const app = express();
const PORT = 8000;
const router = require("./routes");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);
