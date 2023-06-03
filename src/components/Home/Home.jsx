import React, { useEffect, useContext, Suspense } from "react";
import "./Home.scss";

import Offer from "./Offer/Offer";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import Slider from "../Slider/Slider";
import { fetchDataFromApi } from "../../utils/Api"
import { Context } from "../../utils/Context"
import Loader from "../Loader/Loader";


const Home = () => {

  const { categories,
    setCategories,
    products,
    setProducts } = useContext(Context);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*")
      .then(res => {
        console.log(res);
        setProducts(res);
  });
};

    const getCategories = () => {
      fetchDataFromApi("/api/categories?populate=*")
        .then(res => {
          // console.log(res);
          setCategories(res);
        })}


    return (
      <Suspense fallback={<Loader/>}>
      <div>
        <Offer />
        <Banner />
        <div className="main-content">
          <div className="layout">
            <Slider animate='fade' />
            <Slider animate='slide'/>
            <Category categories={categories} />
            <Products products={products} headingText="Popular Products" />
          </div>
        </div>
      </div>
      </Suspense>
    );
  }

export default Home;