import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
`;

const MovieSlide = ({ movies }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Wrapper>
      {/* movies와 movies.results가 존재하는지 확인 */}
      {movies && movies.results ? (
        <Carousel responsive={responsive}>
          {movies.results.map((item, index) => (
            <MovieCard key={index} item={item} />
          ))}
        </Carousel>
      ) : (
        <div>No movies available</div> // 데이터가 없을 경우에 대한 처리
      )}
    </Wrapper>
  );
};

export default MovieSlide;
