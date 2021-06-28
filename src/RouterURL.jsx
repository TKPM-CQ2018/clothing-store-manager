import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetailPage from "./pages/productDetailPage/ProductDetailPage";
import ProductsPage from "./pages/productsPage/ProductsPage";
import AddProductPage from "./pages/addProductPage/AddProductPage.jsx";
import StaffsPage from "./pages/staffsPage/StaffsPage.jsx";
import StaffDetailPage from "./pages/staffDetailPage/StaffDetailPage.jsx";
import AddStaffPage from "./pages/addStaffPage/AddStaffPage";

export default class RouterURL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      StaffsData: [],
      ProductsData: [],
    };
  }

  callAPI() {
    fetch("http://localhost:9000/staffDataAPI")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ StaffsData: data });
      });
  }

  callAPI2() {
    fetch("http://localhost:9000/productDataAPI")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ ProductsData: data });
      });
  }

  componentWillMount() {
    this.callAPI();
    this.callAPI2();
  }

  render() {
    if (
      this.state.StaffsData.length <= 1 ||
      this.state.ProductsData.length <= 1
    ) {
      return null;
    } else {
      return (
        <div className="router-url">
          <Router>
            <div>
              <Route exact path="/products" component={ProductsPage} />
              <Route exact path="/staffs" component={StaffsPage} />
              <Route exact path="/staffs/001">
                <StaffDetailPage
                  key={this.state.StaffsData[0].id}
                  staff={this.state.StaffsData[0]}
                />
              </Route>
              <Route exact path="/products/add" component={AddProductPage} />
              <Route exact path="/staffs/add" component={AddStaffPage} />
              <Route exact path="/products/001">
                <ProductDetailPage
                  key={this.state.ProductsData[0].id}
                  product={this.state.ProductsData[0]}
                />
              </Route>
              <Route exact path="/products/002">
                <ProductDetailPage
                  key={this.state.ProductsData[1].id}
                  product={this.state.ProductsData[1]}
                />
              </Route>
              <Route exact path="/products/003">
                <ProductDetailPage
                  key={this.state.ProductsData[2].id}
                  product={this.state.ProductsData[2]}
                />
              </Route>
              <Route exact path="/products/004">
                <ProductDetailPage
                  key={this.state.ProductsData[3].id}
                  product={this.state.ProductsData[3]}
                />
              </Route>
              <Route exact path="/products/005">
                <ProductDetailPage
                  key={this.state.ProductsData[4].id}
                  product={this.state.ProductsData[4]}
                />
              </Route>
            </div>
          </Router>
        </div>
      );
    }
  }
}
