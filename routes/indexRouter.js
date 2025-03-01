const { Router } = require("express");

const indexRouter = Router();



const messages = [
    {
      id: 0,
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      id: 1,
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

let idTracker = messages.length;

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages })
});
indexRouter.post("/new", (req, res) => {
  idTracker++;
  messages.push({ id: idTracker, text: req.body.postText, user: req.body.postAuthor, added: new Date() });
  res.redirect("/");
});

module.exports = { indexRouter, messages };