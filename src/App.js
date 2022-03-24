// import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Content from './component/Assignment1/Content';
import Context from './component/Assignment2/Context';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Header />}/>
  
          <Route  path="/assignment1" element={<Content />}/>
            
          <Route  path="/assignment2" element={<Context />}/>
            
        </Routes>
      </Router>
    </div>
  );
}

export default App;
