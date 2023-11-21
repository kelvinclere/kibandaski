import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import LogInPage from "./components/layout/LogInPage";
import Footer from "./components/layout/Footer";
import SignUpPage from "./components/layout/SignUpPage";
import Otpinput from "./components/layout/Otpinput";
import StartPage from "./components/layout/StartPage"; // Import the StartPage component

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
          <Route path="/startpage" component={StartPage} />
            <Route path="/meals" exact component={Meals} />
            <Route path="/login" component={LogInPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/otpinput" component={Otpinput} />
            
            
          </Switch>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;







