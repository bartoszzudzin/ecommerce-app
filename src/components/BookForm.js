import React from "react";

const BookForm = (props) => {
  return (
    <fieldset id="Book">
      <div>
        <label htmlFor="weight" className="form-label">
          Weight (KG)
        </label>
        <input
          type="number"
          className="form-control"
          id="weight"
          onChange={props.weightHandler}
        />
      </div>
      <p>Please, provide weight</p>
    </fieldset>
  );
};

export default BookForm;
