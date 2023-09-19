import { useRef, useState, useEffect } from "react";
import { CiCoffeeCup } from "react-icons/ci";
import {
  PiThermometerHot,
  PiThermometerCold,
  PiShoppingCart,
} from "react-icons/pi";
import { gsap } from "gsap";
import datasCoffee from "../assets/json/coffees.json";

export default function Checkout({
  onIdCoffee,
  onCheckoutImgCoffee,
  onCancleCheckout,
  onCheckoutCoffee,
}) {
  const [sizeCoffee, setSizeCoffee] = useState("");
  const [temperature, setTemperature] = useState("");
  const [amount, setAmount] = useState(1);
  const el = useRef(null);
  const imgInfo = useRef(null);
  const infoNameCoffee = useRef(null);
  const elementAmount = useRef(null);
  const inputAmount = useRef(null);

  const dataCoffee = datasCoffee.find((coffee) => coffee.id === onIdCoffee);
  const price =
    temperature === "hot" ? dataCoffee.price.hot : dataCoffee.price.ice;

  const handleSizeCoffee = (size) => {
    setSizeCoffee(size.target.value);
  };

  const handleTemperatureCoffee = (tmp) => {
    setTemperature(tmp.target.value);
  };

  const handleAmount = (number) => {
    setAmount(number);
  };

  useEffect(() => {
    gsap.fromTo(
      [imgInfo.current],
      { xPercent: 300, duration: 0.5, delay: 0.5 },
      { xPercent: 0, duration: 0.5, delay: 0.5 },
    );
    gsap.fromTo(
      infoNameCoffee.current,
      { xPercent: -200, duration: 0.5, delay: 0.5 },
      { xPercent: 0, duration: 0.5, delay: 0.5 },
    );
    gsap.to(elementAmount.current, {
      transformOrigin: "0% 100%",
      rotation: 50,
      duration: 2,
      delay: 1.5,
    });
    gsap.to(inputAmount.current, {
      rotation: -50,
      duration: 2,
      delay: 1.5,
    });
  }, []);

  return (
    <div className="fixed bottom-0 left-0 z-50 h-screen w-full bg-slate-100 backdrop-blur-md dark:bg-transparent md:w-1/2 md:overflow-hidden dark:md:bg-darkSlate lg:left-[10%] lg:w-[40%]">
      {/* button cancel */}
      <div className="absolute right-5 top-5" onClick={onCancleCheckout}>
        <button className="h-10 w-10 rounded-full bg-red-500 font-bold text-white">
          X
        </button>
      </div>

      {/* info coffee */}
      <div className="absolute bottom-[115vw] left-1/2 flex w-full -translate-x-1/2 justify-center gap-10 px-10 md:bottom-[60vw] lg:bottom-[55%]">
        <div
          ref={infoNameCoffee}
          className="w-full lg:flex lg:flex-col lg:items-end"
        >
          <h1 className="mb-4 text-end font-poiret text-3xl font-bold text-darkSlate dark:text-white">
            {dataCoffee.name}
          </h1>
          {dataCoffee.substance.map((el, i) => (
            <p
              key={i}
              className="border-b-2 border-slate-400 text-end font-poiret font-semibold text-slate-800 dark:text-white lg:w-36"
            >
              {el}
            </p>
          ))}
          <p
            style={
              sizeCoffee && temperature
                ? { display: "block" }
                : { display: "none" }
            }
            className="mt-8 text-5xl font-bold text-orange"
          >
            <span className="me-1 text-xl text-darkSlate dark:text-white">
              Rp.
            </span>
            {sizeCoffee === "medium"
              ? temperature === "hot"
                ? ((dataCoffee.price.hot + 5000) * amount) / 1000
                : ((dataCoffee.price.ice + 5000) * amount) / 1000
              : sizeCoffee === "large"
              ? temperature === "hot"
                ? ((dataCoffee.price.hot + 10000) * amount) / 1000
                : ((dataCoffee.price.ice + 10000) * amount) / 1000
              : temperature === "hot"
              ? (dataCoffee.price.hot * amount) / 1000
              : (dataCoffee.price.ice * amount) / 1000}
            K
          </p>
        </div>
        <img
          ref={imgInfo}
          src={onCheckoutImgCoffee}
          alt="img-coffee"
          className="h-fit w-32"
        />
      </div>

      <div
        ref={el}
        className="absolute bottom-0 left-0 h-[100vw] w-[100vw] animate-scaleUp rounded-se-full border-r-4 border-t-4 border-dashed border-slate-500 backdrop-blur-lg dark:border-white md:h-[50vw] md:w-[50vw] lg:h-[25vw] lg:w-[25vw]"
      >
        {/* form checkout */}
        <form
          className="h-[100vw] w-[100vw] rounded-se-full md:h-[50vw] md:w-[50vw] lg:h-[25vw] lg:w-[25vw]"
          onSubmit={(e) => {
            e.preventDefault();
            return onCheckoutCoffee([
              dataCoffee.id,
              dataCoffee.name,
              price,
              sizeCoffee,
              temperature,
              amount,
            ]);
          }}
        >
          {/* amont */}
          <div
            ref={elementAmount}
            className="absolute bottom-0 left-0 h-[100vw] w-[100vw] rounded-se-full md:h-[50vw] md:w-[50vw] lg:h-[25vw] lg:w-[25vw]"
          >
            <label ref={inputAmount} className="absolute -left-20 -top-32">
              <p className="mb-2 text-lg font-semibold text-darkSlate dark:text-white">
                Amount
              </p>
              <input
                type="number"
                name="amount"
                min="1"
                max="50"
                required
                value={amount}
                className="h-16 w-16 rounded-full bg-white py-3 ps-3 text-center text-lg font-semibold text-orange shadow-lg outline-none"
                onChange={(number) => handleAmount(number.target.value)}
              />
            </label>
          </div>

          {/* size */}
          <div className="relative h-[100vw] w-[100vw] rounded-se-full bg-darkSlate/20 dark:bg-white/20 md:h-[50vw] md:w-[50vw] lg:h-[25vw] lg:w-[25vw]">
            <label
              className="absolute left-[20%] top-[5%] flex flex-col justify-center text-7xl text-white"
              style={
                sizeCoffee === "large"
                  ? { color: "#e38035" }
                  : { color: "white" }
              }
            >
              <input
                type="radio"
                name="size"
                value="large"
                className="w-0"
                onChange={(value) => handleSizeCoffee(value)}
              />
              <CiCoffeeCup />
              <p className="text-center text-base">Large</p>
            </label>
            <label
              className="absolute left-[54%] top-[28%] flex flex-col justify-center text-6xl text-white"
              style={
                sizeCoffee === "medium"
                  ? { color: "#e38035" }
                  : { color: "white" }
              }
            >
              <input
                type="radio"
                name="size"
                value="medium"
                className="w-0"
                onChange={(value) => handleSizeCoffee(value)}
              />
              <CiCoffeeCup />
              <p className="text-center text-base">Medium</p>
            </label>
            <label
              className="absolute left-3/4 top-[60%] flex flex-col justify-center text-5xl text-white"
              style={
                sizeCoffee === "small"
                  ? { color: "#e38035" }
                  : { color: "white" }
              }
            >
              <input
                type="radio"
                name="size"
                value="small"
                className="w-0"
                onChange={(value) => handleSizeCoffee(value)}
              />
              <CiCoffeeCup />
              <p className="text-center text-base">Small</p>
            </label>
          </div>

          {/* hot/cold */}
          <div className="absolute bottom-0 left-0 h-[65vw] w-[65vw] rounded-se-full bg-darkSlate/50 dark:bg-white/50 md:h-[32.5vw] md:w-[32.5vw] lg:h-[17vw] lg:w-[17vw]">
            <label
              className="absolute left-[30%] top-[14%] flex flex-col justify-center text-5xl"
              style={
                temperature === "hot"
                  ? { color: "#f87171" }
                  : { color: "#ffffff" }
              }
            >
              <input
                type="radio"
                name="temperature"
                value="hot"
                className="w-0"
                onChange={(value) => handleTemperatureCoffee(value)}
              />
              <PiThermometerHot />
              <p className="text-center text-base">Hot</p>
            </label>
            <label
              className="absolute left-[60%] top-[42%] flex flex-col justify-center text-5xl"
              style={
                temperature === "cold"
                  ? { color: "#3b82f6" }
                  : { color: "#ffffff" }
              }
            >
              {dataCoffee.price.ice ? (
                <>
                  <input
                    type="radio"
                    name="temperature"
                    value="cold"
                    className="w-0"
                    onChange={(value) => handleTemperatureCoffee(value)}
                  />
                  <PiThermometerCold />
                  <p className="text-center text-base">Cold</p>
                </>
              ) : (
                <>
                  <input
                    type="radio"
                    name="temperature"
                    value="cold"
                    disabled
                    className="w-0"
                    onChange={(value) => handleTemperatureCoffee(value)}
                  />
                  <p className="text-slate-400">
                    <PiThermometerCold />
                  </p>
                  <p className="text-center text-base text-slate-400">Cold</p>
                </>
              )}
            </label>
          </div>

          {/* submit */}
          <button className="absolute bottom-0 left-0 h-[35vw] w-[35vw] origin-bottom-left rounded-se-full bg-darkSlate pr-5 pt-5 text-2xl font-bold text-white transition duration-300 hover:scale-110 dark:bg-white dark:text-darkSlate md:h-[17.5vw] md:w-[17.5vw] lg:h-[9vw] lg:w-[9vw]">
            <p className="flex justify-center text-5xl font-bold">
              <PiShoppingCart />
            </p>
          </button>
        </form>
      </div>
    </div>
  );
}
