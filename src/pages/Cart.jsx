import { useSelector } from "react-redux";
import CardCart from "../components/Fragments/CardCart";

export default function CartPage() {
  const cart = useSelector((state) => state.cart.data);

  return (
    <div className="min-h-screen scale-90 px-5 py-10 md:mt-20 md:scale-100 md:px-20 lg:mt-0 lg:w-1/2">
      <h1 className="mb-14 text-2xl font-bold text-darkSlate dark:text-white lg:mt-20">
        Checkout Coffee
      </h1>

      <CardCart />

      <div className="flex justify-between border-t-2 border-slate-500 pt-5">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
          Total Price{" "}
        </h2>
        <p className="text-xl font-semibold text-orange">
          {cart.length > 0
            ? cart
                .map((obj) => obj.price.reduce((acc, cur) => acc + cur))
                .reduce((acc, cur) => acc + cur)
                .toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })
            : 0}
        </p>
      </div>
    </div>
  );
}
