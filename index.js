const express = require("express");
const app = express();
const path = require("path");
const PORT = 8080;
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Correct way to serve static files
app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "atharva",
    content: "I love coding",
  },
  {
    id: uuidv4(),
    username: "suhaib",
    content: "Hard work is the key to success",
  },
  {
    id: uuidv4(),
    username: "madhav",
    content: "I got selected for my first internship!",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => id === p.id);
  post.content = newContent;
  console.log(post);
  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
//   res.send("delete success");
  res.redirect("/posts");
});

app.get("/", (req, res) => {
  res.send("Server working well!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
