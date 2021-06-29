import React, { useState } from "react";
import "./profitPage.css";
import * as ProfitCP from "../../components/profit/profit";


export default function TopSalesPage() {

  const [filter, setFilter] = useState('best');
  let type='best';
  let chart;
  chart = (<ProfitCP.TopSalersChart filter={filter}/>);
  const handleChange = (e) =>{
    type=e.target.value;
  }
  const handleRefresh = ()=>{
    setFilter(type);
    chart = (<ProfitCP.TopSalersChart filter={filter}/>);
  };

  return (
    <div className="profit">
      <div className="container">
        <div className="top">
          <h1>Salers Report</h1>
        </div>

        <div className="filter">
          <ul>
            <li className="icon-list">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </li>

            <li className="filter-by">
              <select id="filter-by" defaultValue={filter} onChange={handleChange}>
                <option value='best'>Best Selling</option>
                <option value='worst'>Worst Selling</option>
              </select>
            </li>

            <li className="begin-date">
              <ProfitCP.MaterialUIDatePickers label="From" date='04-20-2021'></ProfitCP.MaterialUIDatePickers>
            </li>

            <li className="end-date">
              <ProfitCP.MaterialUIDatePickers label="To" date='05-01-2021'></ProfitCP.MaterialUIDatePickers>
            </li>

            <li className="refresh" onClick={handleRefresh}>
              <i className="fa fa-refresh" aria-hidden="true"></i>
              <p>Refresh</p>
            </li>
          </ul>
        </div>
        <div class='profit-chart'>
          <h2>Top 5 {filter} salers</h2>
          {chart}
        </div>

        <section className="margin-top">
          <ProfitCP.TopSalersDetail filter={filter}></ProfitCP.TopSalersDetail>
        </section>

        <div className="bottom"></div>
      </div>
    </div>
  );
}

