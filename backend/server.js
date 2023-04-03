const express = require("express");
const dotenv = require("dotenv");

const chats = require("./data/data");

const app = express();
dotenv.config();
const port = process.env.PORT;

app.get("/", (req, res) => {
	res.send("API IS RUNNING!");
});

app.get("/api/chats", (req, res) => {
	console.log(chats);
	res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
	res.send(chats);
});

app.listen(port, () => {
	console.log(`App running on port ${port}`);
});
