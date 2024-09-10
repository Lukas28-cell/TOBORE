import React, { useEffect, useState } from 'react'
import { json, useSearchParams, Link } from 'react-router-dom'
import PageHeader from '../Component/PageHeader';
import deltimgurl from '../assets/images/shop/del.png'
import CheckOutPage from './CheckOutPage';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // fatch cart items from localStorage
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, [])
  // calculate price
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  }

  // increse quantity
  const increseQuantity = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);

    // update localStorage with new cart items
    localStorage.setItem("cart", JSON.stringify(cartItems));

  }
  // decrese quantity
  const decreseQuantity = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);
      // update localStorage with new cart items
      localStorage.setItem("cart", JSON.stringify(cartItems));

    }
  }
  // handle removeitems
  const handleRemoveItems = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);

    // update new cart
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  }
  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", json.stringify(cart));
  }
  const cartSubtotal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item);

  }, 0)

  // order total
  const orderTotal = cartSubtotal;
  return (
    <div>
      <PageHeader title={"shop Cart"} curPage={"Cart Page"} />

      <div className='shop-cart padding-tb'>
        <div className='container'>
          <div className="section-wrapper">

            {/* cart top  */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>

                    <th className="cart-product">Product</th>
                    <th className="cart-price">Price</th>
                    <th className="cart-quantity">Quantity</th>
                    <th className="cart-toprice">Toal</th>
                    <th className="cart-edit">Edit</th>

                  </tr>
                </thead>
                {/* table body  */}
                <tbody>
                  {
                    cartItems.map((item, i) => (
                      <tr key={i}>
                        <td className='product-item cat-product'>
                          <div className='p-thumb'>
                            <Link to="/shop"><img src={item.img} alt="img" /></Link>
                          </div>
                          <div className="p-content">
                            <Link to="/shop">{item.name}</Link>
                          </div>
                        </td>
                        <td className='cat-price'>${item.price}</td>
                        <td className='cat-quantity'>
                          <div className="cart-plus-minus">
                            <div className='dec qtybutton' onClick={() => decreseQuantity(item)}>-</div>
                            <input type="text" name="qtybutton" className='cart-plus-minus-box' value={item.quantity} />
                            <div className='inc qtybutton' onClick={() => increseQuantity(item)}>+</div>

                          </div>
                        </td>
                        <td className='cart-toprice'>${calculateTotalPrice(item)}</td>
                        <td className='cart-edit'>
                          <a href="#" onClick={() => handleRemoveItems(item)}>
                            <img src={deltimgurl} alt="" />
                          </a>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
            {/* cart top end  */}
            {/* cart button  */}
            <div className='cart-bottom'>
              {/* checkout box */}
              <div className="cart-checkout-box">
                <form className='coupon'>
                  <input className='cart-page-input-text' type="text" name="coupon" id="coupon" placeholder='coupon code..' />
                  <input type="submit" value="Aplly coupon" />
                </form>

                <form className='cart-checkout'>
                  <input type="submit" value="Update Cart" />
                  <div>
                    <CheckOutPage/>
                  </div>
                </form>
              </div>
              {/* checkout box end  */}

              {/* shopping box  */}
              <div className="shiping-box">
                <div className='row'>
                  <div className='col-md-6 col-12'>
                    <div className="calculate-shiping">
                      <h3>calculate shiping</h3>
                      <div className="outline-select">
                        <select>
                          <option value="nig">Nigeria</option>
                          <option value="uk">United kingdom (UK)</option>
                          <option value="us">United state (US)</option>
                          <option value="gm">Germany</option>
                          <option value="TK">Tukish</option>
                          <option value="ind">India</option>
                        </select>
                        <span className='select-icon'>
                          <i className='icofont-rounded-down'></i>
                        </span>
                      </div>

                      <div className='outline-select shiping-select'>
                        <select>
                          <option value="nig">Abuja</option>
                          <option value="uk">London</option>
                          <option value="us">New York</option>
                          <option value="gm">Berlin</option>
                          <option value="TK">Ankara</option>
                          <option value="ind">New Delhi</option>
                        </select>
                        <span className='select-icon'>
                          <i className='icofont-rounded-down'></i>
                        </span>
                      </div>
                        <input type="text" name="postalcode" id="postalcode" placeholder='Postcode/ZIP' 
                        className='cart-page-input-text' />
                        <button type='submit'>Update Adress</button>
                    </div>
                  </div>
                  <div className='col-md-6 col-12'>
                    <div className='cart-overview'>
                      <h3>Cart Total</h3>
                      <ul className='lab-ul'>
                        <li>
                          <span className='pull-left'>Cart Subtotal</span>
                          <p className='pull-right'>${cartSubtotal}</p>
                        </li>
                        <li>
                          <span className='pull-left'>Shipping & Handling</span>
                          <p className='pull-right'>Free Shipping</p>
                        </li>
                        <li>
                          <span className='pull-left'>Order Total</span>
                          <p className='pull-right'>${orderTotal.toFixed(2)}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
