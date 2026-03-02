import express from "express";
import {
  getAllUsersController,
  getUserByidController,
  createUserController,
  createManyUsersController,
  updateUserController,
  deleteUserController,
  deleteAllUsersController,
  loginController,
  changePasswordController
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAllUsersController);              // 1
router.get("/:id", getUserByidController);           // 2
router.post("/", createUserController);              // 3
router.post("/many", createManyUsersController);     // 4
router.put("/:id", updateUserController);            // 5
router.delete("/:id", deleteUserController);         // 6
router.delete("/", deleteAllUsersController);         // 7
router.post("/login", loginController);               // 8 (not active)
router.put("/change-password", changePasswordController); // 9 (not active)

export default router;
