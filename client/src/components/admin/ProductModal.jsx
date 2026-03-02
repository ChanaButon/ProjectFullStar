import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

import { useForm } from "react-hook-form";
import { useEffect } from "react";

const ProductModal = ({ open, onClose, onSubmit, product }) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (product) {
      reset(product);
    } else {
      reset({
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
      });
    }
  }, [product, reset]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth>

      <DialogTitle>
        {product ? "Update Product" : "Create Product"}
      </DialogTitle>

      <DialogContent>

        <TextField
          label="Title"
          fullWidth
          margin="normal"
          {...register("title", { required: true, minLength: 3 })}
        />

        <TextField
          label="Price"
          type="number"
          fullWidth
          margin="normal"
          {...register("price", { required: true })}
        />

        <TextField
          label="Category"
          fullWidth
          margin="normal"
          {...register("category")}
        />

        <TextField
          label="Image URL"
          fullWidth
          margin="normal"
          {...register("image")}
        />

        <TextField
          label="Description"
          fullWidth
          multiline
          rows={3}
          margin="normal"
          {...register("description")}
        />

      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>

        <Button
          variant="contained"
          onClick={handleSubmit((data) =>
            onSubmit({
              ...data,
              price: Number(data.price),
            })
          )}
        >
          Save
        </Button>
      </DialogActions>

    </Dialog>
  );
};

export default ProductModal;