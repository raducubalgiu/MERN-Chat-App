const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {
	fetchChats,
	accessChat,
	createGroup,
	renameGroup,
	removeFromGroup,
	addToGroup,
} = require("../controllers/chatController");

const router = express.Router();

router.route("/").get(protect, fetchChats).post(protect, accessChat);
router.route("/group").post(protect, createGroup);
router.route("/rename").put(protect, renameGroup);
router.route("/groupremove").put(protect, removeFromGroup);
router.route("/groupadd").put(protect, addToGroup);

module.exports = router;
