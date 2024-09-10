import React, { useState } from 'react'
import PageHeader from '../Component/PageHeader'

const showResults = "Showing 01 - 12 of 139 Results"
import data from "../../src/products.json"
import ProductCard from './ProductCard'
import Pagination from './Pagination'
import Search from './Search'
import ShopCategory from './ShopCategory'
import PopularPost from './PopularPost'
import Tags from './Tags'
const Shop = () => {
  const [GridList, setGridList] = useState(true);
  const [products, setproducts] = useState(data);
  console.log(products)

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOffirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = products.slice(indexOffirstProduct, indexOfLastProduct);


  // function to change the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  };

  // filterproduct base on ShopCategory
  const [selectCategory, setSelectCategory] = useState("All");
  const menuItem =[...new Set(data.map((val) => val.category))];

  const filterItem = (curcat) =>{
    const newItem = data.filter((newval) => {
      return newval.category === curcat;
    })
    setSelectCategory(curcat);
    setproducts(newItem);
  }

  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="Shop"/>
  
      {/* shop page */}
      <div className='shop-page padding-tb'>
        <div className="container">
          <div className="row justify-center">
            <div className='col-lg-8 col-12'>
              <article>
                {/* layout and title here */}
                <div className='shop-title d-flex flex-warp justify-between'>
                  <p>{showResults}</p>
                  <div className={`product-view-mode flex items-center ${GridList ? "gridActive" : "listActive"}`}>
                    <a className='grid' onClick={()=>setGridList(!GridList)}>
                      <i className='icofont-ghost'></i>
                    </a>
                    <a className='list' onClick={()=>setGridList(!GridList)}>
                      <i className='icofont-listine-dots'></i>
                    </a>
                  </div>
                </div>
          
                {/* product cards */}
                <div>
                 <ProductCard GridList={GridList} products={currentProduct}/>
                </div>

                <Pagination 
                
                productsPerPage ={productsPerPage}
                totaLproducts = {products.length}
                paginate={paginate}
                activePage={currentPage}
                />
             
              </article>
            </div>
            <div className='col-lg-4 col-12'>
              <aside>
               <Search products={products} GridList={GridList}/>
               <ShopCategory 
               filterItem={filterItem}
               setItem={setproducts}
               menuItem={menuItem}
               setproducts={setproducts}
               selectCategory={selectCategory}
               />
               <PopularPost/>
               <Tags/>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
