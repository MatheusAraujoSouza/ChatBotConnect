const express = require("express");
require("openai");
const router = require("./app/router");

app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
