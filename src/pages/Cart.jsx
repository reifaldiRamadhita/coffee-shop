import { useState } from "react";
import { FiChevronsDown } from "react-icons/fi";
import coffees from "../assets/json/coffees.json";
export default function Cart({
  datasCheckout,
  updateDatasCheckout,
  onGetImgCoffee,
}) {
  const [showExtand, setShowExtand] = useState(false);
  const [extandDetails, setExtandDetails] = useState(null);
  const [datasCoffee, setDatasCoffee] = useState(datasCheckout);

  const handleDetailsCheckout = (i) => {
    setShowExtand(!showExtand);
    setExtandDetails(i);
  };

  const handleDeleteCoffee = (index) => {
    const newDatasCoffee = datasCoffee.filter((el, i) => i !== index);
    setDatasCoffee(newDatasCoffee);
    updateDatasCheckout(newDatasCoffee);
  };

  let price = datasCoffee.map((coffee) => {
    if (coffee.size === "medium") {
      return ((coffee.price + 5000) * coffee.amount) / 1000;
    } else if (coffee.size === "large") {
      return ((coffee.price + 10000) * coffee.amount) / 1000;
    } else {
      return (coffee.price * coffee.amount) / 1000;
    }
  });

  const totalPayment = price.length ? price.reduce((acc, cur) => acc + cur) : 0;

  return (
    <div className="min-h-screen px-8 py-10 md:mt-20 md:w-1/2 lg:mt-0 lg:w-1/3 lg:ps-24">
      <h1 className="mb-14 text-2xl font-bold text-darkSlate dark:text-white lg:mt-20">
        Checkout Coffee
      </h1>

      {datasCoffee ? (
        datasCoffee.map((data, index) => {
          return (
            <div
              key={index}
              className="relative mb-10 w-[95%] rounded-lg bg-slate-700 px-5 py-4"
              onClick={() => handleDetailsCheckout(index)}
            >
              {/* simple info checkout */}
              <div className="flex items-center justify-between overflow-hidden">
                <div className="flex">
                  <img
                    src={
                      onGetImgCoffee[
                        coffees.indexOf(
                          coffees.find((el) => el.name === data.name),
                        )
                      ]
                    }
                    alt="img-coffee"
                    className="w-9 rounded-md object-cover"
                  />
                  <div className="ms-5">
                    <p className="mb-1 font-poiret text-xl font-bold text-white">
                      {data.name}
                    </p>
                    <p className="font-semibold text-slate-200">
                      {data.temperature}
                    </p>
                  </div>
                </div>
                <p className="pr-1 text-2xl text-orange">{data.amount}</p>
                <p
                  className="absolute -right-6 -top-6 flex h-12 w-12 items-center justify-center rounded-full border-8 border-slate-100 bg-red-500 text-xl font-bold text-white hover:bg-red-400 dark:border-darkSlate"
                  onClick={() => handleDeleteCoffee(index)}
                >
                  X
                </p>
              </div>

              {/* extend details checkout */}
              {index === extandDetails ? (
                <div
                  style={
                    showExtand ? { display: "block" } : { display: "none" }
                  }
                  className="mb-4 mt-4 h-fit border-t-2 pt-7"
                >
                  <h2 className="mb-2 text-xl font-bold text-white">Details</h2>
                  <p className="mb-2 text-slate-200">
                    Coffee : {data.name}/{data.temperature}
                  </p>
                  <p className="mb-2 text-slate-200">Cup size : {data.size}</p>
                  <p className="mb-3 border-b-2 pb-4 text-slate-200">
                    Amount : <span className="text-orange">{data.amount}</span>{" "}
                    <span className="px-1">X</span>
                    {data.size === "medium"
                      ? (data.price + 5000) / 1000
                      : data.size === "large"
                      ? (data.price + 10000) / 1000
                      : data.price / 1000}
                    <span className="text-orange">K</span>
                  </p>
                  <div className="flex justify-between">
                    <span className="text-2xl text-slate-200">Total</span>
                    <span className="text-2xl font-bold text-orange">
                      {price[index]}K
                    </span>
                  </div>
                </div>
              ) : (
                <></>
              )}

              {/* button details */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-slate-700 p-3 text-2xl text-white">
                <p
                  style={
                    index === extandDetails && showExtand
                      ? { rotate: "180deg" }
                      : { rotate: "0deg" }
                  }
                >
                  <FiChevronsDown />
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <p>Empty Coffee</p>
      )}

      <div className="mt-20 flex items-end justify-between border-t-2 border-slate-400 pt-5">
        <button className="h-fit rounded-lg bg-blue-500 px-5 py-2 text-white">
          Pay
        </button>
        <div className="">
          <p className="mb-3 text-xl font-bold text-darkSlate dark:text-white">
            Total
          </p>
          <p className="text-3xl font-bold text-orange">
            {totalPayment} {totalPayment ? "K" : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
