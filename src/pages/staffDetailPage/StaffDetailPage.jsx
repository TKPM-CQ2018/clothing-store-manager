import React, { useEffect, useState } from "react";
import "./staffDetailPage.css";
import { useParams } from "react-router-dom";
import { StaffData } from "../../staff-data.js";

export default function StaffDetailPage() {

  let { id } = useParams();
  let _index = 0;
  for (let i = 0; i < StaffData.length; i++) {
    if (StaffData[i].id === id) {
      _index = i;
      break;
    }
  }
  return (
    <div className="staffDetailPage">
      <div className="container">
        <div className="top">
          <h1>Staff Detail</h1>
          <a href="staffs/001/edit">Edit</a>
        </div>
        <div className="content">
          <div className="infor">
            <div className="left">
              <img src="/images/avt_hmc.jpg" alt="" />
              <div className="chu">
                <p>
                  Name: <span>{StaffData[_index].name}</span>
                </p>
                <p>
                  Department: <span>{StaffData[_index].department}</span>
                </p>
                <p>
                  Phone: <span>{StaffData[_index].telephone}</span>
                </p>
                <p>
                  Adress: <span>{StaffData[_index].adress}</span>
                </p>
              </div>
            </div>
            <div className="right">
              <p>
                Position: <span>{StaffData[_index].position}</span>
              </p>
              <p>
                DoB: <span>09/05/2000</span>
              </p>
              <p>
                <i className="fa fa-birthday-cake" aria-hidden="true"></i>
              </p>
              <p>
                <i className="fa fa-birthday-cake" aria-hidden="true"></i>
              </p>
            </div>
          </div>
          <div className="salary">
            <p className="salary-information">Salary Information</p>
            <div className="title">
              <p>ID</p>
              <p>Name</p>
              <p>Unit Price</p>
              <p>Amount</p>
              <p>Sum</p>
            </div>

            <div className="row">
              <p>001</p>
              <p>Basic</p>
              <p>10.000.000</p>
              <p>1</p>
              <p>10.000.000</p>
            </div>

            <div className="row">
              <p>002</p>
              <p>Late</p>
              <p>-100.000</p>
              <p>2</p>
              <p>-200.000</p>
            </div>

            <div className="row">
              <p>003</p>
              <p>Permissioned leave</p>
              <p>-300.000</p>
              <p>1</p>
              <p>-300.000</p>
            </div>
          </div>
          <div className="total">
            <p>
              Total: <span>9.500.000</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
