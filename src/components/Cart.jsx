import { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatter";
import Button from "./Button";
import UserProgressContext from "../store/UserProgressContext";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );


  const userProgressCtx = useContext(UserProgressContext)

  function handleHideCart(){
    userProgressCtx.hideCart()
  }

//   function handleCheckout(){
//     userProgressCtx.showCheckout()
//   }

  return (
    <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => {
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>;
        })}
      </ul>
      <p className="cart-total">Total: {currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleHideCart}>Close</Button>
        <Button >Go to Checkout</Button>
      </p>
    </Modal>
  );
};

export default Cart;
