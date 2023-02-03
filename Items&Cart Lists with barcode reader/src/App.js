import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import Home from './pages/Home'
import Bargen from './pages/BarcodeGenerator'
import Barscan from './pages/BarcodeScanner'
import Cart from './pages/Cart'
import Items from './pages/Items'

function App() {
  return (
    <div className="App">
      <div className="App-header">
      
        <Router>
          <div>

            <Switch>
              <Route exact path="/">
                <Items/>
              </Route>
              <Route exact path="/cart">
                <Cart/>
              </Route>
              <Route path="/home">
                <Home/>
              </Route>
              <Route path="/barcode_generator">
                <Bargen/>
              </Route>
              <Route path="/barcode_scanner">
                <Barscan/>
              </Route>
            </Switch>

          </div>
        </Router>

      </div>
    </div>
  );
}

export default App;
