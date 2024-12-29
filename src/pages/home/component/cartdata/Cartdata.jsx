import React from 'react'
import styles from './Cartdata.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../../../../components/cards/Cards';
import { getProductsThunk, postProductBasketThunk, postProductWishThunk } from '../../../../redux/reducer/productSlice';
import { useEffect } from 'react';

const Cartdata = () => {

    const dispatch = useDispatch();

    const products = useSelector((state) => state.products.products);
    const loading = useSelector((state) => state.products.loading);
    const error = useSelector((state) => state.products.error);
  
    console.log(products);
  
    const addWish = (item) => {
      dispatch(postProductWishThunk(item))
    }
  
    const addBasket = (item) => {
      dispatch(postProductBasketThunk(item))
    }
    
    
  
    useEffect(() => {
      dispatch(getProductsThunk())
    }, []);

    
  if (error) return <p>XETA BAS VERDI</p>;
  if (loading) return <p>Yuklenir...</p>;

  return (
    <div className={styles.container}>
    {products && products.map((item) => <Cards item={item} addtobasket={() => addBasket(item)} addtowish={() => addWish(item)} />)}</div>
  )
}

export default Cartdata