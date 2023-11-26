import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const products = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const removeToCart = (id) => {
    //dispatch remove action
    dispatch(remove(id));
  };

  const cards =
    products.length === 0
      ? navigate("/")
      : products.map((product) => (
          <div key={product.id} className="row mb-4 mt-4">
            <div className="col-md-3">
              <div>
                <img src={product.image} alt={product.name} className="w-50" />
              </div>
            </div>
            <div className="col-md-9">
              <div>
                <h4>{product.title}</h4>
                <strong>INR: {product.price}</strong>
                <p>{product.description}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => removeToCart(product.id)}
                >
                  Remove Item
                </button>
              </div>
            </div>
            <hr className="mt-4" />
          </div>
        ));

  return (
    <>
      <div className="container">{cards}</div>
    </>
  );
};

export default Cart;
