import { gql } from 'apollo-boost';

/*
 * GET_PRACTICES_BY_KEYWORD returns all OPL Practices that match a given keyword match in
 * its title, subtitle, or tags
 */
const GET_PRACTICES_BY_KEYWORD = gql`
  query PracticesByKeyword($start: Int, $limit: Int, $sort: String, $tag: [String], $keyword: [String]) {
    practicesByKeyword (start: $start, limit: $limit, tags: $tag, sort: $sort, keyword: $keyword) {
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
      curated
    }
    practicesConnection {
      aggregate {
        totalCount
      }
    }
  }
`;

export default GET_PRACTICES_BY_KEYWORD;
