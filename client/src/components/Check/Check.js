import React from "react";
import Summary from "../summary/summary"

const Check = (props) => {
 
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
                          <button className="btn btn-danger " onClick= {()=>props.ondecritem1()}><span> - </span></button>
                            <span> {props.value1} </span>  
                              <button 
                               onClick= {()=>props.onincritem1()} 
                               className="btn btn-success">
                                   +
                               </button>
                               
                           </div>
                           <div className="col">

                                <span> {props.item.price * props.value1}</span>
                                  
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