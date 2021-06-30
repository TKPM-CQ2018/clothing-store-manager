import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NavbarCustom from './components/layout/Navbar';
import Slidebar from './components/layout/Slidebar';
import ProfitPage from './pages/profit/profitPage';
import RouterURL from './RouterURL'
import StaffsPage from "./pages/staffsPage/StaffsPage";
import ProductsPage from "./pages/productsPage/ProductsPage";
import SignIn from "./components/auth/SignIn";
import { connect } from "react-redux";

function App(props) {
  const {logined} = props;
  const link = logined?<RouterURL/>:<SignIn/>;
  return (
    <BrowserRouter>
    <div className="App">
      {link}
    </div>
    </BrowserRouter>
  );
}
const mapStateToProps = (state)=>{
  return{
    logined: state.auth.logined
  }
}

export default connect(mapStateToProps) (App);
