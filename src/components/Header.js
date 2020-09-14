import React from 'react'
import { NavLink } from 'react-router-dom'
import Headroom from 'react-headroom'

const Header = () => (
    <Headroom>
    <div className="header">
        <div className="header__text">
            <h1 className="header__title">BADLY <span className="text-transform">APP</span></h1>
            <h4 className="header__subtitle"><span className="text-transform">Doing Business.</span> Badly.</h4>
        </div>
        <div className="nav__container">
            <NavLink 
                className="nav__link" 
                activeClassName="is-active" 
                exact={true}
                to="/">
                home
            </NavLink>
            <NavLink 
                className="nav__link" 
                activeClassName="is-active" 
                to="/form">
                get idea
            </NavLink>
            <NavLink 
                className="nav__link--last" 
                activeClassName="is-active" 
                to="/about">
                about
            </NavLink>
        </div>
    </div> 
    </Headroom>
)

export default Header