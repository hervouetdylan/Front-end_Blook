import "./Page_Recette.css";
import Header from "./Navbar";


function Recette() {
    return (
        <><Header />
        <div className="display_recette">
            <h1 className="title_page_recette">Recette</h1>
            <img className="img_recette" src="https://assets.afcdn.com/recipe/20190529/93153_w1024h576c1cx2220cy1728cxt0cyt0cxb4441cyb3456.jpg" alt="" />
            <h2>Temps de cuisson</h2>
            <p>1h</p>
            <h2>Nombre de portions</h2>
            <h2>Liste des ingrédients</h2>
            <ul className="list_ingrédients">
                <li className="ingrédient">1</li>
            </ul>
            <h2>Étapes de préparation</h2>
            <ul className="list_étapes">
            <li className="étapes">1</li>
            </ul>
        </div></>
    )
}

export default Recette;