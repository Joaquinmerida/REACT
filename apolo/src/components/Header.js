import React from "react";

const Header = () => {
    return (
        <header>
            <div id="header">
                <h1>Apollo XI</h1>
                <div className="header__links">
                    <a href="./../../public/index.html">Inicio</a>
                    <a href="./../../public/index.html">Ordene aqui <span className= 'material-icons'>restaurant</span></a>
                    <a href="./../../public/index.html">Contacto</a>
                </div>
            </div>
        </header>
    );
};

export default Header;