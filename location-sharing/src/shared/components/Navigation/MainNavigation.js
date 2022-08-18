import React from 'react';
import MainHeader from './MainHeader';
import {Link} from 'react-router-dom';
import Navlinks from './Navlinks';
import SideDrawer from './SideDrawer';
import './MainNavigation.css';

const MainNavigation = props => {
    return(
        <React.Fragment>
            <SideDrawer>
                <nav className="main-navigation__drawer-nav">
                    <Navlinks/>
                </nav>
            </SideDrawer>
            <MainHeader>
                <button className="main-navigation__menu-btn">
                    <span/>
                    <span/>
                    <span/>
                </button>
                <h1 className="main-navigation__title">
                    <Link to="/">
                        YourPlaces
                    </Link>
                </h1>
                <nav className="main-navigation__header-nav">
                <Navlinks/>
                </nav>
            </MainHeader>
        </React.Fragment>
    );
};
export default MainNavigation;