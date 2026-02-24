import { User } from "../models/userModel.js";

/* GET */
export const getAllUsers = async () => {
  return await User.find();
};

export const getUserBy_id = async (_id) => {
  return await User.findBy_id(_id);
};
 
/* POST */
export const createUser = async (data) => {
  return await User.create(data);
};

export const createManyUsers = async (users) => {
  return await User.insertMany(users);
};

/* PUT */
export const updateUserBy_id = async (_id, data) => {
  return await User.findBy_idAndUpdate(_id, data, { new: true });
};

/* DELETE */
export const deleteUserBy_id = async (_id) => {
  return await User.findBy_idAndDelete(_id);
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
