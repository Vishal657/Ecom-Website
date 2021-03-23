import './App.css';
import MainPage from './MainPage/MainPage'
import {Switch,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={MainPage}/>
      </Switch>
    </div>
  );
}

export default App;
