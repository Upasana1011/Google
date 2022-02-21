//import logo from './logo.svg';
import './App.css';
// import {Navigation} from './components/Navigation';
// import {Search} from './components/Search';
// import {Routers, Route} from "react-router-dom";
import { Home } from './components/Home';
function App() {
  return (
    <div className="App">
         <Home />
         {/* <Routers>
           <Route path="/search" element={<Search />}>
           </Route>
         </Routers> */}
    </div>
  );
}

export default App;
