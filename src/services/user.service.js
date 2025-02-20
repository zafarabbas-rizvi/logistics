import prisma from "../models/prisma.js";

const getAllUsers = async () => {
  return await prisma.user.findMany();
};

const createUser = async (name, email) => {
  return await prisma.user.create({
    data: { name, email },
  });
};

export default { getAllUsers, createUser };
