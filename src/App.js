import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Content from './Components/Content/Content';
import Detaels from './Components/Detaels/Detaels';
import Friends from './Components/Friends/Friends';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NoDataFound from './Components/NoDataFound/NoDataFound';
import Post from './Components/Post/Post';
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
          <Route path='/detaels/:id' element={<Detaels></Detaels>}></Route>
          <Route path='/post' element={<Post></Post>}>
            <Route path=':postId' element={<Content></Content>}></Route>
          </Route>
          <Route path='*' element={<NoDataFound></NoDataFound>}></Route>
        </Routes>
    </div>
  );
}

export default App;
