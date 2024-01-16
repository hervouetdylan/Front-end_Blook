import './App.css';
import Card from "./components/Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/home" component={Card} />
      </Routes>
    </BrowserRouter></>
  );
}

export default App;
