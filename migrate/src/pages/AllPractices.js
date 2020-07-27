// import React from "react";
// import { useQuery } from "@apollo/react-hooks";
// import { GET_PRACTICES_BY_KEYWORD } from "../graphql";
// import PracticeCardGrid from "../components/shared/PracticeCards/PracticeCardGrid";
// import Practices from "../components/allPractices";
// import ComponentLoading from "../components/shared/QueryState/ComponentLoading";
// import QueryError from "../components/shared/QueryState/QueryError";
// import {
  // filterTags,
  // mobiusLoopArray,
  // popularMenuItems,
  // formTagArray,
// } from "../utilities/dropDownValues";

// const paginationLimit = 20;

// function reducer(state, action) {
  // switch (action.type) {
  // case "popularFilterChange":
    // state.selectedPopularFilter = action.content;
    // return state;
  // case "tagFilterChange":
    // state.selectedFilterTag = action.content;
    // state.tagArray = formTagArray(state.selectedFilterTag, state.selectedMobiusLoopFilter);
    // return state;
  // case "mobiusFilterChange":
    // state.selectedMobiusLoopFilter = action.content;
    // state.tagArray = formTagArray(state.selectedFilterTag, state.selectedMobiusLoopFilter);
    // return state;
  // case "keywordSearchChange":
    // state.keywords = action.content;
    // return state;
  // default:
    // throw new Error();
  // }
// };

// const PracticesWithData = (props) => {
  // const [page, setPage] = React.useState(paginationLimit);
  // const [keywordSearchToggle, setKeywordSearchToggle] = React.useState(false);

  // const [state, dispatch] = React.useReducer(reducer, {}, () => {
    // return {
      // tagArray: [],
      // selectedFilterTag: filterTags[0],
      // selectedMobiusLoopFilter: mobiusLoopArray[0],
      // selectedPopularFilter: Object.keys(popularMenuItems)[0],
      // keywords: []
    // }
  // });

  // const handleFilterChange = (dispatchObj) => {
    // dispatch(dispatchObj);
    // refetch({
      // variables: {
        // start: 0,
        // limit: paginationLimit,
        // tag: state.tagArray,
        // sort: popularMenuItems[state.selectedPopularFilter],
        // keyword: state.keywords
      // },
    // });
    // setPage(paginationLimit);
  // };

  // const toggleKeywordSearch = () => setKeywordSearchToggle(!keywordSearchToggle);

  // const dataProps = {
    // selectedPopularFilter: state.selectedPopularFilter,
    // popularMenuItems,
    // filterTags,
    // selectedFilterTag: state.selectedFilterTag,
    // keywordSearchToggle,
    // mobiusLoopArray,
    // selectedMobiusLoopFilter: state.selectedMobiusLoopFilter,
    // handleFilterChange,
    // toggleKeywordSearch,
  // };

  // const { loading, error, data, refetch, networkStatus, fetchMore } = useQuery(
    // GET_PRACTICES_BY_KEYWORD,
    // {
      // variables: {
        // start: 0,
        // limit: paginationLimit,
        // tag: state.tagArray,
        // sort: popularMenuItems[state.selectedPopularFilter],
        // keyword: state.keywords
      // },
      // fetchPolicy: "cache-and-network",
      // notifyOnNetworkStatusChange: true,
    // }
  // );

  // const onLoadMore = (page) => {
    // const newPage = page + paginationLimit;
    // if (newPage < data.practicesConnection.aggregate.totalCount + paginationLimit) {
      // fetchMore({
        // variables: {
          // start: newPage,
          // tag: state.tagArray,
          // sort: popularMenuItems[state.selectedPopularFilter],
          // keyword: state.keywords
        // },
        // updateQuery: (prev, { fetchMoreResult }) => {
          // if (!fetchMoreResult) return prev;
          // return Object.assign({}, prev, {
            // practicesByKeyword: [...prev.practicesByKeyword, ...fetchMoreResult.practicesByKeyword],
          // });
        // },
      // });
      // setPage(newPage);
    // }
    // return;
  // };

  // if (error) return <QueryError err={error} />;

  // return (
    // <Practices {...props} {...dataProps}>
      // { (loading && !data) || (networkStatus === 4) ? <ComponentLoading /> :
        // <PracticeCardGrid
          // loading={loading}
          // practices={data.practicesByKeyword}
          // page={page}
          // onLoadMore={onLoadMore}
        // />}
    // </Practices>
  // );
// };

// export default PracticesWithData;
