import './App.css';
import MainPage from './MainPage/MainPage'
import {Switch,Route} from "react-router-dom";
import MainPageCart from './ShowCart/MainPageShowCart'
import Footer from './Component/Footer/Footer'
import ViewProduct from './ViewSoloProduct/ViewProduct'
import WhisList from './WishList/WishList'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={MainPage}/>
        <Route path="/viewcart" exact component={MainPageCart}/>
        <Route path="/viewproduct" exact component={ViewProduct}/>
        <Route path="/wishlist" exact component={WhisList}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
