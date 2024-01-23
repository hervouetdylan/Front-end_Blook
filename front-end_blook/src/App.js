import Card from "./components/Card";
import Recette from "./components/Page_Recette";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/recette" element={<Recette />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter></>
  );
}

export default App;