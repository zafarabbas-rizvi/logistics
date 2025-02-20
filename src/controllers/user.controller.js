import userService from "../services/user.service.js";

export const getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await userService.createUser(name, email);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
  }
};
