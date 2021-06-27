import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NavbarCustom from './components/layout/Navbar';
import Slidebar from './components/layout/Slidebar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavbarCustom/>
      <Slidebar/>
      <Dashboard/>
    </div>
    </BrowserRouter>
  );
}

export default App;
