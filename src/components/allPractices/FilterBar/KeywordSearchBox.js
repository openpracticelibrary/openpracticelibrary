import React from "react";
import SearchIcon from '@material-ui/icons/Search';

import { InputAdornment, IconButton } from '@material-ui/core';
import OplTextField from "../../shared/components/OplTextField";

const KeywordSearchBox = (props) => {
  const searchInputRef = React.useRef();

  const handleSearchClick = () => {
    if (searchInputRef.current.value.includes(",")) {
      const multiWord = searchInputRef.current.value.split(",").map(keyword => keyword.trim());
      props.dispatch({ type: "keywordSearchChange", content: multiWord });
    }

    props.dispatch({ type: "keywordSearchChange", content: searchInputRef.current.value });
  };

  const SearchKeywordButton = () => (
    <InputAdornment position="end">
      <IconButton onClick={handleSearchClick}>
        <SearchIcon />
      </IconButton>
    </InputAdornment>
  );

  return (
    <OplTextField
      variant="outlined"
      minWidth="20rem"
      rounded={6.5}
      inputRef={searchInputRef}
      InputProps={{
        endAdornment: <SearchKeywordButton />
      }}
    />
  );
};

export default KeywordSearchBox;
