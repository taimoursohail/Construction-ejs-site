import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// __dirname setup (ESM ke liye zaroori)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewear:
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// REQ / RES Cycle:
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/projects", (req, res) => {
  res.render("projects.ejs");
});

app.get("/about-us", (req, res) => {
  res.render("about-us.ejs");
});

app.get("/services", (req, res) => {
  res.render("services.ejs");
});

app.get("/my-website", (req, res) => {
  res.redirect("https://taimoursohail.com");
});

// Server start:
app.listen(port, () => {
  console.log(`prototype app is running on port ${port}`);
});
