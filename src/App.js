import './App.css';
import MainPage from './MainPage/MainPage'
import {Switch,Route} from "react-router-dom";
import MainPageCart from './ShowCart/MainPageShowCart'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={MainPage}/>
        <Route path="/viewcart" exact component={MainPageCart}/>
      </Switch>
    </div>
  );
}

export default App;
