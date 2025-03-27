const express = require("express");
const { 
  getAllUsers, 
  getUserById, 
  updateUser, 
  deleteUser 
} = require("../controllers/userController");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/")
  .get(protect, admin, getAllUsers);

router.route("/:id")
  .get(protect, getUserById)
  .put(protect, updateUser)
  .delete(protect, admin, deleteUser);

module.exports = router; 