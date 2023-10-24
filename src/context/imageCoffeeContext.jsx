import imgAmericano from "../assets/img/americano.png";
import imgCappuccino from "../assets/img/cappuccino.png";
import imgDopio from "../assets/img/doppio.png";
import imgEspresso from "../assets/img/espresso.png";
import imgFrappe from "../assets/img/frappe.png";
import imgIrishCoffee from "../assets/img/irish coffee.png";
import imgLatteWithCream from "../assets/img/latte with cream.png";
import imgLatte from "../assets/img/latte.png";
import imgMacchiato from "../assets/img/machiato.png";
import { createContext, useState, useEffect } from "react";

const imageCoffeeContext = createContext();

const ImageCoffeeProvider = ({ children }) => {
  const [imgCoffee, setImgCoffee] = useState([]);

  useEffect(() => {
    setImgCoffee([
      imgEspresso,
      imgDopio,
      imgAmericano,
      imgMacchiato,
      imgLatteWithCream,
      imgCappuccino,
      imgLatte,
      imgFrappe,
      imgIrishCoffee,
    ]);
  }, []);

  return (
    <imageCoffeeContext.Provider value={{ imgCoffee }}>
      {children}
    </imageCoffeeContext.Provider>
  );
};

export const ImageCoffee = imageCoffeeContext;
export default ImageCoffeeProvider;
