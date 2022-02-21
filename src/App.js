import './App.css';
// import {Navigation} from './components/Navigation';
 import {Search} from './components/Search';
 import {Routes, Route} from "react-router-dom";
import { Home } from './components/Home';
function App() {
  return (
    <div className="App">
         <Routes>
           <Route path="/" element={<Home />}></Route>
           <Route path="/search/:q" element={<Search />}>
           </Route>
         </Routes>
    </div>
  );
}

export default App;
