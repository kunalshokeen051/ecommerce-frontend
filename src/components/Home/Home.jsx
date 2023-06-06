import React, { useEffect, useContext} from "react";
import "./Home.scss";

import Offer from "./Offer/Offer";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import Slider from "../Slider/Slider";
import { fetchDataFromApi } from "../../utils/Api"
import { Context } from "../../utils/Context"
import Modal from './Modal/Modal'
import LogoAnimationLoader from '../LogoAnimationLoader/LogoAnimationLoader'


const Home = () => {

  const { categories,
    setCategories,
    products,
    setProducts, loader, setLoader } = useContext(Context);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getProducts = async () => {
    setLoader(true);
    await fetchDataFromApi("/api/products?populate=*")
      .then(res => {
        setProducts(res);
  });
};

    const getCategories = async () => {
      setLoader(true);
      await fetchDataFromApi("/api/categories?populate=*")
        .then(res => {
          setCategories(res);
        })}


    return (
      <>
      {loader ? <LogoAnimationLoader />: ""}
      <Modal/>
      <div>
        <Offer />
        <Banner />
        <div className="main-content" onLoad={() =>{setLoader(false)}}>
          <div className="layout">
            <Slider animate='fade' />
            <Slider animate='slide'/>
            <Category categories={categories} />
            <Products products={products} headingText="Popular Products" />
          </div>
        </div>
      </div>
      </>
    );
  }

export default Home
