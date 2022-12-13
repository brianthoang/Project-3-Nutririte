import React, { useState } from 'react';
import Navigation from '../Navigation';
// home page is landing page
import Home from '../Home';
import Footer from '../Footer';
import Login from '../Login';
import MealPrep from '../MealPrep';
import Recipes from '../Recipes';


function Header() {
    // state of current page
    const [currentPage, handlePageChange] = useState('Home');

    const renderPage = () => {
    // switch statement that will return the appropriate component of the 'currentPage'
    switch (currentPage) {
        case "Home":
            return <Home></Home>
        case "Login":
            return <Login></Login>
        case "Meal Prep":
            return <MealPrep></MealPrep>
        case "Recipes":
            return <Recipes></Recipes>
        default:
            return<Home></Home>
    

        };

    };
    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            <div>
            {
                // render the component returned by 'renderPage()'
                renderPage()
            }
            <Footer/>
            </div>
        </div>
    );
};




export default Header;