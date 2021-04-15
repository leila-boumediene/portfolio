import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./component/Header";
import Home from "./containers/Home";
import MesCompetences from "./containers/MesCompétences";
import MesProjets from "./containers/MesProjets";
import MonProfilInteresse from "./containers/MonProfilInteresse";
import QuiSuisJe from "./containers/QuiSuisJe";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
library.add(faChevronCircleLeft);

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/quisuisje">
          <QuiSuisJe />
        </Route>
        <Route path="/mesprojets">
          <MesProjets />
        </Route>
        <Route path="/mescompetences">
          <MesCompetences />
        </Route>
        <Route path="/monprofilinteresse">
          <MonProfilInteresse />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
