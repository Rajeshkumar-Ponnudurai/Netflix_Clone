// src/Components/Home/RecentlyAdded.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const apiKey = "7e5122f42b3d47b2f9c1deaf4e1d2214";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

const RecentlyAdded = () => {
  const [recentMovies, setRecentMovies] = useState([]);

  useEffect(() => {
    const fetchRecent = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/now_playing?api_key=${apiKey}`);
      setRecentMovies(results);
    };

    fetchRecent();
  }, []);

  return (
    <section className="row">
      <h2>Recently Added</h2>
      <div>
        {recentMovies.map(
          (item, index) =>
            item.poster_path && (
              <Card key={index} img={`${imgUrl}${item.poster_path}`} />
            )
        )}
      </div>
    </section>
  );
};

export default RecentlyAdded;
