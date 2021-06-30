import React, { useEffect, useState } from "react";
import "./staffDetailPage.css";
import { useParams } from "react-router-dom";
import { getList } from "../../staff-data";

export default function StaffDetailPage() {
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

  let { id } = useParams();
  let _index = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
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
                  Name:
                  {list
                    .filter((element, index) => {
                      return index === _index;
                    })
                    .map((item) => (
                      <span>{item.name}</span>
                    ))}
                </p>
                <p>
                  Department:
                  {list
                    .filter((element, index) => {
                      return index === _index;
                    })
                    .map((item) => (
                      <span>{item.department}</span>
                    ))}
                </p>
                <p>
                  Phone:
                  {list
                    .filter((element, index) => {
                      return index === _index;
                    })
                    .map((item) => (
                      <span>{item.telephone}</span>
                    ))}
                </p>
                <p>
                  Adress:
                  {list
                    .filter((element, index) => {
                      return index === _index;
                    })
                    .map((item) => (
                      <span>{item.adress}</span>
                    ))}
                </p>
              </div>
            </div>
            <div className="right">
              {/* <p>
                Position: <span>{StaffData[_index].position}</span>
              </p> */}
              <p>
                DoB: <span>09/05/2000</span>
              </p>
              {/* <p>
                <i className="fa fa-birthday-cake" aria-hidden="true"></i>
              </p>
              <p>
                <i className="fa fa-birthday-cake" aria-hidden="true"></i>
              </p> */}
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
