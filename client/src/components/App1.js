import React from 'react';

const App1 =(props) =>{
    return (<div>
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
    </div>)
}

export default App1;