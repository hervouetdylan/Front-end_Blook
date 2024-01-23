import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        // Ajoutez ici la logique de recherche
    };

    return (
        <nav>
            <h1 className="nameSite">Blook</h1>
            <ul>
                <li><a href="/">Accueil</a></li>
                <li><a href="">Catégorie</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Login</a></li>
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
