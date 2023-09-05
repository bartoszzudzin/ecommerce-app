import React from "react";

const Product = (props) =>{
    return(
            <li>
                <input 
                    type="checkbox" 
                    name="checkbox" 
                    className="delete-checkbox"
                    id={props.sku}
                    onClick={props.function}
                />
                <br />
                <br />
                <p>{props.sku}</p>
                <p>{props.name}</p>
                <p>{props.price} $</p>
                {props.productType === "DVD" && (
                    <p>Size: {props.size} MB</p>
                )}
                {props.productType === "Furniture" && (
                    <p>Dimensions: {props.height}x{props.width}x{props.length} CM</p>
                )}
                {props.productType === "Book" && (
                    <p>Weight: {props.weight} KG</p>
                )}
            </li>
    );
}

export default Product;