const express = require("express");
const cors = require("cors");
const app = express();
const useRoutes = require("./routes/user");
const { readdirSync } = require("fs");
const options = {
  origin: "http://localhost:3000",
  useSuccessStatus: 200,
};

app.use(cors(options));
app.use("/api", useRoutes);

readdirSync("./routes").map((route) => {
  app.use("/api/v1", require("./routes/" + route));
});

app.listen(8000, () => {
  console.log("server is listening...");
});
