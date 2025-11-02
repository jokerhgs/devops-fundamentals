import type { Request, Response } from "express";

const mockProducts = [
  { id: "1", name: "Laptop", price: 1200 },
  { id: "2", name: "Monitor", price: 350 },
  { id: "3", name: "Keyboard", price: 100 },
];

export const getProducts = (req: Request, res: Response) => {
  res.json({ message: "Get all products", products: mockProducts });
};

export const getProductById = (req: Request, res: Response) => {
  const { id } = req.params;
  const product = mockProducts.find((p) => p.id === id);
  if (product) {
    res.json({ message: `Get product with id: ${id}`, product });
  } else {
    res.status(404).json({ message: `Product with id: ${id} not found` });
  }
};

export const createProduct = (req: Request, res: Response) => {
  // For mock, just send back the data as if created
  const newProduct = {
    id: (mockProducts.length + 1).toString(),
    ...req.body,
  };
  res.status(201).json({ message: "Create product", product: newProduct });
};

export const updateProduct = (req: Request, res: Response) => {
  const { id } = req.params;
  const productIndex = mockProducts.findIndex((p) => p.id === id);
  if (productIndex !== -1) {
    const updatedProduct = { ...mockProducts[productIndex], ...req.body };
    res.json({ message: `Update product with id: ${id}`, product: updatedProduct });
  } else {
    res.status(404).json({ message: `Product with id: ${id} not found` });
  }
};

export const deleteProduct = (req: Request, res: Response) => {
  const { id } = req.params;
  const product = mockProducts.find((p) => p.id === id);
  if (product) {
    res.json({ message: `Delete product with id: ${id}`, product });
  } else {
    res.status(404).json({ message: `Product with id: ${id} not found` });
  }
};
