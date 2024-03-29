const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const userRouter = require("./routes/userRoutes");
const chatRouter = require("./routes/chatRoutes");
const messageRouter = require("./routes/messageRoutes");

const app = express();
dotenv.config({ path: "./config.env" });
connectDB();
app.use(express.json());
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("API IS RUNNING!");
});

app.use("/api/user", userRouter);
app.use("/api/chat", chatRouter);
app.use("/api/message", messageRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
