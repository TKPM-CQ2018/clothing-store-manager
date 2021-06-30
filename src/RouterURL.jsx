import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductDetailPage from "./pages/productDetailPage/ProductDetailPage";
import ProductsPage from "./pages/productsPage/ProductsPage";
import AddProductPage from "./pages/addProductPage/AddProductPage.jsx";
import StaffsPage from "./pages/staffsPage/StaffsPage.jsx";
import StaffDetailPage from "./pages/staffDetailPage/StaffDetailPage.jsx";
import AddStaffPage from "./pages/addStaffPage/AddStaffPage";
import SignIn from "./components/auth/SignIn";
import Dashboard from "./components/Dashboard";
import ProfitPage from "./pages/profit/profitPage";
import TopProductsPage from "./pages/profit/topProductsPage";
import TopSalersPage from "./pages/profit/topSalersPage";

export default function RouterURL() {
  return (
    <div className="router-url">
      <Switch>
        <div>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path="/staffs" component={StaffsPage} />
          <Route exact path="/products/add" component={AddProductPage} />
          <Route exact path="/staffs/add" component={AddStaffPage} />

          <Route exact path="/products/:id">
            <ProductDetailPage />
          </Route>

          <Route exact path="/staffs/:id">
            <StaffDetailPage />
          </Route>

          <Route exact path="/profits" component={ProfitPage} />
          <Route
            exact
            path="/profits/top-products"
            component={TopProductsPage}
          />
          <Route exact path="/profits/top-salers" component={TopSalersPage} />
        </div>
      </Switch>
    </div>
  );
}
