import { gql } from 'apollo-boost';

const GET_PRACTICES = gql`
  query Practices($start: Int, $limit: Int) {
    practices(start: $start, limit: $limit) {
      id
      slug
      coverImage
      title
      tags {
        tag
      }
      subtitle
      updatedAt
      upvotes
      mediaGallery {
        link
      }
      ama {
        question
      }
    }
  }
`;

export default GET_PRACTICES;
