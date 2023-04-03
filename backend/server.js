const express = require("express");
const dotenv = require("dotenv");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const userRouter = require("./routes/userRoutes");

const app = express();
dotenv.config();
app.use(express.json());
const port = process.env.PORT;

app.get("/", (req, res) => {
	res.send("API IS RUNNING!");
});

app.use("/api/user", userRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
	console.log(`App running on port ${port}`);
});
