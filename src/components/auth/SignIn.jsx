import React,{ Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../actions/authAction";
export class SignIn extends Component {
  state = {
    username: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.signIn(this.state);
  };
  
  render() {
    const {authError,logined} = this.props;
    if(logined) return <Redirect to="/"/>
      return(
          <section className="login">
            <div  id="background_login">
                <img src="/images/background_login.png" alt="background" />
            </div>
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-6 story-aboard">
                            <div className="shop_name">CHất Lừ</div>
                            <div className="shop_slogan">Expect more from your clothes.</div>
                            <img src="/images/login_story.png" alt="Login story" className="login-story" />
                        </div>
                        <div className="col-6 login">
                            <div className="title-page">Login</div>
                            <form onSubmit={this.handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <input type="username" className="form-control" id="username" onChange={this.handleChange}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password"  onChange={this.handleChange}/>
                                    </div>
                                    <div className="mb-3 button">
                                      <button className="btn-login" type="submit">Login</button>
                                        <div className="login-failed">
                                          {authError ? <p>{authError}</p> : null}
                                        </div>
                                    </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
            
          </section>
        
      );
  }
}
const mapStateToProps=(state)=>{
  return{
    authError: state.auth.authError,
    logined: state.auth.logined
  }
};

const mapDispatchToProps=(dispatch)=>{
  return{
    signIn: (creds)=>dispatch(signIn(creds))
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (SignIn);
