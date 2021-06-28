import React from "react";
import "./productDetailPage.css";
import { useParams } from "react-router-dom";
import { ProductsData } from "../../product-data";

export default function ProductDetailPage() {
  let { id } = useParams();
  let index = 0;
  for (let i = 0; i < ProductsData.length; i++) {
    if (ProductsData[i].id === id) {
      index = i;
      break;
    }
  }
  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="top">
          <h1>Product Detail</h1>
        </div>
        <div className="content">
          <div className="left">
            <div className="img-container">
              <img src={ProductsData[index].image} alt="" />
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
              Name: <span>{ProductsData[index].name}</span>
            </p>

            <p className="title category">
              Category: <span>{ProductsData[index].category}</span>
            </p>

            <p className="title price">
              Price:{" "}
              <span>
                {ProductsData[index].price} <span>VND</span>
              </span>
            </p>

            <p className="title amount">
              Amount: <span>{ProductsData[index].amount}</span>
            </p>

            <p className="title description">Description:</p>
            <p>{ProductsData[index].des}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
