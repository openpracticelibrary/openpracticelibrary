import { useQuery } from '@apollo/react-hooks';
import { GET_PRACTICES } from "../graphql";

function usePractices() {
  const {
    data,
    loading,
    fetchMore,
  } = useQuery(GET_PRACTICES,
    {
      variables: {
        start: 0,
        limit: 8
      },
      fetchPolicy: "cache-and-network"
    }
  )

  if (loading && !data) return { loading, practices: [] }
  if (loading && !data.practices) return { loading, practices: [] }

  const loadMore = () => {
    return fetchMore({
      query: GET_PRACTICES,
      variables: {
        start: data.practices.length + 8,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          practices: [...prev.practices, ...fetchMoreResult.practices]
        });
      },
    })
  }

  return {
    practices: data.practices.map((practice) => practice),
    loading,
    loadMore,
  }
}

export default usePractices;

