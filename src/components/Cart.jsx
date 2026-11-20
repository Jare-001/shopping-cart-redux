import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

function Cart() {
  const cartItems = useSelector((state) => state.cartItems);

  if (cartItems.length === 0) {
    return <h2 className="empty">Your cart is empty 🛒</h2>;
  }

  return (
    <div className="cart-page">
      <div className="cart-list">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CartSummary />
    </div>
  );
}

export default Cart;