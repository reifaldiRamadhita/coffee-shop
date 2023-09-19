import imgAmericano from "./assets/img/americano.png";
import imgCappuccino from "./assets/img/cappuccino.png";
import imgDopio from "./assets/img/doppio.png";
import imgEspresso from "./assets/img/espresso.png";
import imgFrappe from "./assets/img/frappe.png";
import imgIrishCoffee from "./assets/img/irish coffee.png";
import imgLatteWithCream from "./assets/img/latte with cream.png";
import imgLatte from "./assets/img/latte.png";
import imgMacchiato from "./assets/img/machiato.png";

import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Swal from "sweetalert2";
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  const [idCoffee, setIdCoffee] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [datasCheckout, setDatasCheckout] = useState([]);
  const imgCoffee = [
    imgEspresso,
    imgDopio,
    imgAmericano,
    imgMacchiato,
    imgLatteWithCream,
    imgCappuccino,
    imgLatte,
    imgFrappe,
    imgIrishCoffee,
  ];

  const handleClickCoffee = (id) => {
    setShowCheckout(true);
    setIdCoffee(id);
  };

  const handleCancleCheckout = () => {
    setShowCheckout(!showCheckout);
  };

  const handleCheckoutCoffee = (arr) => {
    let [id, name, price, size, temperature, amount] = arr;
    if (!size) {
      return alert("you have to set the cup size !");
    }
    if (!temperature) {
      return alert("you have to set Hot/Cold Coffee !");
    }
    let newDataCheckout = datasCheckout.slice();
    newDataCheckout = [
      ...datasCheckout,
      { id, name, price, size, temperature, amount },
    ];
    setDatasCheckout(newDataCheckout);
    setShowCheckout(!showCheckout);

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

  const handleUpdateCheckout = (newData) => {
    setDatasCheckout(newData);
  };

  return (
    <div className="relative overflow-y-auto bg-slate-100 dark:bg-darkSlate md:h-[1500px] lg:h-[2200px]">
      {/* home & cart */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onClickCoffee={handleClickCoffee}
                onGetImgCoffee={imgCoffee}
                onCheckoutCoffeeAmount={datasCheckout.length}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                datasCheckout={datasCheckout}
                updateDatasCheckout={handleUpdateCheckout}
                onGetImgCoffee={imgCoffee}
              />
            }
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        {/* navbar */}
        <Navbar />
      </Router>

      {/* checkout */}
      {showCheckout ? (
        <div className="delay-500">
          <Checkout
            onIdCoffee={idCoffee}
            onCheckoutImgCoffee={imgCoffee[idCoffee - 1]}
            onCancleCheckout={handleCancleCheckout}
            onCheckoutCoffee={handleCheckoutCoffee}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
