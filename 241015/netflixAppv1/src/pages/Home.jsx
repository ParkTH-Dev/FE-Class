import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import { ClipLoader } from "react-spinners";
import styled from "styled-components";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovie, topRatedMovie, upComingMovie, loading } = useSelector(
    (state) => state.movie
  );
  const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Title = styled.h1`
    font-size: 22px;
    padding: 10px;
    margin: 10px;
    background-color: crimson;
    width: 200px;
    border-radius: 8px;
    text-align: center;
  `;

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    return (
      <Wrapper>
        <ClipLoader color="#fff" loading={loading} size={150} />;
      </Wrapper>
    );
  } else {
    return (
      <div>
        {popularMovie.results && <Banner movies={popularMovie.results[0]} />}
        <Title>popular Movie</Title>
        <MovieSlide movies={popularMovie} />
        <Title>top Movie</Title>
        <MovieSlide movies={topRatedMovie} />
        <Title>upcomming Movie</Title>
        <MovieSlide movies={upComingMovie} />
      </div>
    );
  }
};

export default Home;
