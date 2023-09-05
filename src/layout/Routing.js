import ProductList from '../pages/ProductList';
import AddProduct from '../pages/AddProduct';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function Routing() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
  );
}

export default Routing;
