import React, { useState } from "react";
import Header from "./components/layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import LogInPage from "./components/layout/LogInPage";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
      <Switch>
        <Route path="/login" component={LogInPage} />
        <Route path="/" exact>
          <div>
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />

            <main>
              <Meals />
            </main>

            <Footer />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;




