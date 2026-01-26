import * as userService from "../services/userService.js";

/* GET */
export const getAllUsersController = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const getUserByIdController = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
};

/* POST */
export const createUserController = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const createManyUsersController = async (req, res) => {
  try {
    const users = await userService.createManyUsers(req.body);
    res.status(201).json(users);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

/* PUT */
export const updateUserController = async (req, res) => {
  try {
    const updated = await userService.updateUserById(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(updated);
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
};

/* DELETE */
export const deleteUserController = async (req, res) => {
  try {
    const deleted = await userService.deleteUserById(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(deleted);
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
};

export const deleteAllUsersController = async (req, res) => {
  try {
    await userService.deleteAllUsers();
    res.status(200).json({ message: "All users deleted" });
  } catch {
    res.status(500).json({ message: "Delete failed" });
  }
};

/* NOT ACTIVE */
export const loginController = (req, res) => {
  res.status(501).json({ message: "Login not active yet" });
};

export const changePasswordController = (req, res) => {
  res.status(501).json({ message: "Change password not active yet" });
};
