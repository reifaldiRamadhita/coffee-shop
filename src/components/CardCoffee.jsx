import { PiArrowRightBold, PiTrophyFill } from "react-icons/pi";

export default function CardCoffee({ coffees, imgCoffee, onClickCoffee }) {
  return coffees.map((coffee, i) => {
    return (
      <div
        key={i}
        className="group relative mt-20 w-40 scale-90 rounded-3xl rounded-br-[60px] bg-darkSlate px-4 py-3 pt-14 shadow-xl dark:bg-slate-600 dark:hover:bg-slate-700 lg:mt-0 lg:flex lg:h-52 lg:w-full lg:scale-75 lg:rounded-br-[90px] lg:pt-0"
        onClick={() => onClickCoffee(coffee.id)}
      >
        <img
          src={imgCoffee[i]}
          alt="img-espresso"
          className="absolute bottom-2/3 left-1/2 w-16 -translate-x-1/2 object-contain pb-2 transition duration-300 group-hover:scale-110 lg:static lg:ml-14 lg:w-20"
        />
        <div className="lg:flex lg:w-full lg:flex-col">
          <div className="lg:flex lg:h-32 lg:items-center lg:justify-between">
            <p className="mb-2 font-poiret text-2xl font-bold text-white lg:mt-3 lg:text-4xl">
              {coffee.name}
            </p>
            <div className="mb-1 flex lg:mb-2 lg:hidden lg:text-lg">
              <span className="mr-2 text-xl text-orange">
                <PiTrophyFill />
              </span>
              <span className="text-orange">Best Seller</span>
            </div>
            <p className="text-lg font-semibold text-white lg:pe-5 lg:text-2xl">
              Rp.{coffee.price.hot / 1000}
              <span className="mx-1">~</span>
              {coffee.price.ice
                ? coffee.price.ice / 1000 + 10
                : coffee.price.hot / 1000 + 5}{" "}
              K
            </p>
          </div>
          <ol className="hidden text-slate-300 lg:ml-8 lg:block lg:h-full lg:text-lg">
            {coffee.substance.map((el, i) => {
              return (
                <li className="list-disc" key={i}>
                  {el}
                </li>
              );
            })}
          </ol>
        </div>
        <button className="absolute -right-5 bottom-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black text-3xl text-white transition delay-200 duration-300 group-hover:scale-125 lg:h-16 lg:w-16 lg:group-hover:scale-110">
          <PiArrowRightBold />
        </button>
      </div>
    );
  });
}
