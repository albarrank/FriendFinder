const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

const htmlExternalRoutes = require("./app/routing/htmlRoutes");

const apiExternalRoutes = require("./app/routing/apiRoutes");

app.use("/api", apiExternalRoutes);
app.use("/", htmlExternalRoutes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });