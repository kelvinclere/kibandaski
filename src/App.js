import React, { useState } from "react";
import Header from "./components/layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import LogInPage from "./components/layout/LogInPage";
import Footer from "./components/layout/Footer";
import SignUpPage from "./components/layout/SignUpPage";
import Otpinput from "./components/layout/Otpinput";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Router>
      <div>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />

        <main>
          <Switch>
            <Route path="/login" component={LogInPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/otpinput" component={Otpinput} /> {/* Add this line */}
            <Route path="/" exact component={Meals} />
          </Switch>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;





