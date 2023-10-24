import { useState, useEffect } from "react";
import { createContext } from "react";

const CheckPriceContext = createContext();

const CheckPriceContextProvider = ({ children }) => {
  const [price, setPrice] = useState(0);
  const [idCoffee, setIdCoffee] = useState("");
  const [amount, setAmount] = useState(0);
  const [size, setSize] = useState("");
  const [temperature, setTemperature] = useState("");

  useEffect(() => {
    if (amount && size && temperature) {
      setPrice(
        (idCoffee.price[temperature] +
          (size === "large" ? 5000 : size === "medium" ? 2500 : 0)) *
          amount,
      );
    }
  }, [amount, size, temperature, idCoffee]);

  return (
    <CheckPriceContext.Provider
      value={{
        idCoffee,
        setIdCoffee,
        amount,
        setAmount,
        size,
        setSize,
        temperature,
        setTemperature,
        price,
        setPrice,
      }}
    >
      {children}
    </CheckPriceContext.Provider>
  );
};

export const CheckPrice = CheckPriceContext;
export default CheckPriceContextProvider;
