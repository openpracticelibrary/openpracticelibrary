import { gql } from 'apollo-boost';

const GET_PRACTICE_ID = gql`
  query Practice($slug: String!) {
    practices(where: { slug: $slug }) {
      id
    }
  }
`;

export default GET_PRACTICE_ID;
