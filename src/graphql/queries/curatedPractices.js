import { gql } from 'apollo-boost';

const GET_CURATED_PRACTICES = gql`
  query CuratedPractices($sort: String!) {
    practices(sort: $sort, limit: 8) {
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

export default GET_CURATED_PRACTICES;
