import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetailPage from "./pages/productDetailPage/ProductDetailPage";
import ProductsPage from "./pages/productsPage/ProductsPage";
import { ProductsData } from "./product-data";

export default function RouterURL() {
  return (
    <div className="router-url">
      <Router>
        <div>
          <Route exact path="/products" component={ProductsPage} />

          <Route exact path="/products/001">
            <ProductDetailPage
              key={ProductsData[0].id}
              product={ProductsData[0]}
            />
          </Route>

          <Route exact path="/products/002">
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
      </Router>
    </div>
  );
}
