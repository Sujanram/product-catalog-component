import React from "react";

const Summary =(props)=>{
    console.log("hey there")
    console.log(props.item)
    return(
    <div>

    <div class="alert alert-success" role="alert" style={{text_align: "center"}}>
    <h1>Summary</h1>
    </div>

    {/* <ul>
        {props.item.map(ite => (
          <li>{props.ite.title}
        </li>)
        )}

    </ul>  */}
    </div>)
};

export default Summary; 