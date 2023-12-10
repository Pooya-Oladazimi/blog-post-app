import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import {forLoopTypeOne, forLoopTypeTwo, forLoopTypeThree, forLoopTypeFour} from './components/ForLoops';
import SortResults from './components/SortResults';
import ResizeablePane from './components/paneResize';
import Login from './components/Login';
import './App.css';
import ClassExamples from './components/classComponentExample';
import { FunctionComponent } from './components/functionComponentExmple';


function App() {
  return (
    <div className="App">      
      <BrowserRouter>
      <Switch>              
          <Route exact path="/home/:tab?" component={Home} />
          <Route  path="/forloops" component={forLoopTypeOne} />
          <Route  path="/sort" component={SortResults} />
          <Route  path="/resizePane" component={ResizeablePane} />
          <Route path={"/login"} component={Login}/>    
          <Route path={"/classExample"} component={ClassExamples}/>  
          <Route path={"/functionExample"} component={FunctionComponent}/>  

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
