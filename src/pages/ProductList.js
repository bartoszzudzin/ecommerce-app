import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Product from '../components/Product';

const ProductList = () => {
  const [productsList, setProductsList] = useState([]);
  const [deleteList, setDeleteList] = useState([]);

  const adress = window.location.hostname;

  const getProducts = () =>{
    const request = new Request(`/server/api/`, {
      method: "GET",
      headers: new Headers({ "Content-Type": "application/json" }),
    })

    fetch(request)
      .then(res => res.json())
      .then((data) => {
        const arr = [];
        for (let key in data) {
          arr.push({
            sku: data[key].sku,
            name: data[key].name,
            price: data[key].price,
            weight: data[key].weight,
            size: data[key].size,
            length: data[key].length,
            width: data[key].width,
            height: data[key].height,
            productType: data[key].productType,
          });
        }
        setProductsList(arr);
      });
  }

  useEffect(()=>{
    getProducts();
  },[])

  const deleteHandle = (product) =>{
    setDeleteList((prevDeleteList) => {
      if (!prevDeleteList.includes(product.sku)) {
        return [...prevDeleteList, product.sku];
      } else {
        return prevDeleteList.filter((sku) => sku !== product.sku);
      }
    });
  }

  const deleteProducts = () =>{

    const dataToSend = deleteList;

    const request = new Request(`/server/api/`, {
      method: "DELETE",
      body: JSON.stringify(dataToSend),
      headers: new Headers({ "Content-Type": "application/json" }),
    })
    
    fetch(request)
      .catch(err => console.log(err));
    
    window.location.reload();
  }

  const allProducts = productsList.map((product) => (
    <Product
      key={product.sku}
      sku={product.sku}
      name={product.name}
      price={product.price}
      productType={product.productType}
      size={product.size}
      height={product.height}
      width={product.width}
      length={product.length}
      weight={product.weight}
      function={() => deleteHandle(product)}
    />
  ));


  const inf = () =>{
    //
  }
  return (
    <div className='mainPage'>
      <Header 
        title={"Product List"}
        button1={{
          name: "ADD",
          path: "/add-product",
          onClick: inf,
        }}
        button2={{
          name: "MASS DELETE",
          onClick: deleteProducts,
          path: "/",
          id: "delete-product-btn"
        }}
      />
      <div className='productSection'>
        <ul className="products">
          {allProducts}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default ProductList;
