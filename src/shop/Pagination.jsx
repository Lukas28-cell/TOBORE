import React from 'react'

const Pagination = ({productsPerPage, totaLproducts, paginate,  activePage}) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totaLproducts / productsPerPage); i++){
        pageNumbers.push(i)
    }
  return (
    <ul className='default-pagination lab-ul'>
      <li>
        <a href="#" onClick={()=>{
          if(activePage < pageNumbers.length){
            paginate(activePage - 1)
          }
        }}> <i className='icofont-rounded-left'></i></a>
      </li>
      {
        pageNumbers.map((Number) =>(
            <li key={Number} className={`page-item ${Number ===activePage ? "bg-warning" : ""}`}>
                <button onClick={()=> paginate(Number)} className='bg-transparent'>{Number}</button>
            </li>
        ))
      }
          <li>
        <a href="#" onClick={()=>{
          if(activePage < pageNumbers.length){
            paginate(activePage + 1)
          }
        }}>
           <i className='icofont-rounded-right'></i></a>
      </li>
    </ul>
  )
}

export default Pagination
