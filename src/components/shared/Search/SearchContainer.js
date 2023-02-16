/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import * as JsSearch from "js-search";
import PracticeCardGrid from "../PracticeCards/PracticeCardGrid";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function SearchContainer(props) {
  const practiceData = props.practices;

  const [state, setState] = React.useState({
    search: [],
    searchResults: practiceData,
    isLoading: true,
    isError: false,
    searchQuery: "",
  });

  const searchData = (e) => {
    const { search } = state;
    const queryResult = search.search(e.target.value);
    e.target.value === ""
      ? setState({
          ...state,
          searchQuery: e.target.value,
          searchResults: practiceData,
        })
      : setState({
          ...state,
          searchQuery: e.target.value,
          searchResults: queryResult,
        });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    const dataToSearch = new JsSearch.Search(["node", "id"]);
    dataToSearch.addIndex(["node", "frontmatter", "title"]); // sets the index attribute for the data
    dataToSearch.addDocuments(practiceData); // adds the data to be searched
    setState({
      ...state,
      search: dataToSearch,
      isLoading: false,
    });
  }, []);

  return (
    <>
      <Box mx="auto" width={{ xs: 1, sm: "60%" }}>
        <form onSubmit={handleSubmit}>
          <TextField
            id="Search"
            variant="outlined"
            value={state.searchQuery}
            onChange={searchData}
            data-testid="searchTextField"
            placeholder="Know the name of the practice?"
            disabled={state.isLoading}
            fullWidth
            size="small"
          />
        </form>
      </Box>
      <Box my={4}>
        <PracticeCardGrid practices={state.searchResults} />
      </Box>
    </>
  );
}
