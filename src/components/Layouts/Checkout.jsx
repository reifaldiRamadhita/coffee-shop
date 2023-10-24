import FormCheckout from "../Fragments/FormCheckout";
import List from "../Elements/List/List";
import Title from "../Elements/Title/Title";
import Button from "../Elements/Button/Button";
import { useContext, useEffect } from "react";
import { ImageCoffee } from "../../context/imageCoffeeContext";
import { CheckPrice } from "../../context/checkPriceContext";
import { DatasCoffee } from "../../context/datasCoffeeContext";

export default function Checkout({ onIdCoffee, onCancleCheckout }) {
  const { price, setIdCoffee } = useContext(CheckPrice);
  const { datasCoffee } = useContext(DatasCoffee);
  const { imgCoffee } = useContext(ImageCoffee);

  const dataCoffee = datasCoffee.find((coffee) => coffee.id === onIdCoffee);

  useEffect(() => {
    setIdCoffee(dataCoffee);
  }, [setIdCoffee, dataCoffee]);

  return (
    <div className="fixed bottom-0 left-0 z-50 h-screen w-full backdrop-blur-md dark:bg-transparent md:w-1/2 md:overflow-hidden md:bg-slate-100 dark:md:bg-darkSlate lg:left-[10%] lg:w-[40%]">
      {/* button cancel */}
      <Button
        classname="absolute right-5 text-xl top-5 h-10 w-10 rounded-full bg-red-500 font-bold text-white"
        onClick={onCancleCheckout}
      >
        X
      </Button>

      {/* info coffee */}
      <div className="absolute bottom-[115vw] left-1/2 flex w-full -translate-x-1/2 justify-center gap-10 px-10 md:bottom-[60vw] lg:bottom-[55%]">
        <div className="w-full lg:flex lg:flex-col lg:items-end">
          <Title classname="text-3xl font-bold text-darkSlate dark:text-white mb-4">
            {dataCoffee.name}
          </Title>
          <List
            data={dataCoffee.substance}
            classname="border-slate-400 text-end dark:text-white"
            styleList="border-b-2 border-slate-400 font-semibold font-poiret lg:w-36"
          />
          <p className="mt-5 text-2xl font-bold text-orange">
            {price
              ? price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })
              : ""}
          </p>
        </div>
        <img
          src={imgCoffee[onIdCoffee - 1]}
          alt="img-coffee"
          className="h-fit w-28"
        />
      </div>

      <div className="absolute bottom-0 left-0 h-[100vw] w-[100vw] animate-scaleUp rounded-se-full border-r-4 border-t-4 border-dashed border-slate-500 backdrop-blur-lg dark:border-white md:h-[50vw] md:w-[50vw] lg:h-[25vw] lg:w-[25vw]">
        {/* form checkout */}
        <FormCheckout onIdCoffee={onIdCoffee} />
      </div>
    </div>
  );
}
