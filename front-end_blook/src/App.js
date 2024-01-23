import Card from "./components/Card";
import Recette from "./components/Page_Recette"
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/recette" element={<Recette />} />
      </Routes>
    </BrowserRouter></>
  );
}

export default App;