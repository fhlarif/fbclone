const express = require("express");
const cors = require("cors");
const app = express();
const useRoutes = require("./routes/user");
const { readdirSync } = require("fs");
const dotenv = require("dotenv");
const options = {
  origin: "http://localhost:3000",
  useSuccessStatus: 200,
};

dotenv.config();

app.use(cors(options));
app.use("/api", useRoutes);

readdirSync("./routes").map((route) => {
  app.use("/api/v1", require("./routes/" + route));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
