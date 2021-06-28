import React from "react";
import "./addStaffPage.css";

export default function AddStaffPage() {
  return (
    <div className="addStaffPage">
      <div className="container">
        <div className="top">
          <h1>Add New Staff</h1>
        </div>
        <div className="content">
          <div className="photo">
            <i className="fa fa-camera" aria-hidden="true"></i>
            <a href="#upload-photo">Upload Photo</a>
          </div>
          <form action="/staffs">
            <div className="name">
              <p>Name</p>
              <input type="text" placeholder="Enter product's name"></input>
            </div>

            <div className="purchase-price">
              <div className="purchase">
                <p>Position</p>
                <input type="text" placeholder="Enter position"></input>
              </div>
              <div className="price">
                <p>Phone number</p>
                <input type="text" placeholder="Enter phone number"></input>
              </div>
            </div>

            <div className="date-category">
              <div className="date">
                <p>Date of birth</p>
                <input type="date"></input>
              </div>
              <div className="category">
                <p>Gender</p>
                <select>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>

            <div className="vat">
              <p>Your address</p>
              <input type="text" placeholder="Enter your address"></input>
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
