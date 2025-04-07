import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css"; // 
import { Link } from "react-router-dom";

const apiKey = "7e5122f42b3d47b2f9c1deaf4e1d2214";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

const Row = ({ title, arr = [] }) => (
  <div className="row">
    <h2>{title}</h2>
    <div>
      {arr.map((item, index) =>
        item.poster_path && (
          <Card key={index} img={`${imgUrl}${item.poster_path}`} />
        )
      )}
    </div>
  </div>
);

const TVShows = () => {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [airingToday, setAiringToday] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/tv/popular?api_key=${apiKey}`);
      setPopular(results);
    };

    const fetchTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/tv/top_rated?api_key=${apiKey}`);
      setTopRated(results);
    };

    const fetchAiringToday = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/tv/airing_today?api_key=${apiKey}`);
      setAiringToday(results);
    };

    fetchPopular();
    fetchTopRated();
    fetchAiringToday();
  }, []);

  return (
    <section className="home">
      <Row title={"Popular TV Shows"} arr={popular} />
      <Row title={"Top Rated TV Shows"} arr={topRated} />
      <Row title={"Airing Today"} arr={airingToday} />
    </section>
  );
};

export default TVShows;
