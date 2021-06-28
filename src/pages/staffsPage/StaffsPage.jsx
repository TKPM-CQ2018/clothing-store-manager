import React from "react";
import "./staffsPage.css";
import { StaffData } from "../../staff-data";
import Staff from "../../components/staff/Staff";

export default function StaffsPage() {
  return (
    <div className="staffsPage">
      <div className="container">
        <div className="top">
          <h1>Staffs</h1>
          <a href="/staffs/add">Add Staff</a>
        </div>

        <div className="filter">
          <i className="fa fa-bars" aria-hidden="true"></i>
          <p>Filter By</p>
          <select>
            <option value="Department">Department</option>
            <option value="Administrator">Administrator</option>
            <option value="R&D">R&D</option>
            <option value="Financial">Financial</option>
            <option value="Quality">Quality</option>
            <option value="Accounting">Accounting</option>
          </select>
          <select>
            <option value="Position">Position</option>
            <option value="Director">Director</option>
            <option value="CEO">CEO</option>
            <option value="CFO">CFO</option>
            <option value="Manager">Manager</option>
            <option value="Accountant">Accountant</option>
            <option value="Employee">Employee</option>
          </select>

          <div className="reset-filter">
            <i className="fa fa-refresh" aria-hidden="true"></i>
            <p>Reset Filter</p>
          </div>
        </div>

        <div className="title">
          <p>ID</p>
          <p>Name</p>
          <p>Adress</p>
          <p>Position</p>
          <p>Telephone</p>
          <p>Department</p>
          <p>Salary</p>
        </div>

        <div className="table">
            {StaffData.map(staff=> (
                <Staff staff={staff}/>
            ))}
        </div>
      </div>
    </div>
  );
}
