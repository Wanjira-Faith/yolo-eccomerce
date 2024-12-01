import React from 'react';

import { Link } from 'react-router-dom';

import Grid from './Grid';

import logo from '../assets/images/Logo.png';

const footerAboutLinks = [
    {
        display: "About Us",
        path: "/about"
    },
    {
        display: "Contact",
        path: "/contact"
    },
    {
        display: "Careers",
        path: "/about"
    },
    {
        display: "News",
        path: "/about"
    },
    {
        display: "Store System",
        path: "/about"
    }
];

const footerCustomerLinks = [
    {
        display: "Return Policy",
        path: "/about"
    },
    {
        display: "Warranty Policy",
        path: "/about"
    },
    {
        display: "Refund Policy",
        path: "/about"
    }
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        <div className="footer__title">
                            Support Hotline
                        </div>
                        <div className="footer__content">
                            <p>
                                Order Inquiries <strong>0712345678</strong>
                            </p>
                            <p>
                                Order Tracking <strong>0712345678</strong>
                            </p>
                            <p>
                                Feedback and Complaints <strong>0712345678</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            About Yolo
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Customer Care
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img src={logo} className="footer__logo" alt="" />
                            </Link>
                        </p>
                        <p>
                            Aiming to bring the joy of dressing in new styles every day to millions of Vietnamese consumers. Let's work together with Yolo towards a more dynamic and positive life.
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    );
}

export default Footer;
