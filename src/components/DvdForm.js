import React from "react";

const DvdForm = (props) => {
  return (
    <fieldset id="DVD">
      <div>
        <label htmlFor="size" className="form-label">
          Size (MB)
        </label>
        <input
          type="number"
          className="form-control"
          id="size"
          onChange={props.sizeHandler}
        />
        <br />
      </div>
      <p>Please, provide size</p>
    </fieldset>
  );
};

export default DvdForm;
