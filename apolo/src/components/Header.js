import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div id="header">
                <h1>Apollo XI</h1>
                <div className="header__links">
                    <Link to="/inicio">Inicio</Link>
                    <Link to="/">Menu <span className='material-icons'>restaurant</span></Link>
                    <Link to="/menu/detalles"><span className="material-icons">
                        shopping_basket
                    </span></Link>
                </div>
            </div>
        </header>
    );
};

export default Header;