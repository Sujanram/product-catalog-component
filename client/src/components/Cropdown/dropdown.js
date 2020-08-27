import React from "react"

const Dropdown =(props) =>{
    return (<div>
        <div className="container">
        <ul className="navbar-right">
          <li>
            <a href="#" id="cart">
              <i className="fa fa-shopping-cart"></i> Cart{" "}
              <span className="badge">{props.cartNumber}</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="shopping-cart">
          <div className="shopping-cart-header">
            <i className="fa fa-shopping-cart cart-icon"></i>
            <span className="badge">{props.cartNumber}</span>
            <div className="shopping-cart-total">
              <span className="lighter-text">Total:</span>
              <span className="main-color-text">$ {cartTotal}</span>
            </div>
          </div>

          <ul className="shopping-cart-items">
            {props.cartItems.map((item, index) => (
              <li className="clearfix" key={index}>
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  width="70"
                  height="70"
                />
                <span className="item-name">{item.title}</span>
                <span className="item-price">$ {item.price}</span>
                <span className="item-quantity">Quantity: 01</span>
                <hr />
              </li>
            ))}
            </ul>


            {/* <li className="clearfix">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg"
                alt="item1"
              />
              <span className="item-name">KS Automatic Mechanic...</span>
              <span className="item-price">$1,249.99</span>
              <span className="item-quantity">Quantity: 01</span>
            </li>
            <li className="clearfix">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg"
                alt="item1"
              />
              <span className="item-name">Kindle, 6" Glare-Free To...</span>
              <span className="item-price">$129.99</span>
              <span className="item-quantity">Quantity: 01</span>
            </li> */}

          <a className="button">Checkout</a>
        </div>
      </div>
    </div>

    )
}

export default Dropdown