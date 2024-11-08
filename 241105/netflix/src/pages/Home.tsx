import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { motion, AnimatePresence, delay, useScroll } from "framer-motion";
import { getMovies, GetMoviesResult } from "../api";
import { makeImagePath } from "../utils";
import { useNavigate, useMatch } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 2000px;
  margin-top: 60px;
  background: ${(props) => props.theme.black.lighter};
`;

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: ${(props) => props.theme.red};
`;

const Banner = styled.div<{ $bgPhoto: string | undefined }>`
  color: ${(props) => props.theme.white.darker};
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 60px;
  background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.$bgPhoto}) center/cover no-repeat;
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 10px;
`;

const Overview = styled.p`
  font-size: 24px;
  width: 50%;
  line-height: 1.5;
`;

const Slider = styled.div`
  position: relative;
  width: 100%;
  top: -100px;
`;

const Row = styled(motion.div)`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-bottom: 10px;
`;

const Box = styled(motion.div)<{ $bgPhoto: string | undefined }>`
  width: auto;
  height: 300px;
  background: url(${(props) => props.$bgPhoto}) center/cover no-repeat;
  font-size: 22px;
  position: relative;
  border-radius: 4px;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const Info = styled(motion.div)`
  width: 100%;
  height: 80px;
  padding: 20px;
  opacity: 1;
  position: absolute;
  bottom: -17px;
  background: rgba(0, 0, 0, 0);
  color: #ffffffd6;
  h4 {
    text-align: center;
    font-size: 16px;
  }
`;

const ModalBox = styled(motion.div)`
  position: absolute;
  left: 0%;
  right: 0%;
  margin: 0 auto;
  width: 1000px;
  height: 80vh;
  background-color: ${(props) => props.theme.black.lighter};
  color: ${(props) => props.theme.white.darker};
  border-radius: 12px;
  overflow: hidden;
  display: flex;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

const MovieCover = styled.div`
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  flex: 1;
`;

const MovieInfo = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  span {
    padding: 0 20px;
    font-size: 18px;
  }
`;

const MovieTitle = styled.h3`
  text-align: center;
  font-size: 30px;
  padding: 10px;

  color: crimson;
`;

const MovieOverView = styled.p`
  padding: 20px;
  line-height: 2;
  font-size: 18px;
`;

const rowVariants = {
  hidden: {
    x: window.innerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.innerWidth - 10,
  },
};

const boxVariants = {
  normal: { scale: 1 },
  hover: {
    scale: 1.5,
    y: -50,
    transition: { delay: 0.3, type: "tween" },
    zIndex: 1,
  },
};

const infoVariants = {
  hover: {
    bottom: "0",
    background: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    transition: { delay: 0.3, type: "tween" },
  },
};

const offset = 6;

const Home = () => {
  const history = useNavigate();
  const movieMatch = useMatch("/movies/:movieId");
  const { data, isLoading } = useQuery<GetMoviesResult>({
    queryKey: ["nowPlaying"],
    queryFn: getMovies,
  });

  console.log(data);
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const { scrollY } = useScroll();

  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      setLeaving(true);
      const totalMovies = data?.results.length - 8;
      const maxIndex = Math.ceil(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const toggleLeaving = () => setLeaving((prev) => !prev);
  const onBoxClick = (movieId: number) => {
    history(`/movies/${movieId}`);
  };
  const onOverlayClick = () => {
    history("/");
  };

  const clickedMovie =
    movieMatch?.params.movieId &&
    data?.results.find(
      (movie) => String(movie.id) === movieMatch.params.movieId
    );

  return (
    <Container>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            onClick={increaseIndex}
            $bgPhoto={makeImagePath(data?.results[5].backdrop_path || "")}
          >
            <Title>{data?.results[5].title}</Title>
            <Overview>{data?.results[5].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                variants={rowVariants}
                key={index}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 1 }}
              >
                {data?.results
                  .slice(2)
                  .slice(index * offset, index * offset + offset)
                  .map((movie) => (
                    <Box
                      onClick={() => onBoxClick(movie.id)}
                      layoutId={movie.id + ""}
                      key={movie.id}
                      variants={boxVariants}
                      $bgPhoto={makeImagePath(movie.backdrop_path || "")}
                      initial="normal"
                      whileHover="hover"
                    >
                      <Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
          <AnimatePresence>
            {movieMatch ? (
              <>
                <Overlay
                  onClick={onOverlayClick}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
                <ModalBox
                  style={{ top: scrollY.get() + 100 }}
                  layoutId={movieMatch.params.movieId}
                >
                  {clickedMovie && (
                    <>
                      <MovieCover
                        style={{
                          backgroundImage: `linear-gradient(to top, #00000068, transparent), url(${makeImagePath(
                            clickedMovie.poster_path
                          )})`,
                        }}
                      />
                      <MovieInfo>
                        <MovieTitle>{clickedMovie.title}</MovieTitle>
                        <span>⭐️ {clickedMovie.vote_average.toFixed(2)}</span>
                        <MovieOverView>{clickedMovie.overview}</MovieOverView>
                      </MovieInfo>
                    </>
                  )}
                </ModalBox>
              </>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Container>
  );
};

export default Home;
