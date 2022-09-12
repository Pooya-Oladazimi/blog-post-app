import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    <div className="App">      
      <BrowserRouter>
      <Switch>              
          <Route exact path="/:tab?" component={Home} />         
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
