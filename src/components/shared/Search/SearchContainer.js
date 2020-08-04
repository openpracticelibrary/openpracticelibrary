import React from "react";
import * as JsSearch from "js-search";
import PracticeCardGrid from "../PracticeCards/PracticeCardGrid";
import Grid from "@material-ui/core/Grid";

function ListItem(props) {
  const { item } = props;

  return (
    <tr>
      <td
        style={{
          fontSize: "14px",
          border: "1px solid #d3d3d3",
        }}
      >
        {item.id}
      </td>
      <td
        style={{
          fontSize: "14px",
          border: "1px solid #d3d3d3",
        }}
      >
        {item.frontmatter.title}
      </td>
    </tr>
  );
}

export default function SearchContainer(props) {
  const books = props.practices;

  const [state, setState] = React.useState({
    search: [],
    searchResults: books,
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
          searchResults: books,
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
    dataToSearch.addDocuments(books); // adds the data to be searched
    setState({
      ...state,
      search: dataToSearch,
      isLoading: false,
    });
    console.log(state);
  }, []);

  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <form onSubmit={handleSubmit}>
          <div style={{ margin: "0 auto" }}>
            <input
              id="Search"
              value={state.searchQuery}
              onChange={searchData}
              placeholder="Enter your search here"
              style={{ margin: "0 auto", width: "400px" }}
            />
          </div>
        </form>
        <PracticeCardGrid practices={state.searchResults} />
      </Grid>
    </div>
  );
}
