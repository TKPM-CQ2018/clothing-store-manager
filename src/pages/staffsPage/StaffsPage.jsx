import React, { useEffect, useState } from "react";
import "./staffsPage.css";
import Staff from "../../components/staff/Staff";
import { getList } from "../../staff-data";
import { connect } from "react-redux";

const StaffsPage = () => {
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

          <div className="reset-filter" onClick={() => ResetFilter()}>
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
          {list.map((staff) => (
            <Staff key={staff.id} staff={staff} />
          ))}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  const staffs = state.staffs;
  return {
    staffs: staffs,
  };
};
export default connect(mapStateToProps)(StaffsPage);
