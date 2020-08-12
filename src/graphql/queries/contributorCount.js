import { gql } from 'apollo-boost';

const GET_CONTRIBUTORS = gql`
  query ContributorsCount {
    usersConnection {
      aggregate {
        totalCount
      }
    }
  }
`;

export default GET_CONTRIBUTORS;

