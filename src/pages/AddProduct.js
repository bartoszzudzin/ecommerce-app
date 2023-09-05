import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Form from "../components/Form";
import DvdForm from "../components/DvdForm";
import FurnitureForm from "../components/FurnitureForm";
import BookForm from "../components/BookForm";

const AddProduct = () => {
  const [productType, setProductType] = useState(null);
  const [form, setForm] = useState(null);
  const [err, setErr] = useState(null);
  const formRef = useRef(null);

  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [weight, setWeight] = useState("");

  const redirect = () =>{
    //
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(sku === "" || name === "" || price === "" || productType === null){
      setErr("Please, submit required data");
    }
    else if(productType === "DVD" && size === ""){
      setErr("Please, submit required data");
    }
    else if(productType === "Furniture" && (height === "" || width === "" || length === "")){
        setErr("Please, submit required data");
    }
    else if(productType === "Book" && weight === ""){
      setErr("Please, submit required data");
    }
    else if(price !== "" && typeof price !== 'number' && isNaN(price)){
      setErr("Please, provide the data of indicated type");
    }
    else if(size !== "" && typeof size !== 'number' && isNaN(size)){
      setErr("Please, provide the data of indicated type");
    }
    else if(height !== "" && typeof height !== 'number' && isNaN(height)){
      setErr("Please, provide the data of indicated type");
    }
    else if(width !== "" && typeof width !== 'number' && isNaN(width)){
      setErr("Please, provide the data of indicated type");
    }
    else if(length !== "" && typeof length !== 'number' && isNaN(length)){
      setErr("Please, provide the data of indicated type");
    }
    else if(weight !== "" && typeof weight !== 'number' && isNaN(weight)){
      setErr("Please, provide the data of indicated type");
    }

    else{
      const dataToSend = {
        sku,
        name,
        price,
        size,
        height,
        width,
        length,
        weight,
        productType,
      };
      try {
        const request = new Request(`/server/api/`, {
          method: "POST",
          body: JSON.stringify(dataToSend),
          headers: new Headers({ "Content-Type": "application/json" }),
        })

      fetch(request)
      .then(response => response.json())
      .then(data => {
        if(data.message){
          setErr(data.message)
        }
        else{
          window.location.href = "/";
        }
      })
        .catch(error => console.log(error))
      } catch (error) {
        console.error(error);
      }
    }
  };

  const dvdForm = (
    <DvdForm 
      sizeHandler={(e) => setSize(e.target.value)}
    />
  );

  const furnitureForm = (
    <FurnitureForm
      heightHandler={(e) => setHeight(e.target.value)}
      widthHandler={(e) => setWidth(e.target.value)}
      lengthHandler={(e) => setLength(e.target.value)}
    />
  );

  const bookForm = (
    <BookForm
      weightHandler={(e) => setWeight(e.target.value)}
    />
  );

  useEffect(() => {
    switch (productType) {
      case "DVD":
        setForm(dvdForm);
        break;
      case "Furniture":
        setForm(furnitureForm);
        break;
      case "Book":
        setForm(bookForm);
        break;
      default:
        setForm(null);
        break;
    }
  }, [productType]);

  return (
    <div className="mainPage">
      <Header
        title={"Product Add"}
        button1={{
          name: "Save",
          path: "/",
          onClick: handleSubmit,
        }}
        button2={{
          name: "Cancel",
          onClick: redirect,
          path: "/",
        }}
      />
      <Form 
        ref_={formRef}
        onSubmit={handleSubmit}
        skuHandler={(e) => setSku(e.target.value)}
        nameHandler={(e) => setName(e.target.value)}
        priceHandler={(e) => setPrice(e.target.value)}
        productTypeHandler={(e) => setProductType(e.target.value)}
        form={form}
        errMsg={err}
      />

      <Footer />
    </div>
  );
};

export default AddProduct;
