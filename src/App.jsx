import { useState, useCallback } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Checkout from "./components/Layouts/Checkout";
import Navbar from "./components/Layouts/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import CartPage from "./pages/Cart";
import CheckPriceContextProvider from "./context/checkPriceContext";

function App() {
  const [idCoffee, setIdCoffee] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false);

  // handle click card coffee
  const handleClickCoffee = useCallback((id) => {
    setShowCheckout(!showCheckout);
    setIdCoffee(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // handle cancle checkout coffee
  const handleCancleCheckout = useCallback(() => {
    setShowCheckout(!showCheckout);
  }, [showCheckout]);

  return (
    <CheckPriceContextProvider>
      <div className="relative overflow-y-auto bg-slate-100 dark:bg-darkSlate">
        {/* home & cart */}
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Home onClickCoffee={handleClickCoffee} />}
            />
            <Route path="/cart" element={<CartPage />} />
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
              onCancleCheckout={handleCancleCheckout}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </CheckPriceContextProvider>
  );
}

export default App;
