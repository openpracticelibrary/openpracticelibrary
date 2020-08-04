import { gql } from 'apollo-boost';

const GET_PRACTICE_COUNT = gql`
  query PracticeCount {
    practicesConnection {
      aggregate {
        totalCount
      }
    }
  }
`;

export default GET_PRACTICE_COUNT;
