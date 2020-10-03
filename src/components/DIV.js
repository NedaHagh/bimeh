import React,{useState,useEffect} from "react";
import classNames from "classnames";
import {Div} from "./StyledComponent";

const DIV =(props)=>{
    const [clicked,setClicked]=useState(false);
    const changeColor =()=>{
        setClicked(!clicked);
        props.onButtonClick();
    }
    return(
        <div onClick={()=>changeColor()} className={classNames("blueClass", { "greenClass": props.Clicked })}>
           <span>{props.name}</span>
        </div>
    )
}
export default DIV;