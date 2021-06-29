import React from "react";
import "./profitPage.css";
import * as ProfitCP from "../../components/profit/profit";

export default function ProfitPage() {

  return (
    <div className="profit">
      <div className="container">
        <div className="top">
          <h1>Profit</h1>
        </div>

        <div className="filter">
          <ul>
            <li className="icon-list">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </li>

            <li className="filter-by">
              <select>
                <option id="filter-by">By Day</option>
                <option>By Week</option>
                <option>By Month</option>
                <option>By Quarter</option>
                <option>By Year</option>
              </select>
            </li>

            <li className="begin-date">
              <ProfitCP.MaterialUIDatePickers label="From" date='04-20-2021'></ProfitCP.MaterialUIDatePickers>
            </li>

            <li className="end-date">
              <ProfitCP.MaterialUIDatePickers label="To" date='05-01-2021'></ProfitCP.MaterialUIDatePickers>
            </li>

            <li className="refresh">
              <i className="fa fa-refresh" aria-hidden="true"></i>
              <p>Refresh</p>
            </li>
          </ul>
        </div>
        <div class='profit-chart'>
          <h2>Profit report</h2>
          <ProfitCP.ProfitChart></ProfitCP.ProfitChart>
        </div>

        <section className="arrow-card row margin-top">
          <div className="col-4 center">
            <div className="card">
              <div className="cardheader">
                <h5 className="card-title">Total Revenue</h5>
                <img src="/images/Group 29.png" alt="sdas" className="card-img-top" />
              </div>
              <div className="card-body">
                <p className="card-text">18,580M<span className="dong">VND</span></p>
              </div>
            </div>
          </div>
          <div className="col-4 center">
            <div className="card col-3">
              <div className="cardheader">
                <h5 className="card-title">Total Profit</h5>
                <img src="/images/Group 27.png" alt="sdas" className="card-img-top" />
              </div>
              <div className="card-body">
                <p className="card-text">7,830M<span className="dong">VND</span></p>
              </div>
            </div>
          </div>
          <div className="col-4 center">
            <div className="card col-3">
              <div className="cardheader">
                <h5 className="card-title">Profit Margin</h5>
                <img src="/images/Group 28.png" alt="sdas" className="card-img-top" />
              </div>
              <div className="card-body">
                <p className="card-text">40.3%</p>
              </div>
            </div>
          </div>

        </section>

        <section className="row margin-top">
          <div className="col-6">
            <div className="margin-right">
              <ProfitCP.TopProducts></ProfitCP.TopProducts>
            </div>
          </div>
          <div className="col-6">
            <div className="margin-left">
              <ProfitCP.TopSalers></ProfitCP.TopSalers>
            </div>
          </div>
        </section>

        <div className="bottom"></div>
      </div>
    </div>
  );
}

