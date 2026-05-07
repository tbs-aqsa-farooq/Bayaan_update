import { useContext } from "react";
import CartContext from "./useProducts";

export function useCart() {
  return useContext(CartContext);
}
export default useCart;
