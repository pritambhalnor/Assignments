// import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Content from './component/Assignment1/Content';
import Context from './component/Assignment2/Context';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route  path="/assignment1">
            <Content />
          </Route>
          <Route  path="/assignment2">
            <Context />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
