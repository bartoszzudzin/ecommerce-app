import React, { useEffect, useState } from "react";

const Form = (props) => {
  return (
    <form id="product_form" ref={props.ref_} onSubmit={props.onSubmit} method="POST">
        <div>
          <label htmlFor="sku" className="form-label">
            SKU
          </label>
          <input
            type="text"
            className="form-control"
            id="sku"
            onChange={props.skuHandler}
          />
        </div>
        <div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={props.nameHandler}
          />
        </div>
        <div>
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            onChange={props.priceHandler}
          />
        </div>

        <div>
          <label htmlFor="productType" className="form-label">
            Type Switcher
          </label>
          <select
            className="form-select"
            id="productType"
            onChange={props.productTypeHandler}
          >
            <option value={"Type Switcher"}>Type Switcher</option>
            <option value={"DVD"}>DVD</option>
            <option value={"Furniture"}>Furniture</option>
            <option value={"Book"}>Book</option>
          </select>
        </div>
        {props.form}
        <p className="error">{props.errMsg}</p>
      </form>
  );
};

export default Form;
