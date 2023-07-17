import React from "react";
import {
  Drawer,
  // Button,
  Typography,
  IconButton
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import { formatCurrency } from "../utils/formatCurrency";
import StoreItems from "../data/data.json";

type ShoppingCartProps = {
  isOpen:boolean
}
 
export function ShoppingCart( {isOpen } :ShoppingCartProps) {
  const { closeCart,cartItems } = useShoppingCart();
  // const [open, setOpen] = React.useState(false);
  // const openDrawer = () => setOpen(true);
  // const closeDrawer = () => setOpen(false);
 
  return (
    <React.Fragment>
      {/* <Button onClick={openDrawer}>Open Drawer</Button> */}
      <Drawer open = { isOpen } onClose={closeCart}  placement="right" size={450}>
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            Cart
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeCart}>
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>
        <div className="w-full p-2 flex flex-col">
          { cartItems.map((item) => (
            <CartItem key = {item.id} {...item} />
          ))}
          <div className="ms-auto font-bold">
              Total {formatCurrency(cartItems.reduce((total,cartItem) =>  {
                 const item  = StoreItems.find(item => item.id === cartItem.id)
                 return total + (item?.price || 0) * cartItem.quantity
              },0))}  
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
}