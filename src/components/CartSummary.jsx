import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/actions/cartActions";

function CartSummary() {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="summary">
      <h3>Order Summary</h3>
      <p>Total items: {totalQuantity}</p>
      <p>Subtotal: ₦{totalPrice.toLocaleString()}</p>
      <h3>Total: ₦{totalPrice.toLocaleString()}</h3>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
<button onClick={() => alert("Checkout successful!")}>Checkout</button>
    </div>
  );
}

export default CartSummary;