import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NavbarCustom from './components/layout/Navbar';
import Slidebar from './components/layout/Slidebar';
import ProfitPage from './pages/profit/profitPage';
import RouterURL from './RouterURL'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavbarCustom/>
      <Slidebar/>
      {/* <ProfitPage/> */}
      <RouterURL/>
    </div>
    </BrowserRouter>
  );
}

export default App;
