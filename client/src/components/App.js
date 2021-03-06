// main App.js file

import React, { useState, useEffect } from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import "./App.css";
// import {browserHistory} from "react-router-dom";

import Navbar from "./navbar/Navbar";
import Greeting from "./greeting/Greeting";
import Location from "./location/Location";
import Checkout from "./Checkout/Checkout"
// import Category from "./category/Category"; // copied it to App.js for better state management
import Product from "./product/Product";

const App = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currCate, setCurrCate] = useState("Wyatt Residency");
    const [sortNo, setSortNo] = useState("random");
    const [cartNo, setCartNo] = useState(0);
    const [activeCategory, setActiveCategory] = useState("Wyatt Residency");
    const [activeFilter, setActiveFilter] = useState("random");
    const [checkout,setCheckout] = useState([]);
    // const [cartItem, setCartItem] = useState(1);


    // const [checkprod,setCheckprod]= useState("");

    useEffect(() => {
        const getProduct = async () => {
            const res = await fetch(`http://127.0.0.1:8000/product/${currCate}`);
            const data = await res.json();

            console.log(data);

            setProducts(data.sort(() => Math.random() - 0.5));
            // console.log(`currCate: ${currCate}`);
        };

        getProduct();
    }, [currCate]);

    useEffect(() => {
        const getCategory = async () => {
            const res = await fetch(`http://127.0.0.1:8000/catalog/`);
            const data = await res.json();

            // console.log(data);
            setCategories(data);
        };

        getCategory();
    }, []);

    const sortAscending = () => {
        if (sortNo === "ascending") {
            console.log(`Already sorted ascending.`);
            return;
        }
 
        setProducts(products.sort((a, b) => a.price - b.price));
        // to sort the array of objects w.r.t. the price attribute

        // console.log(products);
    };

    const sortDescending = () => {
        if (sortNo === "descending") {
            console.log(`Already sorted descending.`);
            return;
        }

        setProducts(products.sort((a, b) => b.price - a.price));
        // to sort the array of objects w.r.t. the price attribute

        // console.log(products);
    };

    const sortRandom = () => {
        if (sortNo === "random") {
            console.log(`Already randomized.`);
            return;
        }
        setProducts(products.sort(() => Math.random() - 0.5));

        // console.log(products);
    };

    const incrementCartNumber = () => {
        setCartNo(cartNo + 1);
        // setCheckout(checkout+1)
        // alert(checkout);
    };


    const showproduct = () => {
        // alert("navigation")
        // setCheckout(checkout+1)        

    }
    const showprod = (product) =>{
        // alert(product.title)
        // console.log(product)
        setCheckout(checkout=>checkout.concat(product)) 
        // console.log(checkout);
    }

    // const increamentitem=()=>{
    //     setCartItem(cartItem+1)
    // }

    // const decreamentitem=()=>{
    //     if(cartItem>=1){
    //     setCartItem(cartItem-1)
    //     }
    // }

    return (
        <Router >
        <div>
            <Navbar 
            cartNumber={cartNo}
            onClickproduct={() =>showproduct() }
             cartItems= {checkout}
            />
            
            <Route path="/checkout" exact component={() => <Checkout 
            items={checkout}
            // value={cartItem}
            // onincritem={()=>increamentitem()}
            // ondecritem={()=>decreamentitem()} 
            title={checkout }/>} />

            {/* <Route path="/" exact component={() => <Checkout {...checkout} title={checkout }/>} /> */}

            {/* <Route path="/" exact component={App} /> */}
           {/* <Route path="/checkout" exact render={(props) => <Checkout {...props} title={`Checkout`} />} /> */}
        </div>
            <Greeting />
            <Location />
            <div className="container">
                <div className="row">
                    {/* <Category /> */}
                    <div className="col-12 col-sm-3">
                        <div className="card bg-light mb-3">
                            <div className="card-header bg-primary text-white text-uppercase">
                                <i className="fa fa-list"></i> Categories
                            </div>
                            <ul className="list-group category_block">
                                {categories.map((category, index) => (
                                    <div key={index}>
                                        <li
                                            className={`list-group-item ${
                                                activeCategory === category.title ? "active" : null
                                            }`}
                                            onClick={() => {
                                                // console.log(`${category.title} CLICKED!`);
                                                setCurrCate(category.title);
                                                setActiveCategory(category.title);
                                            }}
                                        >
                                            <a>{category.title}</a>
                                        </li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                        <div className="card bg-light mb-3">
                            <div className="card-header bg-success text-white text-uppercase">Sort by</div>
                            <div className="card-body">
                                <ul className="list-group category_block">
                                    <li
                                        className={`list-group-item ${
                                            activeFilter === "random" ? "active" : null
                                        }`}
                                        onClick={() => {
                                            console.log(`Sort clicked relevance`);
                                            sortRandom();
                                            setSortNo("random");
                                            setActiveFilter("random");
                                            // console.log(`sortNo: ${sortNo}`);
                                            // console.log(`activeFilter: ${activeFilter}`);
                                        }}
                                    >
                                        <a>Relevance</a>
                                    </li>
                                    <li
                                        className={`list-group-item ${
                                            activeFilter === "ascending" ? "active" : null
                                        }`}
                                        onClick={() => {
                                            console.log(`Sort clicked ascending`);
                                            sortAscending();
                                            setSortNo("ascending");
                                            setActiveFilter("ascending");
                                            // console.log(`sortNo: ${sortNo}`);
                                            // console.log(`activeFilter: ${activeFilter}`);
                                        }}
                                    >
                                        <a>Price (ascending)</a>
                                    </li>
                                    <li
                                        className={`list-group-item ${
                                            activeFilter === "descending" ? "active" : null
                                        }`}
                                        onClick={() => {
                                            console.log(`Sort clicked descending`);
                                            sortDescending();
                                            setSortNo("descending");
                                            setActiveFilter("descending");
                                            // console.log(`sortNo: ${sortNo}`);
                                            // console.log(`activeFilter: ${activeFilter}`);
                                        }}
                                    >
                                        <a >Price (descending)</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="row">
                            {products.map((product, index) => (
                                <Product
                                    key={index}
                                    productTitle={product.title}
                                    imageSrc={product.imageSrc}
                                    description={product.content}
                                    pricingText={product.price}
                                    onclickprod={() => showprod(product)}
                                    onClickItem={() => incrementCartNumber()}
                                    
                                />
                            ))}

                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />

           
  
        </Router>

    );
};

export default App;
