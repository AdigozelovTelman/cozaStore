import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../../components/cards/Cards';
import Layout from '../../components/layout/Layout'
import { getBasketThunk } from '../../redux/reducer/basketSlice';
import styles from './Basket.module.scss'

const Basket = () => {

    const dispatch = useDispatch();
    const basketProducts = useSelector((state) => state.basket.basket);
    useEffect(() => {
      dispatch(getBasketThunk());
    }, []);

  return (
    <Layout>
        <div className={styles.container}>
    {basketProducts && basketProducts.map((item) => <Cards item={item} />)}
  </div>
    </Layout>
  )
}

export default Basket