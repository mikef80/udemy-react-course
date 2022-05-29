import { Fragment } from "react";
import Cart from "./components/cart/Cart";

import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";

const App = () => {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default App;
