import type { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
  res.json({ message: "Get all users" });
};

export const getUserById = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Get user with id: ${id}` });
};

export const createUser = (req: Request, res: Response) => {
  res.json({ message: "Create user" });
};

export const updateUser = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Update user with id: ${id}` });
};

export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Delete user with id: ${id}` });
};
