import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // BrowserRouter should wrap your app at the highest level
import Header from './Header';
import Footer from './Footer';
import ProductViewModal from './ProductViewModal';
import Routes from '../routes/AppRoutes'; // Import your routes

const Layout = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="container">
                    <div className="main">
                        <Routes /> {/* Directly use the Routes component */}
                    </div>
                </div>
                <Footer />
                <ProductViewModal />
            </div>
        </BrowserRouter>
    );
};

export default Layout;
