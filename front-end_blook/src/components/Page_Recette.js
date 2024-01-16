import "./Page_Recette.css";


function Recette() {
    return (
        <div className="display_recette">
            <h1>Recette</h1>
            <img className="img_recette" src="https://assets.afcdn.com/recipe/20190529/93153_w1024h576c1cx2220cy1728cxt0cyt0cxb4441cyb3456.jpg" alt="" />
            <h2>Temps de cuisson</h2>
            <p>1h</p>
            <h2>Nombre de portions</h2>
            <h2>Liste des ingrédients</h2>
            <ul className="">
                <li className="">1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            <h2>Étapes de préparation</h2>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default Recette;