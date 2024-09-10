import React from 'react'
import data from '../../src/products.json'

const ShopCategory = ({filterItem, setItem, menuItem, setproducts, selectCategory}) => {
  return (
<>
    <div className='widget-header'>
      <h5 className='ms-2'>All Categories</h5>
      <div>
        <button onClick={()=> setproducts(data)} className={`m-2 ${selectCategory === "All" ? "bg-warning" : ""} `}>All</button>
        {
          menuItem.map((val, id) =>(
            <button  className={`m-2 ${selectCategory === val ? "bg-warning" : ""}`}
             key={id} onClick={() => filterItem(val)}>
              {val}</button>
          ))
        }
      </div>

    </div>
</>
  )
}

export default ShopCategory
