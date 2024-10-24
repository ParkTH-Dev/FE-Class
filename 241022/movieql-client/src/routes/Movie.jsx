import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(-45deg, #ffa3e0, #ff9369);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const ItemGroup = styled.div`
  width: 80vw;
  display: flex;
  justify-content: center;
`;
const Column = styled.div`
  flex: 1;
  text-align: center;
`;
const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 15px;
  font-weight: 600;
  margin-top: 20px;
`;
const SubTitle = styled.div`
  font-size: 32px;
  margin: 15px 0 20px;
`;
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
`;
const Description = styled.p`
  font-size: 20px;
  line-height: 1.4;
`;
const Img = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  img {
    border-radius: 12px;
    width: 70%;
    height: 70%;
  }
`;
const Loading = styled.div`
  font-size: 32px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;
const GET_MOVIE = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title_long
      runtime
      genres
      medium_cover_image
      rating
      description_full
      summary
      synopsis
      isLiked @client
    }
  }
`;

const Movie = () => {
  const { id } = useParams();
  const {
    data,
    loading,
    client: { cache },
  } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id,
    },
  });
  const onClick = () => {
    cache.writeFragment({
      id: `Movie:${id}`,
      fragment: gql`
        fragment MovieFragment on Movie {
          isLiked
        }
      `,
      data: {
        isLiked: !data.movie.isLiked,
      },
    });
  };
  if (loading) {
    return <Loading>Loading...</Loading>;
  }
  return (
    <Wrapper>
      <ItemGroup>
        <Img>
          <img src={data.movie.medium_cover_image} alt="" />
        </Img>
        <Column>
          <Title>
            {data.movie.title_long}{" "}
            {data.movie.genres ? <span>({data.movie.genres})</span> : ""}
          </Title>
          <SubTitle>
            <span>⭐️{data.movie.rating}</span>{" "}
            <Button onClick={onClick}>
              👍{data.movie.isLiked ? "Like" : "UnLike"}
            </Button>
          </SubTitle>
          <Description>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
            beatae consequuntur, earum sit exercitationem alias facilis corrupti
            delectus nesciunt, accusamus fugiat nulla doloribus et, voluptatibus
            quo doloremque. Labore, nulla sint. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. At, velit iure, ab aliquam totam sequi
            voluptatum optio, ipsum beatae eos aperiam excepturi impedit iste
            debitis quia mollitia amet sint tempora. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatem beatae rerum nemo eligendi
            placeat quos natus nisi sit optio nulla aliquam iure voluptatum
            magni fugiat, hic suscipit tenetur soluta sunt!
          </Description>
        </Column>
      </ItemGroup>
    </Wrapper>
  );
};

export default Movie;
