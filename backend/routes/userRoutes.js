const express = require("express");
<<<<<<< HEAD
const {
	registerUser,
	authUser,
	allUsers,
} = require("../controllers/userController");
=======
const { registerUser, loginUser } = require("../controllers/userController");
>>>>>>> 676af14584829938ec80e8c1d70e47bb103eb1ab

const router = express.Router();

router.route("/").post(registerUser).get(allUsers);
router.post("/login", authUser);

module.exports = router;
