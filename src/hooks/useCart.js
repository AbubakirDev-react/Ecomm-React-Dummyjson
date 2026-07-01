import { cartContext } from "../context/CartContext";
import { useContext } from "react";

export const useCart = () => {
  const context = useContext(cartContext);
  return context;
}