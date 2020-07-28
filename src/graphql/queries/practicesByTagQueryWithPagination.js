import { gql } from 'apollo-boost';

/*
 * GET_PRACTICES_BY_TAG returns all OPL Practices for a specific Tag name (not ID).
 */
const GET_PRACTICES_BY_TAG_PAGINATION = gql`
  query PracticesByTag($start: Int, $limit: Int, $tag: [String], $sort: String) {
    practices (start: $start, limit: $limit, where: {tags: {tag_in: $tag}}, sort: $sort) {
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

export default GET_PRACTICES_BY_TAG_PAGINATION;
