import React from 'react'
import Layout from '../../components/layout/Layout'
import Cartdata from './component/cartdata/Cartdata'
import Carts from './component/carts/Carts'
import Newarrivals from './component/newarrivals/Newarrivals'

const Home = () => {
  return (
    <Layout>
        <Newarrivals/>
        <Carts/>
        <Cartdata/>
    </Layout>
  )
}

export default Home