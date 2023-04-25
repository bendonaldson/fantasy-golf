import express from "express";
import {
  updateUser,
  deleteUser,
  getUserById,
  getAllUsers,
  updateUserRole,
} from "../controllers/users.js";
import { verifyToken, isAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/", verifyToken, isAdmin, getAllUsers);
router.get("/:id", verifyToken, isAdmin, getUserById);
router.put("/:id", verifyToken, isAdmin, updateUser);
router.put("/:id/role", verifyToken, isAdmin, updateUserRole);
router.delete("/:id", verifyToken, isAdmin, deleteUser);

export default router;
