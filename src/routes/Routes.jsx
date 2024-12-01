import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import AboutUs from '../pages/About'
import Contact from '../pages/Contact'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path="/catalog/:slug" component={Product}/>
            <Route path='/catalog' component={Catalog}/>
            <Route path='/cart' component={Cart} />
            <Route path='/about' component={AboutUs} />
            <Route path='/contact' component={Contact} />
        </Switch>
    )
}

export default Routes
