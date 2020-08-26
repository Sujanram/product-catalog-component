import React from "react";

const Summary =(props)=>{
    console.log(props.item)
    return(
    <div>

    <div class="alert alert-success" role="alert" style={{text_align: "center"}}>
    <h1>Summary</h1>
    </div>

    <ul>
    <li>
        {props.item}
    </li>

    </ul>
    </div>)
};

export default Summary; 