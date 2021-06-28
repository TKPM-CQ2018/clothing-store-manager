import React, { useEffect, useState } from "react";
import "./productDetailPage.css";
import { useParams } from "react-router-dom";
//import { ProductsData } from "../../product-data";
import { getList } from "../../product-data";

export default function ProductDetailPage() {
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

  // let { id } = useParams();
  // let index = 0;
  // for (let i = 0; i < list.length; i++) {
  //   if (list[i].id === id) {
  //     index = i;
  //     break;
  //   }
  // }

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="top">
          <h1>Product Detail</h1>
        </div>
        <div className="content">
          <div className="left">
            <div className="img-container">
              {list.map((item) => (
                <img src={item.image} alt="" />
              ))}
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
              Name:
              {list.map((item) => (
                <span>{item.name}</span>
              ))}
            </p>

            <p className="title category">
              Category:
              {list.map((item) => (
                <span>{item.category}</span>
              ))}
            </p>

            <p className="title price">
              Price:{" "}
              {list.map((item) => (
                <span>
                  {item.price} <span>VND</span>
                </span>
              ))}
            </p>

            <p className="title amount">
              Amount:
              {list.map((item) => (
                <span>{item.amount}</span>
              ))}
            </p>

            <p className="title description">Description:</p>
            {list.map((item) => (
              <p>{item.des}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
