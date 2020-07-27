import React from "react";
import { makeStyles } from "@material-ui/core/styles/index";
import { Button } from "@material-ui/core";
import OplTypography from "../../shared/components/OplTypography";
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles((theme) => ({
  flipActive: {
    transform: "rotate(180deg)",
  },
}));

const KeywordSearchToggle = (props) => {
  const classes = useStyles();
  const { toggle, keywordSearchToggle } = props;

  return (
    <Button data-testid="keywordSearchToggle" onClick={toggle}>
      <OplTypography variant={"overline"} pr={1}>Filters</OplTypography>
      {keywordSearchToggle ?
        <FilterListIcon color="primary" className={classes.flipActive} fontSize="small" />
        :
        <FilterListIcon color="primary" fontSize="small" />
      }
    </Button>
  );
};

export default KeywordSearchToggle;
