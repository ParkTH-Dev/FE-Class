import api from "../api";

const API_KEY = import.meta.env.VITE_API_KEY;

const getMovies = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_MOVIES_REQUEST",
        loading: true,
      });
      const popularMovieApi = api.get(
        `movie/popular?api_key=${API_KEY}&language=ko-kr&page=1`
      );

      const topRatedMovieApi = api.get(
        `movie/top_rated?api_key=${API_KEY}&language=ko-kr&page=1`
      );

      const upComingMovieApi = api.get(
        `movie/upcoming?api_key=${API_KEY}&language=ko-kr&page=1`
      );

      const genreApi = api.get(
        `genre/movie/list?api_key=${API_KEY}&language=ko`
      );
      console.log(genreApi);

      const [popularMovie, topRatedMovie, upComingMovie, genreList] =
        await Promise.all([
          popularMovieApi,
          topRatedMovieApi,
          upComingMovieApi,
          genreApi,
        ]);
      console.log(genreList);
      dispatch({
        type: "GET_MOVIE_SUCCESS",
        payload: {
          popularMovie: popularMovie.data,
          topRatedMovie: topRatedMovie.data,
          upComingMovie: upComingMovie.data,
          genreList: genreList.data.genres,
          loading: true,
        },
      });
    } catch (error) {
      dispatch({
        type: "GET_MOVIES_FAILURE",
      });
    }
  };
};

export const movieAction = { getMovies };
