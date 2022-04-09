import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import Registration from "./component/Registration/Registration";
import Product from "./component/Product/Product";
import Orders from "./component/Orders/Orders";
import About from "./component/About/About";
import RequireAuth from "./component/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<Product></Product>}></Route>
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <Orders></Orders>
            </RequireAuth>
          }
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
