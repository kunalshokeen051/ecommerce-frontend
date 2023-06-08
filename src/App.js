import React,{useContext} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Category from './components/Category/Category'
import SingleProduct from './components/SingleProduct/SingleProduct'
import Newsletter from './components/Footer/Newsletter/Newsletter'
import AppContext from './utils/Context'
import SubscriberPage from './components/SubscriberPage/SubscriberPage';
import Wishlist from './Pages/Wishlist/Wishlist';
import Context from './utils/Context';

const App = () => {

    return (
        <>
        <Router>
            <AppContext>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/category/:id' element={<Category />} />
                    <Route path='/product/:id' element={<SingleProduct />} />
                    <Route path='/comingSoon' element={<SubscriberPage/>} />
                    <Route path='/wishlist' element={ <Wishlist/> } />
                </Routes>
                <Newsletter />
                <Footer />
            </AppContext>
        </Router>
        </>
    )
}

export default App