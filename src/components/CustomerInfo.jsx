import imgCustomer from "../assets/img/user-1.png";
import { Link } from "react-router-dom";
import { PiShoppingCart } from "react-icons/pi";

export default function CustomerInfo({ onCheckoutCoffeeAmount }) {
  return (
    <div className="flex items-center justify-between bg-slate-100 px-5 py-8 transition duration-300 dark:bg-darkSlate md:px-8 lg:mt-0 lg:pb-4">
      <div className="flex items-center lg:scale-90">
        <img
          src={imgCustomer}
          alt="customer"
          className="h-16 w-16 rounded-full border-2 border-slate-500 p-0.5 md:scale-110 lg:scale-90"
        />
        <div className="ms-5 lg:scale-90">
          <p className="text-xl font-bold text-darkSlate dark:text-white md:text-2xl">
            James
          </p>
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-300 md:text-lg">
            Platinum
          </p>
        </div>
      </div>

      <Link to="/cart">
        <div className="relative h-20 w-20 scale-90 rounded-2xl bg-darkSlate pt-6 transition duration-300 hover:scale-95 dark:bg-white md:h-24 md:w-24 lg:scale-[60%] lg:hover:scale-[65%]">
          <div className="absolute -top-1/4 right-1/2 flex h-10 w-10 translate-x-1/2 items-center justify-center rounded-full border-4 border-slate-100 bg-orange text-xl text-white dark:border-darkSlate md:scale-110">
            <PiShoppingCart />
          </div>
          <p className="text-center text-2xl font-bold text-white dark:text-darkSlate md:text-3xl">
            {onCheckoutCoffeeAmount}
          </p>
          <p className="text-center text-xs font-semibold text-slate-300 dark:text-darkSlate md:text-lg">
            Product
          </p>
        </div>
      </Link>
    </div>
  );
}
