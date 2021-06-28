import { Link } from "react-router-dom";
const Slidebar = () => {

    return (
        <section className="sidenav">
            <Link to="/"> <img src="/images/dashboard.png" alt="dashboard" className="dashboard" />Dashboard</Link>
            <a href="/products"> <img src="/images/product.png" alt="dashboard" className="products-sidebar" />Products</a>
            <Link to="/accounts"> <img src="/images/account.png" alt="dashboard" className="accounts" />Accounts</Link>
            <Link to="/staffs"> <img src="/images/staff.png" alt="Staff" className="staff-sidebar" />Staffs</Link>
            <Link to="/promotes"> <img src="/images/promote.png" alt="dashboard" className="promotes" />Promotes</Link>
            <Link to="/orderlist"> <img src="/images/orderlist.png" alt="dashboard" className="orderlist" />Order List</Link>
            <br></br>
            <hr></hr>
            <div className="title-field-sidebar">Statistics</div>
            <Link to="/access"> <img src="/images/access.png" alt="dashboard" className="access" />Access</Link>
            <Link to="/revenue"> <img src="/images/revenue.png" alt="dashboard" className="revenue" />Revenue</Link>
            <Link to="/profit"> <img src="/images/profit.png" alt="dashboard" className="profit" />Profit</Link>
            <br></br>
            <hr></hr>
            <div className="title-field-sidebar">System</div>
            <Link to="/settings"> <img src="/images/settings.png" alt="dashboard" className="setting" />Setting</Link>
            <Link to="/"> <img src="/images/logout.png" alt="dashboard" className="dashboard" />Log Out</Link>
        </section>
    );

}
export default Slidebar;