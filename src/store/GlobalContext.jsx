import { createContext, useState } from "react";

const GlobalContext = createContext(null);

const GloabalContextProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [wishListCount, setWishListCount] = useState(0);

  const increaseCart = () => {
    setCartCount(cartCount + 1);
  };
  const increaseWishList = () => {
    setWishListCount(wishListCount + 1);
  };

  return (
    <GlobalContext.Provider
      value={{
        cartCount,
        setCartCount,
        increaseCart,
        wishListCount,
        setWishListCount,
        increaseWishList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GloabalContextProvider;
export { GlobalContext };
