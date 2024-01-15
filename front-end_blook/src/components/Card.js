import "./Card.css";

let recetteName = [
    "Cookies",
    "Brownie",
    "Tarte aux pommes",
    "Tarte au citron meringuée",
    "Tarte aux fraises",
    "Tarte aux framboises",
    "Tarte aux myrtilles",
]
let recetteDescription = [
    "",
]
let recetteLienImg = [
    "https://assets.afcdn.com/recipe/20190529/93153_w1024h576c1cx2220cy1728cxt0cyt0cxb4441cyb3456.jpg",
    "https://assets.afcdn.com/recipe/20161114/26634_w1024h768c1cx2736cy1824.webp",
    "https://static.750g.com/images/1200-675/a96d46e59b4f0ab8169c7cb0cb932a84/la-cuisson.jpg",
    "https://www.maspatule.com/blog/wp-content/uploads/2022/03/TARTE-CITRON-MERINGUEE-1440x1807.jpg",
    "https://yummix.fr/wp-content/uploads/2023/05/tarte-aux-fraises.jpg",
    "https://cache.marieclaire.fr/data/photo/w1000_ci/6l/recette-tarte-framboise-creme-patissiere.jpg",
    "https://wordpress.potagercity.fr/wp-content/uploads/2019/01/RECETTE_tarte_myrtille.jpg",
]

// function fetchData() {
//     fetch('https://api.example.com/data')
//         .then(response => response.json())
//         .then(data => {
//             // Faites quelque chose avec les données reçues
//             console.log(data);
//         })
//         .catch(error => {
//             // Gérez les erreurs
//             console.error(error);
//         });
// }

// fetchData();

 

function Card() {
    return (
        <div className="display_cards">
            {recetteName.map((name, index) => (
                <div className="card" key={index}>
                    <a href="">
                        <img src={recetteLienImg[index]} alt="" />
                    </a>
                    <h2 className="title_recette">{name}</h2>
                    <p>{recetteDescription}</p>
                </div>
            ))}
        </div>
    );
}

export default Card;