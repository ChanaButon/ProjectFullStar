const BASE_URL = "http://localhost:3001/api/products";

export const handleProducts = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error("Failed to fetch products");
  return response.json();
};

export const fetchSingleProduct = async (_id) => {
  const response = await fetch(`${BASE_URL}/${_id}`);
  if (!response.ok) throw new Error("Product not found");
  return response.json();
};


export const createProduct = async (product) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!response.ok) throw new Error("Failed to create product");
  return response.json();
};

export const updateProduct = async (_id, product) => {
  const response = await fetch(`${BASE_URL}/${_id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!response.ok) throw new Error("Failed to update product");
  return response.json();
};

export const deleteProduct = async (_id) => {
  const response = await fetch(`${BASE_URL}/${_id}`, {
    method: "DELETE",
  });

  if (!response.ok) throw new Error("Failed to delete product");
  return response.json();
};