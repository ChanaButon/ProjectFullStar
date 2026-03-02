import { useState } from "react";
import { Container, Typography, Button } from "@mui/material";
import { useQueryClient, useMutation } from "@tanstack/react-query";

import { useProducts } from "../hooks/useProducts";
import {
  createProduct,
  updateProduct,
  deleteProduct,
} from "../api/products-functions";

import ProductTable from "../components/admin/ProductTable";
import ProductModal from "../components/admin/ProductModal";

export const AdminPage = () => {
  const { data: products = [], isLoading } = useProducts();
  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const invalidate = () =>
    queryClient.invalidateQueries({ queryKey: ["all-products"] });

  const createMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      invalidate();
      setOpen(false);
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, product }) => updateProduct(id, product),
    onSuccess: () => {
      invalidate();
      setOpen(false);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: invalidate,
  });

  const handleSubmit = (data) => {
    if (selectedProduct) {
      updateMutation.mutate({
        id: selectedProduct._id,
        product: data,
      });
    } else {
      createMutation.mutate(data);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Admin Panel
      </Typography>

      <Button
        variant="contained"
        sx={{ mb: 2 }}
        onClick={() => {
          setSelectedProduct(null);
          setOpen(true);
        }}
      >
        Add Product
      </Button>

      <ProductTable
        products={products}
        onEdit={(p) => {
          setSelectedProduct(p);
          setOpen(true);
        }}
        onDelete={(id) => deleteMutation.mutate(id)}
      />

      <ProductModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmit}
        product={selectedProduct}
      />
    </Container>
  );
};