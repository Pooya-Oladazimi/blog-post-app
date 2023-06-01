import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import {forLoopTypeOne, forLoopTypeTwo, forLoopTypeThree, forLoopTypeFour} from './components/ForLoops';
import SortResults from './components/SortResults';
import ResizeablePane from './components/paneResize';
import './App.css';


function App() {
  return (
    <div className="App">      
      <BrowserRouter>
      <Switch>              
          <Route exact path="/home/:tab?" component={Home} />
          <Route  path="/forloops" component={forLoopTypeOne} />
          <Route  path="/sort" component={SortResults} />
          <Route  path="/resizePane" component={ResizeablePane} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
