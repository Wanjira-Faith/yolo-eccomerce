import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Helmet from '../components/Helmet';
import CartItem from '../components/CartItem';
import Button from '../components/Button';

import productData from '../assets/fake-data/products';
import numberWithCommas from '../utils/numberWithCommas';

const Cart = () => {

  const cartItems = useSelector((state) => state.cartItems.value);

  // Replace getCartItemsInfo with a function that retrieves product details based on cart items
  const [cartProducts, setCartProducts] = useState(productData.getCartItemsInfo(cartItems));

  const [totalProducts, setTotalProducts] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Retrieve product details based on cart items
    setCartProducts(productData.getCartItemsInfo(cartItems));

    setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0));
    setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0));
  }, [cartItems]);

  return (
    <Helmet title="Cart"> {/* Title changed to "Cart" */}
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>
              You have {totalProducts} items in your cart
            </p>
            <div className="cart__info__txt__price">
              <span>Total:</span> <span>{numberWithCommas(Number(totalPrice))}</span>
            </div>
          </div>
          <div className="cart__info__btn">
            <Button size="block">
              Checkout
            </Button>
            <Link to="/catalog">
              <Button size="block">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
        <div className="cart__list">
          {
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index}/>
            ))
          }
        </div>
      </div>
    </Helmet>
  )
}

export default Cart;