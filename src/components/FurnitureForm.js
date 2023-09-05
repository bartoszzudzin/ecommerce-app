import React from "react";

const FurnitureForm = (props) => {
  return (
    <fieldset id="Furniture">
      <div>
        <label htmlFor="height" className="form-label">
          Height (CM)
        </label>
        <input
          type="number"
          className="form-control"
          id="height"
          onChange={props.heightHandler}
        />
      </div>
      <div>
        <label htmlFor="width" className="form-label">
          Width (CM)
        </label>
        <input
          type="number"
          className="form-control"
          id="width"
          onChange={props.widthHandler}
        />
      </div>
      <div>
        <label htmlFor="length" className="form-label">
          Length (CM)
        </label>
        <input
          type="number"
          className="form-control"
          id="length"
          onChange={props.lengthHandler}
        />
      </div>
      <p>Please, provide dimensions</p>
    </fieldset>
  );
};

export default FurnitureForm;
