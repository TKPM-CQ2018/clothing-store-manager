import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarCustom from './components/layout/Navbar';
import Slidebar from './components/layout/Slidebar';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavbarCustom/>
      <Slidebar/>
    </div>
    </BrowserRouter>
  );
}

export default App;
