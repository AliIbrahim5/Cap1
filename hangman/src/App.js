import "./App.css";
import { Route, Switch } from "react-router";
import Play from "./components/Play";
import Home from "./components/Home";
import Lost from "./components/Lost";
import Won from "./components/Won";
import Howplay from "./components/How-to-play";
import Categ from "./components/Categories";
import About from "./components/About";
function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/play" component={Play} />
      <Route exact path="/lost" component={Lost} />
      <Route exact path="/won" component={Won} />
      <Route exact path="/Categ" component={Categ} />
      <Route exact path="/Howplay" component={Howplay} />
      <Route exact path="/About" component={About} />

      </Switch>
    </div>
  );
}

export default App;
