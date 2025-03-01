const {Router} = require("express");
const {messages} = require("./indexRouter");

const messageRouter = Router();


messageRouter.get("/:messageId", (req, res) => {
    const { messageId } = req.params;
    const message = messages.find(msg => msg.id == messageId);

    if (!message) {
        return res.status(404).send("Message not found");
    }

    res.render("message", { message });
});

module.exports = messageRouter;