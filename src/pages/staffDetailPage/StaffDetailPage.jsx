import React from "react";
import "./staffDetailPage.css";
export default function StaffDetailPage({ staff }) {
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
                  Name: <span>{staff.name}</span>
                </p>
                <p>
                  Department: <span>{staff.department}</span>
                </p>
                <p>
                  Phone: <span>{staff.telephone}</span>
                </p>
                <p>
                  Adress: <span>{staff.adress}</span>
                </p>
              </div>
            </div>
            <div className="right">
              <p>
                Position: <span>{staff.position}</span>
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
