import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from './cartSlice';

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const username = useSelector((store) => store.user.username);
  const isCartEmpty = cart.length > 0;
  const dispatch = useDispatch();

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      {isCartEmpty ? (
        <ul className="mt-3 divide-y divide-stone-200 border-b">
          {cart.map((item) => (
            <CartItem item={item} key={item.pizzaID} />
          ))}
        </ul>
      ) : (
        <img
          src="../../../public/media/emptyCart.png"
          alt="Your cart is empty. Start with adding a pizza!"
        />
      )}

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
