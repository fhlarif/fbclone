const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const useRoutes = require("./routes/user");
const { readdirSync } = require("fs");
const dotenv = require("dotenv");

/* Enable env */
dotenv.config();

/* Routes */
/* Setup Cors */
const options = {
  origin: "http://localhost:3000",
  useSuccessStatus: 200,
};

app.use(cors(options));
app.use("/api", useRoutes);

readdirSync("./routes").map((route) => {
  app.use("/api/v1", require("./routes/" + route));
});

/* Database */
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log("error connecting on mongodb", err));

/* Port */
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
