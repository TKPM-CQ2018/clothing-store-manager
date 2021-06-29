import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NavbarCustom from './components/layout/Navbar';
import Slidebar from './components/layout/Slidebar';
import ProfitPage from './pages/profit/profitPage';
import RouterURL from './RouterURL'
import StaffsPage from "./pages/staffsPage/StaffsPage";
import ProductsPage from "./pages/productsPage/ProductsPage";



function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <NavbarCustom/>
      <Slidebar/>
      <RouterURL/>
    </div>
    </BrowserRouter>
  );
}

export default App;
