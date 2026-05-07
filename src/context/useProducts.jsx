import React from "react";

// export const productsContext = React.createContext;

// export function useProducts() {
//   const context = useContext(productsContext);
//   if (context === undefined) {
//     throw new Error("useProducts sould only be used in a ProductsProvider");
//   }

//   return context;
// }

import { createContext } from "react";

const CartContext = createContext();
export default CartContext;
