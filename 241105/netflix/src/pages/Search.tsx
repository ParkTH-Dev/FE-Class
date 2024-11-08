import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { GetMoviesResult, searchContents } from "../api";
import { useQuery } from "@tanstack/react-query";
import { makeImagePath } from "../utils";
import { color } from "framer-motion";

const Wrapper = styled.div`
  padding: 60px 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.black.lighter};
`;
const SearchTitle = styled.h2`
  font-size: 30px;
  color: #fff;
  margin-left: 100px;
  margin-top: 50px;
  b {
    font-size: 40px;
    margin-right: 15px;
  }
`;

const Movies = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 50px;
  padding: 0 60px;
`;

const Movie = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  cursor: pointer;
`;
const MovieImgWrap = styled.div`
  width: 300px;
  height: 450px;
  margin-bottom: 10px;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.3s;
  &:hover {
    border: 7px solid #fff;
  }
`;
const MovieImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: all 0.3s;
  &:hover {
    scale: 1.1;
  }
`;
const MovieInfo = styled.div`
  width: 300px;
  height: 150px;
  color: ${(props) => props.theme.white.darker};
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const MovieTitle = styled.h4`
  font-size: 22px;
  margin-bottom: 10px;
`;
const MovieDate = styled.div``;
const MovieValue = styled.div``;
const MovieRate = styled.div``;

const Search = () => {
  const { search } = useLocation();
  const keyword = new URLSearchParams(search).get("keyword");
  const content = searchContents(keyword);
  console.log(content);

  const { data: mobieData, isLoading: movieLoading } =
    useQuery<GetMoviesResult>({
      queryKey: ["multiContents", keyword],
      queryFn: () => searchContents(keyword),
    });
  const { data: genereData, isLoading: genereLoading } = useQuery({
    queryKey: ["getGeneres"],
    // queryFn: searchGeneres,
  });

  return (
    <>
      {movieLoading ? (
        <div>Loading...</div>
      ) : (
        <Wrapper>
          <SearchTitle>
            <b>"{keyword}"</b>검색 결과
          </SearchTitle>
          <Movies>
            {mobieData?.results.map((movie, i) => (
              <Movie key={i}>
                <MovieImgWrap>
                  <MovieImg
                    src={
                      movie.poster_path ? makeImagePath(movie.poster_path) : ""
                    }
                    alt=""
                  />
                </MovieImgWrap>
                <MovieInfo>
                  <MovieTitle>{movie.title || movie.original_title}</MovieTitle>
                  <MovieDate>개봉일: {movie.release_date}</MovieDate>
                  <MovieValue>{movie.adult ? "+18" : "ALL"}</MovieValue>
                  <MovieRate>
                    <span>평점:</span> {movie.vote_average?.toFixed(2)} /{" "}
                    <span>Members:</span>{" "}
                    {movie.vote_count?.toLocaleString("ko-kr")}
                  </MovieRate>
                </MovieInfo>
              </Movie>
            ))}
          </Movies>
        </Wrapper>
      )}
    </>
  );
};

export default Search;
