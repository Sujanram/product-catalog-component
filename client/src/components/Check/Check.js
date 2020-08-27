import React,{useState} from "react";

import Summary from "../summary/summary"

const Check = (props) => {

    const [cartItem, setCartItem] = useState(1);

    const increamentitem=()=>{
        setCartItem(cartItem+1)
    }

    const decreamentitem=()=>{
        if(cartItem>=1){
        setCartItem(cartItem-1)
        }
    }
 
console.log(props)
    return (
        <div>

    <div className="container">
                {/* <div className="row"> */}
               <div className="col-12 col-md-6 col-lg-6 breathing-space">
               <div className="card1">
                   <img
                       height="200"
                       width="600"
                       className="card1-img-top"
                       src={props.item.imageSrc}
                       alt={props.item.title}
                   />
                   <div className="card-body">
                       <h4 className="card-title">
                           <a title="View Product">{props.item.title}</a>
                       </h4>
                       <p className="card-text">{props.item.description}</p>
                       <div className="row">
                           <div className="col">
                               <p className="btn btn-danger "> $ {props.item.price} </p>
                           </div>
                           <div className="col">
                          <button className="btn btn-danger " onClick= {()=>decreamentitem()}><span> - </span></button>
                            <span> {cartItem} </span>  
                              <button 
                               onClick= {()=>increamentitem()} 
                               className="btn btn-success">
                                   +
                               </button>
                               
                           </div>
                           <div className="col">

                                <span> {props.item.price * cartItem}</span>
                                  
                               </div>
                       </div>
                   </div>
               </div>
           </div>
           </div>
            </div>
           )
}

export default Check;