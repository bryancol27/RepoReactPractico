import React  from 'react'
import { Header } from '../components/Header.jsx';
import { ProductList } from '../components/ProductList.jsx';
import { ProductCard } from '../components/ProductCard.jsx';
import { Menu } from '../components/Menu.jsx'
import { ProductPreview } from '../components/ProductPreview.jsx';

const API = "http://api.escuelajs.co/api/v1/products";


const Home = () => {
  return (
    <React.Fragment>
      <Header />

      <ProductList source={API}/>
      
      {/* <Menu/> */}

      {/* <ProductPreview/> */}
    </React.Fragment>
  )
};

export { Home }