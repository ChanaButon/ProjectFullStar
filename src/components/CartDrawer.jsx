import React, { useContext } from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  Div_ider,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { ShopContext } from "../ShopContext";

export const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, addToCart, removeFromCart } =
    useContext(ShopContext);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.amount,
    0,
  );

  return (
    <Drawer
      anchor="right"
      open={isCartOpen}
      onClose={() => setIsCartOpen(false)}
    >
      <Box
        sx={{
          w_idth: 380,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {/* Header (approx 10% height) */}
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">סל הקניות ({cart.length})</Typography>
          <IconButton onClick={() => setIsCartOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Div_ider />

        <List sx={{ flexGrow: 1, overflowY: "auto", p: 0 }}>
          {cart.length === 0 ? (
            <Typography sx={{ textAlign: "center", mt: 5, color: "gray" }}>
              הסל שלך ריק
            </Typography>
          ) : (
            cart.map((item) => (
              <React.Fragment key={item._id}>
                <ListItem sx={{ py: 2, display: "flex", alignItems: "center" }}>
                  <ListItemAvatar>
                    <Avatar
                      src={item.image}
                      variant="rounded"
                      sx={{ w_idth: 60, height: 60, mr: 2 }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.title}
                    secondary={`$${item.price} x ${item.amount} = $${(item.price * item.amount).toFixed(2)}`}
                    sx={{ textAlign: "right", px: 2 }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <IconButton size="small" onClick={() => addToCart(item._id)}>
                      <AddIcon />
                    </IconButton>
                    <Typography variant="body2">{item.amount}</Typography>
                    <IconButton
                      size="small"
                      onClick={() => removeFromCart(item._id)}
                    >
                      <RemoveIcon />
                    </IconButton>
                  </Box>
                </ListItem>
                <Div_ider />
              </React.Fragment>
            ))
          )}
        </List>

        <Box
          sx={{
            height: "15%",
            p: 3,
            bgcolor: "#f9f9f9",
            borderTop: "2px sol_id #eee",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              ${totalPrice.toFixed(2)}
            </Typography>
            <Typography variant="h6">סה"כ לתשלום:</Typography>
          </Box>
          <Button
            variant="contained"
            fullW_idth
            size="large"
            sx={{ py: 1.5, fontSize: "1.1rem" }}
          >
            לקנייה
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};
