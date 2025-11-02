import type { Request, Response } from "express";

const mockUsers = [
  { id: "1", name: "Alice", email: "alice@example.com" },
  { id: "2", name: "Bob", email: "bob@example.com" },
  { id: "3", name: "Charlie", email: "charlie@example.com" },
];

export const getUsers = (req: Request, res: Response) => {
  res.json({ message: "Get all users", users: mockUsers });
};

export const getUserById = (req: Request, res: Response) => {
  const { id } = req.params;
  const user = mockUsers.find((u) => u.id === id);
  if (user) {
    res.json({ message: `Get user with id: ${id}`, user });
  } else {
    res.status(404).json({ message: `User with id: ${id} not found` });
  }
};

export const createUser = (req: Request, res: Response) => {
  // For mock, just send back the data as if created
  const newUser = {
    id: (mockUsers.length + 1).toString(),
    ...req.body,
  };
  res.status(201).json({ message: "Create user", user: newUser });
};

export const updateUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const userIndex = mockUsers.findIndex((u) => u.id === id);
  if (userIndex !== -1) {
    const updatedUser = { ...mockUsers[userIndex], ...req.body };
    res.json({ message: `Update user with id: ${id}`, user: updatedUser });
  } else {
    res.status(404).json({ message: `User with id: ${id} not found` });
  }
};

export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const user = mockUsers.find((u) => u.id === id);
  if (user) {
    res.json({ message: `Delete user with id: ${id}`, user });
  } else {
    res.status(404).json({ message: `User with id: ${id} not found` });
  }
};
