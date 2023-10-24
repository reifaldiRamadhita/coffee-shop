import InputElement from "../Elements/Input";
import { CiCoffeeCup } from "react-icons/ci";
import {
  PiThermometerHot,
  PiThermometerCold,
  PiShoppingCart,
} from "react-icons/pi";
import Button from "../Elements/Button/Button";
import { useContext } from "react";
import Swal from "sweetalert2";
import { DatasCoffee } from "../../context/datasCoffeeContext";
import { ImageCoffee } from "../../context/imageCoffeeContext";
import { CheckPrice } from "../../context/checkPriceContext";

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";

const FormCheckout = ({ onIdCoffee }) => {
  const { datasCoffee } = useContext(DatasCoffee);
  const { imgCoffee } = useContext(ImageCoffee);
  const { setPrice, setIdCoffee, setAmount, setSize, setTemperature } =
    useContext(CheckPrice);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const getDataCoffee = datasCoffee.find((data) => data.id === onIdCoffee);
    const name = getDataCoffee.name;
    const img = imgCoffee.find((img, i) => i + 1 == onIdCoffee && img[i]);
    let price;

    switch (e.target.size.value) {
      case "large": {
        price = getDataCoffee.price[e.target.temperature.value] + 5000;
        break;
      }
      case "medium": {
        price = getDataCoffee.price[e.target.temperature.value] + 2500;
        break;
      }
      case "small": {
        price = getDataCoffee.price[e.target.temperature.value];
        break;
      }
    }

    dispatch(
      addToCart({
        size: [e.target.size.value],
        temperature: [e.target.temperature.value],
        amount: [Number(e.target.amount.value)],
        id: onIdCoffee,
        name,
        img,
        price: [price * Number(e.target.amount.value)],
      }),
    );

    setPrice(0);
    setIdCoffee("");
    setAmount(0);
    setSize("");
    setTemperature("");

    const Toast = Swal.mixin({
      toast: true,
      background: "#475569",
      color: "#f8fafc",
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Success to add Coffee",
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {/* amount */}
      <div className="absolute bottom-0 left-0 h-full w-full">
        <InputElement
          id="amount"
          text="Amount"
          type="number"
          classname="text-slate-800 absolute right-12 -top-4 md:right-0 md:top-4 dark:text-slate-200"
          classInput="absolute right-11 top-[4%] md:right-0 md:top-12 h-16 w-16 rounded-full bg-white py-3 ps-3 text-center text-lg font-semibold text-orange shadow-lg outline-none"
        />
      </div>

      {/* cup size */}
      <div className="relative h-[100vw] w-[100vw] rounded-se-full bg-darkSlate/20 dark:bg-white/20 md:h-[50vw] md:w-[50vw] lg:h-[25vw] lg:w-[25vw]">
        <InputElement
          id="large"
          name="size"
          text="Large"
          type="radio"
          value="large"
          classname="absolute left-[20%] top-[10%] text-[50px] flex flex-col items-center text-white/50"
          classInput="w-0"
        >
          <CiCoffeeCup />
        </InputElement>
        <InputElement
          id="medium"
          name="size"
          text="Medium"
          type="radio"
          value="medium"
          classname="absolute left-[53%] top-[33%] text-[45px] flex flex-col items-center text-white/50"
          classInput="w-0"
        >
          <CiCoffeeCup />
        </InputElement>
        <InputElement
          id="small"
          name="size"
          text="Small"
          type="radio"
          value="small"
          classname="absolute left-[72%] top-[65%] text-[40px] flex flex-col items-center text-white/50"
          classInput="w-0"
        >
          <CiCoffeeCup />
        </InputElement>
      </div>

      {/* hot/cold */}
      <div className="absolute bottom-0 left-0 h-[65vw] w-[65vw] rounded-se-full bg-darkSlate/50 dark:bg-white/50 md:h-[32.5vw] md:w-[32.5vw] lg:h-[17vw] lg:w-[17vw]">
        <InputElement
          id="hot"
          name="temperature"
          text="Hot"
          type="radio"
          value="hot"
          classname="absolute left-[28%] top-[18%] text-[40px] flex flex-col items-center text-darkSlate/70"
          classInput="w-0"
        >
          <PiThermometerHot />
        </InputElement>
        <InputElement
          id="cold"
          name="temperature"
          text="Cold"
          type="radio"
          value="cold"
          classname={`absolute left-[56%] top-[48%] text-[40px] flex flex-col items-center text-darkSlate/70 ${
            datasCoffee.find((coffee) => coffee.id === onIdCoffee).price.cold
              ? "block"
              : "hidden"
          }`}
          classInput="w-0"
        >
          <PiThermometerCold />
        </InputElement>
      </div>

      {/* button submit */}
      <Button classname="absolute bottom-0 left-0 h-[35vw] w-[35vw] origin-bottom-left rounded-se-full bg-darkSlate pr-5 pt-5 text-4xl font-bold text-white transition duration-300 hover:scale-110 dark:bg-slate-200 dark:text-slate-800 md:h-[17.5vw] md:w-[17.5vw] lg:h-[9vw] lg:w-[9vw] lg:text-5xl">
        <PiShoppingCart />
      </Button>
    </form>
  );
};

export default FormCheckout;
