import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieList from './components/MovieList/MovieList';
import MovieDetail from './components/MovieDetail/MovieDetail';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path = "/" element= {<MovieList/>}/>
          <Route path = "/:type/" element= {<MovieList/>}/>
          <Route path = "movie/:id" element= {<MovieDetail/>}/>
          <Route path="/*" element={<h1>Error not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
