import { useContext } from "react";
import siteLogo from "../assets/logo.jpg";
import Button from "./Button";
import CartContext from "../store/CartContext";

const Header = () => {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalQuantityOfMeals, item) => {
    return totalQuantityOfMeals + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <h1 id="title">
        <span>
          <img id="img" src={siteLogo} alt="site logo" />
        </span>
        reactfood
      </h1>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
};

export default Header;
