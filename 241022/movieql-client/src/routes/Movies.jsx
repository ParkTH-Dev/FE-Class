import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;
const Header = styled.header`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(-45deg, #ffa3e0, #ff9369);
  color: #fff;
`;
const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
`;
const Loading = styled.div`
  font-size: 32px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;
const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  width: 62vw;
  margin: 20px 0;
`;
const PosterWrap = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 7px;
  box-shadow: 0 0 13px rgba(0, 0, 0, 0.4);
  overflow: hidden;
`;
const PosterBg = styled.div`
  background: url(${(props) => props.background}) center/cover no-repeat;
  width: 100%;
  height: 100%;
`;

const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      title
      id
      medium_cover_image
    }
  }
`;

const Movies = () => {
  const { data, loading } = useQuery(ALL_MOVIES);

  if (loading) {
    return <Loading>Laoding...</Loading>;
  }
  return (
    <Wrapper>
      <Header>
        <Title>Movies List</Title>
      </Header>

      <MoviesGrid>
        {data.allMovies.map((movie) => (
          <PosterWrap key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <PosterBg background={movie.medium_cover_image} />
            </Link>
          </PosterWrap>
        ))}
      </MoviesGrid>
    </Wrapper>
  );
};

export default Movies;
