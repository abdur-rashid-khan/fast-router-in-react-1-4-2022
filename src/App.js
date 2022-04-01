import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Friends from './Components/Friends/Friends';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NoDataFound from './Components/NoDataFound/NoDataFound';
import Wellcame from './Components/Wellcame/Wellcame';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Wellcame></Wellcame>
        <Routes>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/user' element={<Friends></Friends>}></Route>
          <Route path='*' element={<NoDataFound></NoDataFound>}></Route>
        </Routes>
    </div>
  );
}

export default App;
