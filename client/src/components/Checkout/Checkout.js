import React from "react";
import Check from "../Check/Check"
import Summary from "../summary/summary"
 
const Checkout = (props)=>{
   //  console.log(props);
   //  console.log(props[0]);

    return(<div>
            <div class="alert alert-success" role="alert" style={{text_align: "center"}}>
               <h2>Checkout</h2>
            </div>

         <ul>
        {props.items.map(item => (
          <Check item = {item} 
          onincritem1={()=>props.onincritem()} 
          ondecritem1={()=>props.ondecritem()} 
          value1={props.value}
         />

       
          )
        )}

        <Summary item={props.item} />


      </ul>

      
      </div>
      )
//      
}
export default Checkout;