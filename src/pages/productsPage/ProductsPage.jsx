import React, { useEffect, useState } from "react";
import "./productsPage.css";
import Product from "../../components/product/Product";
//import { ProductsData } from "../../product-data.js";
import { getList } from "../../product-data";

export default function ProductsPage() {
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getList().then((items) => {
      if (mounted) {
        setList(items);
      }
    });
    return () => (mounted = false);
  }, []);

  const ResetFilter = function () {
    const typeElement = document.getElementById("type");
    const statusElement = document.getElementById("status");

    for (var element of document.querySelectorAll("option")) {
      element.removeAttribute("selected");
    }

    typeElement.setAttribute("selected", "");
    statusElement.setAttribute("selected", "");
  };
  return (
    <div className="products">
      <div className="container">
        <div className="top">
          <h1>Products</h1>
          <a href="/products/add">Add product</a>
        </div>

        <div className="filter">
          <ul>
            <li className="icon-list">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </li>

            <li className="filter-by">Filter By</li>

            <li className="type">
              <select>
                <option id="type">Type</option>
                <option>Jeans</option>
                <option>Blouse</option>
                <option>Jacket</option>
                <option>Dress</option>
                <option>Skirt</option>
              </select>
            </li>

            <li className="status">
              <select>
                <option id="status">Status</option>
                <option>Sắp hết</option>
                <option>Còn</option>
                <option>Hết</option>
              </select>
            </li>

            <li className="reset-filter" onClick={() => ResetFilter()}>
              <i className="fa fa-refresh" aria-hidden="true"></i>
              <p>Reset Filter</p>
            </li>
          </ul>
        </div>

        <div className="title">
          <ul>
            <li>ID</li>
            <li>Name</li>
            <li>Category</li>
            <li>Picture</li>
            <li>Amount</li>
            <li>Status</li>
          </ul>
        </div>

        <div className="table">
          {list.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
