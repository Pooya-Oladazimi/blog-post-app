import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import {forLoopTypeOne, forLoopTypeTwo, forLoopTypeThree, forLoopTypeFour} from './components/ForLoops';


function App() {
  return (
    <div className="App">      
      <BrowserRouter>
      <Switch>              
          <Route exact path="/home/:tab?" component={Home} />
          <Route  path="/forloops" component={forLoopTypeFour} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
