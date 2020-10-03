import React from "react";
import classNames from "classnames";
import noPicture from "../assets/images/no-picture.png";

const Brand = (props) => {
    const handleClick = ()=>{
        props.onButtonClick();
    }
    return(
    <div className={classNames("brand", { "selectedBrand": props.Clicked })}
    onClick={()=>handleClick()}>
        <div className="brand_img">
            <img src={`${props.brandIcon}` ? `${props.brandIcon}` : noPicture}
                alt="..."
            />
        </div>
        <div className="brandBody">
            <p className="brandTitle">{props.name}</p>
        </div>
    </div>)
}
export default Brand;