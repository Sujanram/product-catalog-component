import React from "react";
import Check from "../Check/Check"
import Summary from "../summary/summary"
 
const Checkout = (props)=>{
   //  console.log(props);
   //  console.log(props[0]);

    return(<div>
            <div class="alert alert-success" role="alert" style={{text_align: "center"}}>
               <h2>Your cart</h2>
            </div>

         <ul>
        {props.items.map(item => (
          <Check item = {item} 
         //  onincritem1={()=>props.onincritem()} 
         //  ondecritem1={()=>props.ondecritem()} 
         //  value1={props.item.value}
         />

       
          )
        )}

        <Summary item={props.items} value2={props.value}/>


      </ul>

      
      </div>
      )
//      
}
export default Checkout;