import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Cart from "./Pages/cart/cart";
import Shop from "./Pages/shop/shop";
import store from "./Store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
