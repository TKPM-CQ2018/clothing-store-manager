import React from "react";
import "./staff.css";

export default function Staff({ staff }) {
  return (
    <div className="staff">
      <p>{staff.id}</p>
      <a href="/staffs/001">
        <p>{staff.name}</p>
      </a>
      <p>{staff.adress}</p>
      <p>{staff.position}</p>
      <p>{staff.telephone}</p>
      <p>{staff.department}</p>
      <p>{staff.salary}</p>
    </div>
  );
}
