import styled from "styled-components";
import Badge from "react-bootstrap/Badge";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  cursor: pointer;
`;

const Overlay = styled.div`
  /* swidth: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid #f00; */
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Title = styled.h1`
  width: 100%;
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 20px;
`;
const Genre = styled.div`
  display: flex;
  gap: 6px;
`;
const InfoGroup = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  bottom: 10px;
  padding: 10px;
  gap: 20px;
`;
const Vote = styled.span``;
const Adult = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  padding: 10px;
  background: rgba(220, 20, 60, 0.8);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.7);
  border-radius: 50px;
  font-size: 14px;
  line-height: 32px;
`;
const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);

  return (
    <Wrapper>
      <Img
        src={`https://media.themoviedb.org/t/p/original/${item.backdrop_path}`}
        alt="thumbnail"
      />
      <Title>{item.title}</Title>
      <Adult>{item.adult ? "18세 이상" : "전체"}</Adult>
      <InfoGroup>
        <Genre>
          {item.genre_ids.map((id, index) => (
            <Badge key={index}>
              {genreList.find((item) => item.id === id).name}
            </Badge>
          ))}
        </Genre>
        <Vote>{item.vote_average}</Vote>
      </InfoGroup>
    </Wrapper>
  );
};
export default MovieCard;
