import { ApolloServer, gql } from "apollo-server";

let tweets = [
  {
    id: "1",
    text: "first One",
    userId: "1",
  },
  {
    id: "2",
    text: "Second One",
    userId: "2",
  },
];
let users = [
  {
    id: "1",
    firstName: "Park",
    lastName: "Teahwan",
  },
  {
    id: "2",
    firstName: "go",
    lastName: "younha",
  },
  {
    id: "3",
    firstName: "Park",
    lastName: "Tae",
  },
];

const typeDefs = gql`
  type User {
    id: ID!
    """
    is the sum of firstName + lastName as a String
    """
    username: String!
    firstName: String!
    lastName: String!
  }
  """
  Tweet object represents a resource for a Tweet
  """
  type Tweet {
    id: ID!
    text: String!
    author: User
  }

  type Query {
    allTweets: [Tweet!]!
    allUsers: [User!]!
    allMovies: [Movie!]!
    tweet(id: ID!): Tweet
    movie(id: String!): Movie
  }
  type Mutation {
    postTweet(text: String, userId: ID): Tweet!
    """
    Delete a Tweet if found, else returns false
    """
    deleteTweet(id: ID): Boolean!
  }
  type Movie {
    id: Int!
    url: String!
    imdb_code: String!
    title: String
    title_english: String
    title_long: String
    slug: String!
    year: Int!
    rating: Float!
    runtime: Float!
    genres: [String!]!
    summary: String!
    description_full: String!
    synopsis: String!
    yt_trailer_code: String!
    language: String!
    background_image: String!
    background_image_original: String!
    small_cover_image: String
    medium_cover_image: String!
    large_cover_image: String!
  }
`;

const resolvers = {
  Query: {
    allTweets() {
      return tweets;
    },
    allMovies() {
      return fetch("https://yts.mx/api/v2/list_movies.json")
        .then((response) => response.json())
        .then((json) => json.data.movies);
    },
    movie(root, { id }) {
      return fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then((response) => response.json())
        .then((json) => json.data.movie);
    },
    allUsers() {
      return users;
    },
    tweet(root, { id }) {
      return tweets.find((tweet) => tweet.id === id);
    },
  },
  Mutation: {
    postTweet(root, { text, userId }) {
      const newTweet = {
        id: tweets.length + 1,
        text,
      };
      tweets.push(newTweet);
      return newTweet;
    },
    deleteTweet(root, { id }) {
      const tweet = tweets.find((tweet) => tweet.id === id);
      if (!tweet) return false;
      tweets = tweets.filter((tweet) => tweet.id !== id);
      return true;
    },
  },
  User: {
    firstName({ firstName }) {
      return firstName;
    },
    lastName({ lastName }) {
      return lastName;
    },
    username({ firstName, lastName }) {
      return `${firstName} ${lastName}`;
    },
  },
  Tweet: {
    author({ userId }) {
      const result = users.find((user) => user.id === userId);
      if (!result) {
        return null;
      }
      return result;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
