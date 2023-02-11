import React, { useEffect, useState } from "react";
// import { cartReducer } from "../reducers/cartReducer";

const Cart = ({ state, dispatch }) => {
  const { cart } = state;
  const [total, setTotal] = useState(0);

  const onChangeQty = (id, qty) => {
    dispatch({
      type: "CHANGE_QTY",
      payload: {
        id,
        qty,
      },
    });
  };

  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc, curr) => acc + Math.round(Number(curr.price)) * curr.qty,
        0
      )
    );
  }, [cart]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 10,
        padding: 10,
        width: "20%",
        backgroundColor: "#ececec",
      }}
    >
      <b style={{ fontSize: 30, alignSelf: "center" }}>Cart</b>
      <b style={{ alignSelf: "center" }}>Subtotal: Rs. {Math.round(total)}</b>
      {cart.length > 0 ? (
        cart.map((prod) => (
          <div
            key={prod.id}
            style={{
              display: "flex",
              border: "1px solid black",
              padding: 10,
              margin: 5,
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: 10 }}>
              <img
                src={prod.image}
                alt={prod.title}
                style={{ width: 70, objectFit: "cover" }}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <span>{prod.title.substring(0, 20)}</span>
                <b>Rs. {Math.round(prod.price)}</b>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <button onClick={() => onChangeQty(prod.id, prod.qty - 1)}>
                  -
                </button>
                <span>{prod.qty}</span>
                <button onClick={() => onChangeQty(prod.id, prod.qty + 1)}>
                  +
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <span style={{ alignSelf: "center", padding: 20 }}>Cart is empty</span>
      )}
    </div>
  );
};

export default Cart;
