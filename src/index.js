const express = require("express");
const router = require("./app/router");
const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
