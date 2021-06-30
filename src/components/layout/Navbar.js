import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "../../actions/authAction";
import { connect } from "react-redux";
const NavbarCustom = (props) => {
    return ( 
    <section className="header">
        <div className="my-container">
            <div className="logo">
                <span><span className="chat">CHất</span> Lừ</span>
            </div>
            
            
            <div className="profile">
                <div className="image">
               <img src="/images/profile.png" alt="" />
                </div>
               <div className="info">
                   <div className="name">Greentea
                    <span className="dropdown">
                       
                            <i class="fas fa-chevron-circle-down"></i>
                            <div id="myDropdown" class="dropdown-content">
                                <Link to="/">Profile</Link>
                                <a onClick={props.signOut} className='logout'>Log out</a>
                            </div>
                        </span>
                    </div>
                   <div className="role">Admin</div>
               </div>
            </div>
            <div className="notification">
                <img src="/images/notification 1.png" alt="notif" />
            </div>
            <div className="input-group mb-3">
                <div className="input-group-append">
                    <span className="input-group-text search">
                        <i className="fas fa-search"></i>
                    </span>
                </div>
                <input type="text" className="form-control" placeholder="Search" />
            </div>
        </div>

    </section>
        
    );
}
const mapDispatchToProps=(dispatch)=>{
    return{
        signOut: ()=>dispatch(signOut()),
    }
}
export default connect(null,mapDispatchToProps)(NavbarCustom);