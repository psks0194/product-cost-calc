import React from "react";

const Products = ({ state, dispatch }) => {
  const { products, cart } = state;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "80%",
      }}
    >
      {products.map((prod) => (
        <div
          key={prod.id}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "30%",
            marginTop: 10,
            padding: 10,
            border: "1px solid grey",
            gap: 10,
          }}
        >
          <img
            src={prod.image}
            alt={prod.title}
            style={{ height: 200, objectFit: "cover" }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{prod.title.substring(0, 20)}</span>
            <b>Rs. {prod.price}</b>
          </div>
          {cart.some((p) => p.id === prod.id) ? (
            <button
              style={{
                padding: 5,
                border: 0,
                borderRadius: 5,
                backgroundColor: "red",
                color: "white",
              }}
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod.id,
                });
              }}
            >
              Remove from cart
            </button>
          ) : (
            <button
              style={{
                padding: 5,
                border: 0,
                borderRadius: 5,
                backgroundColor: "green",
                color: "white",
              }}
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: {
                    id: prod.id,
                    title: prod.title,
                    qty: 1,
                    image: prod.image,
                    price: prod.price,
                  },
                })
              }
            >
              Add to cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;
