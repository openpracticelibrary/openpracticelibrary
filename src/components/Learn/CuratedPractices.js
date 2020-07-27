import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { navigate } from "@reach/router";
import { useQuery } from "@apollo/react-hooks";

import ComponentLoading from "../shared/QueryState/ComponentLoading";
import ComponentQueryError from "../shared/QueryState/ComponentQueryError";
import { GET_CURATED_PRACTICES } from "../../graphql";
import PracticeCardGrid from "../shared/PracticeCards/PracticeCardGrid";
import { Button, Typography, Box } from "@material-ui/core";

const CuratedPractices = props => {
  const { loading, error, data } = useQuery(GET_CURATED_PRACTICES, {
    variables: { sort: "upvotes:desc" }
  });
  if (error) return <ComponentQueryError err={error} />;

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        pb={12}
        data-testid="curatedList"
      >
        <Typography variant="h4">Popular Practices</Typography>
        <Button
          variant="outlined"
          color="primary"
          endIcon={<ArrowForwardIcon />}
          onClick={() => navigate("/")}
        >
          Explore Practices
        </Button>
      </Box>
      {loading ? (
        <ComponentLoading />
      ) : (
        <PracticeCardGrid practices={data.practices} />
      )}
    </>
  );
};

export default CuratedPractices;
