import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import OrderAdd from './OrderAdd';
import ProductList from './ProductList';
import ProductPick from './ProductPick';
import OrderCheckOut from './OrderCheckOut';

const Router = () => {
    return (
        <div>
            <BrowserRouter >
                <Header />
                <Routes>

                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/home' element={<Home />} />
                    <Route exact path='/index' element={<Home />} />

                    <Route exact path='/productlist' element={<ProductList />} />
                    <Route exact path='/productpick' element={<ProductPick />} />
                    <Route exact path='/orderadd/:userid' element={<OrderAdd />} />

                    <Route exact path='/ordercheckout' element={<OrderCheckOut />} />
                    


                </Routes>
                <Footer />
            </BrowserRouter>
            
        </div>
    );
}

export default Router;
