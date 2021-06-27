import React from "react";
import "./addProductPage.css";

export default function AddProductPage() {
  return (
    <div className="addProductPage">
      <div className="container">
        <div className="top">
          <h1>Add New Product</h1>
        </div>
        <div className="content">
          <div className="photo">
            <i className="fa fa-camera" aria-hidden="true"></i>
            <a href="#upload-photo">Upload Photo</a>
          </div>
          <form action="/products">
            <div className="name">
              <p>Name</p>
              <input type="text" placeholder="Enter product's name"></input>
            </div>

            <div className="purchase-price">
              <div className="purchase">
                <p>Purchase Price</p>
                <input type="text" placeholder="Enter purchase price"></input>
              </div>
              <div className="price">
                <p>Price</p>
                <input type="text" placeholder="Enter price"></input>
              </div>
            </div>

            <div className="date-category">
              <div className="date">
                <p>Date of importness</p>
                <input type="date"></input>
              </div>
              <div className="category">
                <p>Category</p>
                <select>
                  <option>Jeans</option>
                  <option>Blouse</option>
                  <option>Jacket</option>
                  <option>Dress</option>
                  <option>Skirt</option>
                </select>
              </div>
            </div>

            <div className="vat">
              <p>VAT</p>
              <input type="text" placeholder="Enter VAT"></input>
            </div>

            <div className="add-cancel">
              <div className="add">
                <button type="submit">
                  <i className="fa fa-floppy-o" aria-hidden="true"></i>
                  <p>Add</p>
                </button>
              </div>
              <div className="cancel">
                <button type="submit">
                  <i className="fa fa-ban" aria-hidden="true"></i>
                  <p>Cancel</p>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
