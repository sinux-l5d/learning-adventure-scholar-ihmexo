import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
///{.toString()} pour enlever les warnings
    return (
        <div className="navigation">
            <NavLink to={"/exercice".toString()}> 
                Liste des Exercices
            </NavLink>
            <NavLink to={"/".toString()}>
                Accueil
            </NavLink>
        </div>
    );
};

export default Navigation;