const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5050;
const corsOptions = {
  origin: 'https://knowledge-sharing-app.netlify.app',
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(require("./routes/employees"));
// get driver connection
const dbo = require("./db/conn");
 
// simple route
app.get("/api", (req, res) => {
  res.json({ message: "Hello world" });
});

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});
