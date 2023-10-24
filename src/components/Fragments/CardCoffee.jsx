import { PiArrowRightBold, PiTrophyFill } from "react-icons/pi";
import Button from "../Elements/Button/Button";
import Title from "../Elements/Title/Title";
import List from "../Elements/List/List";
import { useContext } from "react";
import { ImageCoffee } from "../../context/imageCoffeeContext";
import { DatasCoffee } from "../../context/datasCoffeeContext";

export default function CardCoffee({ onClickCoffee }) {
  const { imgCoffee } = useContext(ImageCoffee);
  const { datasCoffee } = useContext(DatasCoffee);

  return datasCoffee.map((coffee, i) => {
    return (
      <div
        key={i}
        className="group relative mt-20 flex w-40 scale-90 cursor-pointer flex-col rounded-3xl rounded-br-[60px] bg-slate-600 px-4 py-3 pt-14 shadow-xl dark:bg-slate-600 dark:hover:bg-slate-700 lg:mt-0 lg:flex lg:h-52 lg:w-full lg:scale-75 lg:flex-row lg:rounded-br-[90px] lg:px-10 lg:py-5"
        onClick={() => onClickCoffee(coffee.id)}
      >
        <img
          src={imgCoffee[i]}
          alt="img-espresso"
          className="absolute bottom-2/3 left-1/2 w-16 -translate-x-1/2 object-contain pb-2 transition duration-300 group-hover:scale-110 lg:static lg:ml-14 lg:w-20"
        />
        <div className="lg:flex lg:w-full lg:flex-col">
          <Title classname="mb-2 lg:mb-5 text-2xl text-white lg:text-4xl">
            {coffee.name}
          </Title>
          <div className="mb-1 flex lg:mb-2 lg:hidden lg:text-lg">
            <span className="mr-2 text-xl text-orange">
              <PiTrophyFill />
            </span>
            <span className="text-orange">Best Seller</span>
          </div>
          <List
            data={coffee.substance}
            styleList="list-disc"
            classname="hidden text-slate-300 lg:ml-8 lg:block"
          />
        </div>
        <div>
          <p className="truncate text-lg font-semibold text-white lg:text-2xl">
            Rp.{coffee.price.hot / 1000}
            <span className="mx-1">~</span>
            {coffee.price.ice
              ? coffee.price.ice / 1000 + 10
              : coffee.price.hot / 1000 + 5}{" "}
            K
          </p>
          <Button classname="absolute -right-5 bottom-4 z-10 h-12 w-12 rounded-full bg-black text-white group-hover:scale-125 lg:h-16 lg:w-16 lg:group-hover:scale-110">
            <PiArrowRightBold />
          </Button>
        </div>
      </div>
    );
  });
}
