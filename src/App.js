import './App.css';
import MainPage from './MainPage/MainPage'
import {Switch,Route} from "react-router-dom";
import MainPageCart from './ShowCart/MainPageShowCart'
import Footer from './Component/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={MainPage}/>
        <Route path="/viewcart" exact component={MainPageCart}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
