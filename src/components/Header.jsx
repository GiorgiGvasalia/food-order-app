import { useContext } from "react";
import siteLogo from "../assets/logo.jpg";
import Button from "./Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext)

  function handleCartShow(){
    userProgressCtx.showCart()
  }

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
        <Button textOnly onClick={handleCartShow}>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
};

export default Header;
