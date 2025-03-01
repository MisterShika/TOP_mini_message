const express = require("express");
const app = express();
// const bookRouter = require("./routes/bookRouter");
const {indexRouter} = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const messageRouter = require("./routes/messageRouter");
const path = require("node:path");

app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// app.use("/authors", authorRouter);
// app.use("/books", bookRouter);
app.use("/", indexRouter);
app.use("/new", newRouter);
app.use("/message", messageRouter);


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Application running on http://localhost:${PORT}/`);
})