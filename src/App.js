import "./App.css";
import axios from "axios";
import { useEffect, useReducer } from "react";
import { cartReducer } from "./reducers/cartReducer";
import Products from "./component/Products";
import Cart from "./component/Cart";

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });
  const fetchProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    dispatch({
      type: "ADD_PRODUCTS",
      payload: data,
    });
  };
  console.log(state);
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "80%",
        }}
      >
        <h1>Products</h1>
      </div>
      <div style={{ display: "flex" }}>
        <Products state={state} dispatch={dispatch} />
        <Cart state={state} dispatch={dispatch} />
      </div>
    </>
  );
}

export default App;
