import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import productData from "../../src/products.json"
import { FaIcons, FaSearch } from 'react-icons/fa';
import SelectedCategory from '../Component/SelectedCategory';





const title = (
    <h2>Search Your One From <span>Thousand</span> of Product</h2>
)
const desc = "we have the largest collection of product"
const bannerList = [
    {
        iconName: "icofont-user-alt-4",
        text: "1.5 Million Customers",
    },
    {
        iconName: "icofont-notification",
        text: "more than 2000 Marchant",
    },
    {
        iconName: "icofont-globe",
        text: "Buy Anything Online",
    },
];
const Banners = () => {
    const [searchInput, setSearchInput] = useState("");
    const [filteredProducts, setFilteredProduct] = useState("productData");
    // console.log(productData)

    // search functionality
    const handleSearch = e => {
        // console.log(e.target.value)
        const searchTerm = e.target.value;
        setSearchInput(searchTerm)

        // fitlering porduct base on search
        const filtered = productData.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredProduct(filtered);
    }
    return (
        <div className='banner-section style-4'>
            <div className='container'>
                <div className='banner-content'>
                    {title}
                    <span className=' text-red-600 font-bold'><marquee behavior="" direction="right">Welcome to Luke Inaede online shopping</marquee></span>
                    <form>
                        <SelectedCategory select={"alt"}/>

                        <input type="text" name="search" id="search" placeholder='search your product' value={searchInput}
                            onChange={handleSearch} />
                        <button type='submit'><FaSearch /></button>
                    </form>
                    <p>{desc}</p>
                    <ul className='lab-ul'>
                        {
                            searchInput && filteredProducts.map((product, i) => <li key={i}>
                                <Link to={`/shop/${product.id}`}>{product.name}</Link>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Banners
