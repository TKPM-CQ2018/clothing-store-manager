import React from "react";
import "./product.css";
import { useEffect } from "react";

export default function Product({ product }) {
  useEffect(() => {
    var statusElements = [...document.querySelectorAll(".product-status span")];
    statusElements.forEach((element) => {
      if (element.innerText === "Còn") {
        element.classList.add("con");
      }

      if (element.innerText === "Hết") {
        element.classList.add("het");
      }

      if (element.innerText === "Sắp hết") {
        element.classList.add("sap-het");
      }
    });
  });
  return (
    <div className="product">
      <div className="id">{product.id}</div>
      <a className="link" href={`/products/${product.id}`}>
        <div className="name">{product.name}</div>
      </a>

      <div className="category">{product.category}</div>
      <div className="picture">
        <img src={product.thumbnail} alt="" />
      </div>
      <div className="amount">{product.amount}</div>
      <div className="product-status">
        <span>{product.status}</span>
      </div>
    </div>
  );
}
