import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/actions/cartActions";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="info">
        <h4>{item.name}</h4>
        <p>Unit price: ₦{item.price.toLocaleString()}</p>
        <div className="qty">
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
        </div>
        <p>Subtotal: ₦{(item.price * item.quantity).toLocaleString()}</p>
      </div>
      <button className="remove" onClick={() => dispatch(removeFromCart(item.id))}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;