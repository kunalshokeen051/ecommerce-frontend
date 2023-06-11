import React,{useContext} from "react";
import "./Category.scss";
import Header from '../Header/Header'
import { useParams } from "react-router-dom";
import { useFetch } from '../../hooks/useFetch'
import Products from "../Products/Products";
import { Context } from '../../utils/Context';
import LogoAnimationLoader from '../LogoAnimationLoader/LogoAnimationLoader';

const Category = () => {
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);

  const {loader, setLoader} = useContext(Context);
  
  const loaderStatus = (value) =>{
    setLoader(value);
  }
  loaderStatus(true);

  return (
    <>
    <Header/>
{
  loader 
  ? <LogoAnimationLoader/>
  : <div onLoad={loaderStatus(false)} className="category-main-content">
      <div className="layout">
        <div className="category-title">{data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}</div>
        <Products innerPage={true} products={data} />
      </div>
    </div>
}
    </>
  );
};

export default Category;
