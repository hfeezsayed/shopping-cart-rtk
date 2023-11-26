import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import StatusCode from "../utils/StatusCode";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    //dispatch an action for fetch the products
    dispatch(getProducts());
  }, []);

  const addToCart = (product) => {
    //dispatch an add action
    dispatch(add(product));
  };

  if (status === StatusCode.LOADING) {
    return <h3 className="text-center mt-3">Loading...</h3>;
  }

  if (status === StatusCode.ERROR) {
    return (
      <h3 className="text-center mt-3 text-danger">
        Something went wrong! Try again later.
      </h3>
    );
  }

  const cards = products.map((product) => (
    <div key={product.id} className="col-md-3 text-center mb-3">
      <Card className="h-100">
        <div className="text-center p-3">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer className="bg-white">
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add To Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <div>
        <h2 className="text-center m-4">Products Dashboard</h2>
        <div className="container">
          <div className="row">{cards}</div>
        </div>
      </div>
    </>
  );
};

export default Products;
