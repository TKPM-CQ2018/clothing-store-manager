import React from "react";
import "./productDetailPage.css";

export default function ProductDetailPage({ product }) {
  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="top">
          <h1>Product Detail</h1>
        </div>
        <div className="content">
          <div className="left">
            <div className="img-container">
              <img src={product.image} alt="" />
            </div>

            <div className="two-button">
              <div className="edit-btn">
                <p>Edit</p>
                <i className="fa fa-pencil" aria-hidden="true"></i>
              </div>
              <div className="delete-btn">
                <p>Delete</p>
                <i className="fa fa-trash-o" aria-hidden="true"></i>
              </div>
            </div>
          </div>

          <div className="right">
            <p className="title name">
              Name: <span>{product.name}</span>
            </p>

            <p className="title category">
              Category: <span>{product.category}</span>
            </p>

            <p className="title price">
              Price:{" "}
              <span>
                {product.price} <span>VND</span>
              </span>
            </p>

            <p className="title amount">
              Amount: <span>{product.amount}</span>
            </p>

            <p className="title description">Description:</p>
            <p>{product.des}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
