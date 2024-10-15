import styled from "styled-components";

const BgImg = styled.div`
  width: 100%;
  height: 800px;
  position: relative;
  color: #fff;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #000, transparent);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const BannerInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translate(0, -50%);
`;
const MovieTitle = styled.h1`
  color: #fff;
  font-size: 40px;
  font-weight: 600;
`;
const MovieOverView = styled.p`
  font-size: 22px;
  width: 810px;
  line-height: 35px;
`;

const Banner = ({ movie }) => {
  const imgUrl = "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/";
  return (
    <div>
      <BgImg>
        <Img src={`${imgUrl}${movie?.backdrop_path}`} />
        <BannerInfo>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieOverView>{movie.overview}</MovieOverView>
        </BannerInfo>
      </BgImg>
    </div>
  );
};

export default Banner;
