import { useDispatch, useSelector } from "react-redux";

import {clearCart} from '../utils/createSlice';

import ItemList from "./ItemList";

const Cart = () => {
  // subscribe to the store to get the cart items
  const cartItems = useSelector((store)=>store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () =>{
    dispatch(clearCart());
  }

  return (
    <div className="flex justify-center flex-col">
      <h2 className="text-center m-4 p-4 font-bold">Cart</h2>
      {cartItems.length !== 0 && (
        <button 
            className="bg-black p-2 text-white w-1/12 mx-auto mb-4"
            onClick={handleClearCart}
        >
          Clear cart
        </button>
      )}

      {cartItems.length === 0 && (
        <p className="text-center">
          No items in the cart!. Please add the items to the cart
        </p>
      )}

      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
