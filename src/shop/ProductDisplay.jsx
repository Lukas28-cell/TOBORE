import React, { useState } from 'react'
import { FaDropbox } from 'react-icons/fa';
import { GrUpdate } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const des=
"Enargistia an deliver atactics matrcs after avsionary Apropria transition enterpris an sources applications emerging psd templates"

const ProductDisplay = ({item}) => {
    // console.log(item)
    const {name, id, price, seller, ratingsCount, quantity, img} = item;

    const [prequantity, setQuantity] = useState(quantity);
    const [coupon, setCoupon] = useState("");
    const [size, setSize] = useState("Select Size");
    const [color, setColor] = useState("Select Color");

    const handleChange = (e) =>{
      setSize(e.target.value);
    }
    const handleColorChange = (e) =>{
      setColor(e.target.value)
    }
    const handleDecrease = () =>{
      if (prequantity > 1) {
        setQuantity(prequantity -1) 
      }
    }
    const handleIncrease = () =>{
     
        setQuantity(prequantity +1) 
    }
    const handlesubmit = (e) =>{
      e.preventDefault();
      const product = {
        id:id, 
        img: img,
        name:name,
        price:price,
        quantity:prequantity,
        size:size,
        color:color,
        coupon:coupon
      }

      // console.log(product)
      const existingCard = JSON.parse(localStorage.getItem("cart")) || [];
      const existingProduct = existingCard.findIndex((item) => item.id === id);

      if (existingProduct !== -1) {
        existingCard[existingProduct].quantity==prequantity;
        
      }else{
        existingCard.push(product);
      }

      // Update local storage
      localStorage.setItem("cart", JSON.stringify(existingCard));

      // reset form fields
      setQuantity(1);
      setSize("Select Size");
      setColor("Select Color");
      setCoupon("");
    }
  return (
    <div>
      <div>
        <h2>{name}</h2>
        <p className='text-yellow-500'>
            <i className='icofont-star'></i>
            <i className='icofont-star'></i>
            <i className='icofont-star'></i>
            <i className='icofont-star'></i>
            <i className='icofont-star'></i>
            <span className='text-slate-800'>{ratingsCount} review</span>
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>{des}</p>
      </div>
      {/* card component */}
      <div>
        <form onSubmit={handlesubmit}>
          {/* size */}
          <div className='select-product size'>
            <select value={size} onChange={handleChange}>
              <option>Select Size</option>
              <option value="SH">SH</option>
              <option value="MD">MD</option>
              <option value="LG">LG</option>
              <option value="XXL">XXL</option>
            </select>
              <i className='icofont-rounded-down'></i>
          </div>
          {/* color */}
          <div className='select-product color'>
            <select value={color} onChange={handleColorChange}>
              <option>Select Color</option>
              <option>Blue</option>
              <option>Red</option>
              <option>pink</option>
              <option>white</option>
              <option>Black</option>
              <option>Ash</option>
            </select>
              <i className='icofont-rounded-down'></i>
          </div>
          {/* cart plus minus */}
          <div className='cart-plus-minus'>
              <div className='dec qtybutton' onClick={handleDecrease}>-</div>
              <input className='cart-plus-minus-box' type="text" name="qtybutton" id="qtybutton" value={prequantity} 
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))} />
              <div className='inc qtybutton' onClick={handleIncrease}>+</div>
          </div>
          <div className='discount-code mb-2'>
            <input type="text" placeholder='Enter Discount code' onChange={(e) =>setCoupon(e.target.value)} />
          </div>
          {/* btn section */}
          
            <button type='text' className='lab-btn'>
              <span>Add to Cart</span>
            </button>
            <Link to="/cart-page" className='lab-btn bg-primary'>
              <span>Check Out</span>
            </Link>
          
        </form>
      </div>
    </div>
  )
}

export default ProductDisplay
