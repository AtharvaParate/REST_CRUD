const express = require("express");
const app = express();
const path = require("path");
const PORT = 8080;

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Correct way to serve static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Server working well!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
