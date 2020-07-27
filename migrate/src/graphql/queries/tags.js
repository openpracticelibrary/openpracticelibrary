import { gql } from 'apollo-boost';

/*
 * GET_TAGS returns all top-level OPL Tags with just tag name and ID, without their Practice relationships.
 */
const GET_TAGS = gql`
  query Tags {
    tags {
      id
      tag
    }
  }
`;

export default GET_TAGS;