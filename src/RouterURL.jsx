import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetailPage from "./pages/productDetailPage/ProductDetailPage";
import ProductsPage from "./pages/productsPage/ProductsPage";
import { ProductsData } from "./product-data";
import AddProductPage from "./pages/addProductPage/AddProductPage.jsx";
import StaffsPage from "./pages/staffsPage/StaffsPage.jsx";
import StaffDetailPage from "./pages/staffDetailPage/StaffDetailPage.jsx";
//import { StaffData } from "./staff-data";
import AddStaffPage from "./pages/addStaffPage/AddStaffPage";

export default class RouterURL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      StaffData: [
        {
          id: "",
          name: "",
          adress: "",
          position: "",
          telephone: "",
          department: "",
          salary: "",
        },
      ],
    };
    //this.callAPI = this.callAPI.bind(this);
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        this.setState({ StaffData: data });
        //console.log("CAILOZQUEJZ");
      });
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    //console.log("LOZ");
    return (
      <div className="router-url">
        <Router>
          <div>
            <Route exact path="/products" component={ProductsPage} />
            <Route exact path="/staffs" component={StaffsPage} />
            <Route exact path="/staffs/001">
              <StaffDetailPage
                key={this.state.StaffData[0].id}
                staff={this.state.StaffData[0]}
              />
            </Route>
            <Route exact path="/products/add" component={AddProductPage} />
            <Route exact path="/staffs/add" component={AddStaffPage} />
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
}
