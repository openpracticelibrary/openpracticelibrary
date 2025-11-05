import React from "react";
import ContributedBy from "./ContributedBy";
import Collection from "../../shared/Collection";
import { Button, Box, Container, Grid, Typography } from "@mui/material";
import mobiusContent from "../../../utilities/mobuisContent";
import { navigate } from "gatsby";

function fixMobiusTag(mobiusTag) {
  // FIX: Added check for undefined
  if (!mobiusTag) {
    return "discover";
  }
  
  const mobiusTagLowerCase = mobiusTag.toLowerCase();
  switch (mobiusTagLowerCase) {
    case "discovery":
      return "discover"
    case "options":
      return "decide"
    case "delivery":
      return "deliver"
    default:
      return mobiusTagLowerCase;
  }
}

const PageIntro = ({
  title,
  allTags,
  subtitle,
  authors,
  createdAt,
  updatedAt,
  practiceId,
  upvotes,
  imgCount,
  questions,
  date,
  preview,
  mobiusTag,
}) => {
  // FIX: Secured values
  const safeMobiusTag = mobiusTag || "discovery";
  const fixedMobiusTag = fixMobiusTag(safeMobiusTag);
  const mobiusTagLower = safeMobiusTag.toLowerCase();
  const mobiusInfo = mobiusContent[mobiusTagLower] || mobiusContent["discovery"];
  
  // FIX: Use sx instead of custom color prop - MUI does not recognize custom colors as valid color values
  // FIX: Added fallback values ​​in case the theme is not loaded correctly (e.g. in CMS preview)
  const getButtonSx = (tag) => {
    const colorMap = {
      "foundation": { palette: "mobiusFoundation", fallback: "#a54ccf" },
      "discover": { palette: "mobiusDiscover", fallback: "#00a6e7" },
      "decide": { palette: "mobiusDecide", fallback: "#ec6624" },
      "deliver": { palette: "mobiusDeliver", fallback: "#76b82a" }
    };
    
    const config = colorMap[tag] || { palette: "mobiusDiscover", fallback: "#00a6e7" };
    
    return (theme) => {
      const paletteColor = theme.palette?.[config.palette];
      
      return {
        backgroundColor: paletteColor?.main || config.fallback,
        color: "#fff",
        '&:hover': {
          backgroundColor: paletteColor?.dark || config.fallback,
        }
      };
    };
  };
  
  return (
    <Container maxWidth="md">
      <Box display="flex" flexDirection="column" marginTop={3}>
        <Typography variant="h2" data-testid="title">
          {title}
        </Typography>
        <Typography variant="h5" data-testid={"subtitle"}>
          {subtitle}
        </Typography>
      </Box>
      <Grid container spacing={1} justifyContent="left">
        <Grid item xs={6} md={2}>
          <Button
            sx={getButtonSx(fixedMobiusTag)}
            disableElevation
            fullWidth
            data-testid={fixedMobiusTag + "-button"}
            onClick={() => navigate("/tags/" + mobiusTagLower)}
            size="small"
            startIcon={mobiusInfo?.icon}
            variant="contained"
          >
            {fixedMobiusTag.toUpperCase()}
          </Button>
        </Grid>
      </Grid>
      <ContributedBy
        authors={authors}
        createdAt={date}
        updatedAt={updatedAt}
        preview={preview}
      />
      <Collection
        spacing={2}
        practiceId={practiceId}
        upvotes={upvotes}
        imgCount={imgCount}
        questions={questions}
        alignment={2}
      >
        <Typography variant="overline">Collection</Typography>
      </Collection>
    </Container>
  );
};

export default PageIntro;