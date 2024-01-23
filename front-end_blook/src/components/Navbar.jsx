import React, { useState } from "react";
import "./Navbar.css";
// import { Link } from 'react-router-dom';

function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        // Ajoutez ici la logique de recherche
    };

    return (
        <nav>
            <ul>
                <li>
                    {/* <Link to="/">Accueil</Link> */}
                </li>
                {/* <li><a href="">Catégorie</a></li>
                <li><a href="">À propos</a></li>
                <li><a href="">Contact</a></li> */}
            </ul>
            <input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={handleSearch}
            />
        </nav>
    );
}

export default Navbar;
