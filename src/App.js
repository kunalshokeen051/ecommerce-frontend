import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Category from './components/Category/Category'
import SingleProduct from './components/SingleProduct/SingleProduct'
import Newsletter from './components/Footer/Newsletter/Newsletter'
import AppContext from './utils/Context'


const App = () => {
    return (
        <Router>
            <AppContext>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/category/:id' element={<Category />} />
                    <Route path='/product/:id' element={<SingleProduct />} />
                </Routes>
                <Newsletter />
                <Footer />
            </AppContext>
        </Router>
    )
}

export default App