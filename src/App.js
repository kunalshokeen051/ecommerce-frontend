import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import Category from './components/Category/Category'
import SingleProduct from './components/SingleProduct/SingleProduct'
import AppContext from './utils/Context'
import SubscriberPage from './components/SubscriberPage/SubscriberPage';
import Wishlist from './Pages/Wishlist/Wishlist';
import Checkout from './Pages/checkout/Checkout';
import About from './Pages/About/About';

const App = () => {

    return (
        <>
            <Router>
                <AppContext>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/category/:id' element={<Category />} />
                        <Route path='/product/:id' element={<SingleProduct />} />
                        <Route path='/comingSoon' element={<SubscriberPage />} />
                        <Route path='/login' element={<SubscriberPage />} />
                        <Route path='/wishlist' element={<Wishlist />} />
                        <Route path='/checkout' element={<Checkout />} />
                        <Route path='/about' element={<About />} />
                    </Routes>
                </AppContext>
            </Router>
        </>
    )
}

export default App 