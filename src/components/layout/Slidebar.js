import { Link } from "react-router-dom";
const Slidebar = () => {

    return (
        <section className="sidenav">
            <Link to="/about"> <img src="/images/dashboard.png" alt="dashboard" className="dashboard" />Dashboard</Link>
            <a href="/products"> <img src="/images/product.png" alt="dashboard" className="dashboard" />Products</a>
            <Link to="/accounts"> <img src="/images/account.png" alt="dashboard" className="dashboard" />Accounts</Link>
            <Link to="/promotes"> <img src="/images/promote.png" alt="dashboard" className="dashboard" />Promotes</Link>
            <Link to="/staffs"> <img src="/images/staff.png" alt="dashboard" className="dashboard" />Staffs</Link>
            <Link to="/orderlist"> <img src="/images/orderlist.png" alt="dashboard" className="dashboard" />Order List</Link>
            <br></br>
            <hr></hr>
            <div className="title-field-sidebar">Statistics</div>
            <Link to="/access"> <img src="/images/access.png" alt="dashboard" className="dashboard" />Access</Link>
            <Link to="/revenue"> <img src="/images/revenue.png" alt="dashboard" className="dashboard" />Revenue</Link>
            <Link to="/profit"> <img src="/images/profit.png" alt="dashboard" className="dashboard" />Profit</Link>
            <br></br>
            <hr></hr>
            <div className="title-field-sidebar">System</div>
            <Link to="/settings"> <img src="/images/settings.png" alt="dashboard" className="dashboard" />Setting</Link>
            <Link to="/"> <img src="/images/logout.png" alt="dashboard" className="dashboard" />Log Out</Link>
        </section>
    );

}
export default Slidebar;