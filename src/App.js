import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import TVShows from "./Components/Home/TVShows";
import Movies from "./Components/Home/Movies";
import RecentlyAdded from "./Components/Home/RecentlyAdded";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tvshows" element= {<TVShows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/recent" element={<RecentlyAdded />} />
      </Routes>
    </Router>
  );
}

export default App;
