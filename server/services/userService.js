import { User } from "../models/userModel.js";

/* GET */
export const getAllUsers = async () => {
  return await User.find();
};

export const getUserById = async (id) => {
  return await User.findById(id);
};
 
/* POST */
export const createUser = async (data) => {
  return await User.create(data);
};

export const createManyUsers = async (users) => {
  return await User.insertMany(users);
};

/* PUT */
export const updateUserById = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

/* DELETE */
export const deleteUserById = async (id) => {
  return await User.findByIdAndDelete(id);
};

export const deleteAllUsers = async () => {
  return await User.deleteMany();
};

/* NOT ACTIVE YET */
export const loginUser = async () => {
  throw new Error("Login service not active yet");
};

export const changePassword = async () => {
  throw new Error("Change password service not active yet");
};
