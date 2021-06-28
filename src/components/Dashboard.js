import React from "react";
const Dashboard = () => {
    return ( 
    <section className="dashboard">
        <div className="title">Dashboard</div>
        <section className="arrow-card">
            <div className="card">
                <div className="cardheader">
                <h5 className="card-title">Total Users</h5>
                <img src="/images/totaluser.png" alt="sdas" className="card-img-top" />
                </div>         
                <div className="card-body">               
                    <p className="card-text">40 687</p>
                </div>
                <div className="tagline">
                    <img src="/images/trending_up.png" alt="up" className="trending" />
                    <div className="percents">8.5 <span>%</span></div>
                    <div className="timefromnow"><span>Up</span> from yesterday</div>
                </div>
            </div>
            <div className="card">
                <div className="cardheader">
                <h5 className="card-title">Total Sales</h5>
                <img src="/images/totalsale.png" alt="sdas" className="card-img-top" />
                </div>         
                <div className="card-body">               
                    <p className="card-text">79 000<span className="dong">VND</span></p>
                </div>
                <div className="tagline">
                    <img src="/images/trending_down.png" alt="up" className="trending" />
                    <div className="percents down">8.5 <span>%</span></div>
                    <div className="timefromnow"><span>Down</span> from yesterday</div>
                </div>
            </div>
            <div className="card">
                <div className="cardheader">
                <h5 className="card-title">Total Orders</h5>
                <img src="/images/totalorder.png" alt="sdas" className="card-img-top" />
                </div>         
                <div className="card-body">               
                    <p className="card-text">10 293</p>
                </div>
                <div className="tagline">
                    <img src="/images/trending_up.png" alt="up" className="trending" />
                    <div className="percents">4.5 <span>%</span></div>
                    <div className="timefromnow"><span>Up</span> from yesterday</div>
                </div>
            </div>
            <div className="card">
                <div className="cardheader">
                <h5 className="card-title">Total Pendings</h5>
                <img src="/images/totalpending.png" alt="sdas" className="card-img-top" />
                </div>         
                <div className="card-body">               
                    <p className="card-text">2040</p>
                </div>
                <div className="tagline">
                    <img src="/images/trending_up.png" alt="up" className="trending" />
                    <div className="percents">5.3 <span>%</span></div>
                    <div className="timefromnow"><span>Up</span> from yesterday</div>
                </div>
            </div>
            

        </section>
        <section className="sale-list card">
            <div className="title">Sales Detail</div>
            <table class="table table-striped table-hover ">
                <thead>
                    <tr className="title-row">
                    <th className="col-4  ">Producr</th>
                    <th className="col-2">Location</th>
                    <th className="col-2">Date-time</th>
                    <th className="col-2">Price <span>(VND)</span></th>
                    <th className="col-1">Amount</th>
                    <th className="col-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="info-row">
                        <th className="col-4 product_atr">
                            <img src="/images/product-avatar.png" alt="up" className="avatar-product" />
                            <span className="product-name">Áo polo name</span>
                        </th>
                        <th className="col-2">1 Võ Văn Ngân</th>
                        <th className="col-2">4.4.2021 - 8:47AM</th>
                        <th className="col-2">20 000</th>
                        <th className="col-1">100</th>
                        <th className="col-2 status delivered"><div>Delivered</div></th>
                    </tr>
                    <tr className="info-row">
                        <th className="col-4 product_atr">
                            <img src="/images/product-avatar.png" alt="up" className="avatar-product" />
                            <span className="product-name">Áo polo name</span>
                        </th>
                        <th className="col-2">1 Võ Văn Ngân</th>
                        <th className="col-2">4.4.2021 - 8:47AM</th>
                        <th className="col-2">20 000</th>
                        <th className="col-1">100</th>
                        <th className="col-2 status soldout"><div>Sold out</div></th>
                    </tr>
                    
                </tbody>
            </table>
        </section>
    </section>
    );
};

export default Dashboard;