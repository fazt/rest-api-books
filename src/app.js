const express = require("express");
const app = express();
const indexRoutes = require("./routes/index");
const apiRoutes = require("./routes/api_v1");
require("./db");

// settings
app.set("port", 3000);
app.set("json spaces", 4);

// middlewares
app.use(express.json());

app.use("/", indexRoutes);
app.use("/api", apiRoutes);

app.listen(app.get("port"), () => {
  console.log("server running on port", 3000);
});
