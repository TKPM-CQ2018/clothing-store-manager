import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetailPage from "./pages/productDetailPage/ProductDetailPage";
import ProductsPage from "./pages/productsPage/ProductsPage";
import AddProductPage from "./pages/addProductPage/AddProductPage.jsx";
import StaffsPage from "./pages/staffsPage/StaffsPage.jsx";
import StaffDetailPage from "./pages/staffDetailPage/StaffDetailPage.jsx";
import AddStaffPage from "./pages/addStaffPage/AddStaffPage";

export default function RouterURL() {
  return (
    <div className="router-url">
      <Router>
        <div>
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path="/staffs" component={StaffsPage} />
          <Route exact path="/products/add" component={AddProductPage} />
          <Route exact path="/staffs/add" component={AddStaffPage} />

          <Route exact path="/products/:id">
            <ProductDetailPage />
          </Route>
        </div>
      </Router>
    </div>
  );
}
