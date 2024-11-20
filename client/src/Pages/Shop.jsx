import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { getProducts } from "../Services/product";
import "../Style/Shop.css";
import { addtoCart, getCartCount } from "../Services/cart";
import { useNavigate } from "react-router-dom";

export const Shop = () => {
  const [products, setProducts] = useState({});
  const [count, setCount] = useState(0);
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const getdata = async () => {
    const data = await getProducts();
    console.log(data);
    await getCartCount().then((data) => {
      setCount(data.data);
    });
    setProducts(data.data);
  };

  const addCart = (product, price) => {
    setData({
      product: product,
      quantity: 1,
      price: price,
    });
    addtoCart(data).then((data) => {
      if (data.success) {
        getdata();
      }
    });
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container">
        <header>
          <h1 style={{ marginBottom: "20px" }}>Shopping</h1>
          <div class="icon-cart" style={{cursor: "pointer"}} onClick={() => navigate("/cart")}>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"
              />
            </svg>
            <span>{count}</span>
          </div>
        </header>
        <div class="listProduct">
          {products &&
            products.map((product) => {
              return (
                // <div key={product._id}>
                //   <h1>{product.name}</h1>
                //   <p>{product.price}</p>
                //   <img src={product.image} alt={product.name} />
                // </div>
                <div className="item">
                  <img src={product.image} alt={product.name} />
                  <h2>{product.name}</h2>
                  <div class="price">$ {product.price}</div>
                  <button
                    class="addCart"
                    data-id={product._id}
                    onClick={(e) => addCart(product._id, product.price)}
                  >
                    Add To Cart
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
