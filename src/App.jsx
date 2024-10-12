import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage/Home";
import TopRated from "./pages/TopRatedPage/TopRated";
import Upcoming from "./pages/UpcomingPage/Upcoming";
import Search from "./pages/SearchPage/Search";
import MovieDetail from "./pages/MovieDetailPage/MovieDetail";
import './index.css';

function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
