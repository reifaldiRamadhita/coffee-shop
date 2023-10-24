import { useSelector, useDispatch } from "react-redux";
import Button from "../Elements/Button/Button";
import { useEffect } from "react";
import { removeItemInCart } from "../../redux/cart/cartSlice";
import { MdDelete } from "react-icons/md";

const CardCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <>
      {cart.map((coffee, i) => {
        return (
          <div key={i} className="mb-10 flex rounded-lg font-sans">
            <div className="relative w-32 flex-none rounded-l-lg bg-slate-200/30 md:w-56">
              <img
                src={coffee.img}
                alt={coffee.name}
                className="absolute inset-0 left-1/2 top-1/2 w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-lg object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex-auto rounded-r-lg bg-slate-300 p-6 dark:bg-slate-200">
              <div className="flex flex-wrap">
                <h1 className="flex-auto truncate text-2xl font-semibold text-slate-900">
                  {coffee.name}
                </h1>
                <div className="text-lg font-semibold text-slate-500">
                  {coffee.price
                    .reduce((acc, cur) => acc + cur, 0)
                    .toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                </div>
                <div className="mb-5 mt-2 w-full flex-none text-sm font-medium text-slate-700">
                  {Array.from(new Set(coffee.temperature)).length > 1
                    ? Array.from(new Set(coffee.temperature)).join(" | ")
                    : Array.from(new Set(coffee.temperature)).join("")}
                </div>
                <table className="table-auto border-separate">
                  <tbody>
                    <tr className="truncate">
                      <td className="w-12">Size</td>
                      <td>
                        <span className="px-2">:</span>{" "}
                        {Array.from(new Set(coffee.size)).length > 1
                          ? Array.from(new Set(coffee.size)).join(" | ")
                          : Array.from(new Set(coffee.size)).join("")}
                      </td>
                    </tr>
                    <tr className="truncate">
                      <td className="w-12">Amount</td>
                      <td>
                        <span className="px-2">:</span>{" "}
                        {coffee.amount.reduce((acc, cur) => acc + cur)}
                      </td>
                    </tr>
                    <tr className="truncate">
                      <td className="w-12">Price</td>
                      <td>
                        <span className="px-2">:</span>
                        {coffee.price
                          .reduce((acc, cur) => acc + cur, 0)
                          .toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Button
                onClick={() => dispatch(removeItemInCart(i))}
                classname="text-base bg-red-500 font-bold mt-5 scale-90 md:scale-100 text-slate-200 px-3 py-2 rounded-lg hover:bg-red-600"
              >
                <MdDelete />
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardCart;
