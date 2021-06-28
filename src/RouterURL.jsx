import React from "react";
import { BrowserRouter , Route, Switch } from "react-router-dom";
import ProductDetailPage from "./pages/productDetailPage/ProductDetailPage";
import ProductsPage from "./pages/productsPage/ProductsPage";
import { ProductsData } from "./product-data";
import AddProductPage from "./pages/addProductPage/AddProductPage.jsx";
import StaffsPage from "./pages/staffsPage/StaffsPage.jsx";
import StaffDetailPage from "./pages/staffDetailPage/StaffDetailPage.jsx";
import { StaffData } from "./staff-data";
import SignIn from "./components/auth/SignIn";
import Dashboard from "./components/Dashboard";

export default function RouterURL() {
  return (
    <div className="router-url">
      <Switch>
        <div>
          <Route exact path="/" component={Dashboard}/>
          <Route  path="/products" component={ProductsPage} />
          <Route  path="/staffs" component={StaffsPage} />
          <Route  path="/staffs/001">
            <StaffDetailPage key={StaffData[0].id} staff={StaffData[0]} />
          </Route>
          <Route  path="/products/add" component={AddProductPage} />
          <Route  path="/products/001">
            <ProductDetailPage
              key={ProductsData[0].id}
              product={ProductsData[0]}
            />
          </Route>
          <Route  path="/products/002">
            <ProductDetailPage
              key={ProductsData[1].id}
              product={ProductsData[1]}
            />
          </Route>
          <Route exact path="/products/003">
            <ProductDetailPage
              key={ProductsData[2].id}
              product={ProductsData[2]}
            />
          </Route>
          <Route exact path="/products/004">
            <ProductDetailPage
              key={ProductsData[3].id}
              product={ProductsData[3]}
            />
          </Route>
          <Route exact path="/products/005">
            <ProductDetailPage
              key={ProductsData[4].id}
              product={ProductsData[4]}
            />
          </Route>
        </div>
      </Switch>
    </div>
  );
}
