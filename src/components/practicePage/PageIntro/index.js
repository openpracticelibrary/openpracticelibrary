import React from "react";
import ContributedBy from "./ContributedBy";
import Collection from "../../shared/Collection";
import { Button, Box, Container, Grid, Typography } from "@mui/material";
import mobiusContent from "../../../utilities/mobuisContent";
import { navigate } from "gatsby";

function fixMobiusTag(mobiusTag) {
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
  practiceId, 
  mobiusTag,
  title,
  subtitle,
  authors,
  date,
  updatedAt,
  preview,
  upvotes,
  imgCount,
  questions,
}) => {  
  // FIX: Removed default "discovery" fallback - mobiusTag is now nullable
  // This ensures practices must explicitly define their Mobius tag
  const fixedMobiusTag = mobiusTag ? fixMobiusTag(mobiusTag) : null;
  const mobiusTagLower = mobiusTag ? mobiusTag.toLowerCase() : null;
  const mobiusInfo = mobiusTagLower ? mobiusContent[mobiusTagLower] : null;
  
  // FIX: Use sx instead of custom color prop - MUI does not recognize custom colors as valid color values
  // FIX: Added fallback values ​​in case the theme is not loaded correctly (e.g. in CMS preview)
  const getButtonSx = (tag) => {
    // FIX: No default fallback - if tag is invalid, return neutral gray
    const colorMap = {
      "foundation": { palette: "mobiusFoundation", fallback: "#a54ccf" },
      "discover": { palette: "mobiusDiscover", fallback: "#00a6e7" },
      "decide": { palette: "mobiusDecide", fallback: "#ec6624" },
      "deliver": { palette: "mobiusDeliver", fallback: "#76b82a" }
    };
    
    const config = colorMap[tag] || { palette: null, fallback: "#9e9e9e" };
    
    return (theme) => {
      const paletteColor = config.palette ? theme.palette?.[config.palette] : null;
      
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
          {/* FIX: Conditional rendering - show Mobius button or neutral preview button */}
          {/* This allows CMS preview to display even when mobiusTag is not yet selected */}
          {mobiusTag ? (
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
          ) : (
            // FIX: Neutral gray button when mobiusTag is missing
            // Shows "PREVIEW" in preview mode or "SELECT TAG" in production
            <Button
              sx={{
                backgroundColor: '#9e9e9e',
                color: "#fff",
                '&:hover': {
                  backgroundColor: '#757575',
                }
              }}
              disableElevation
              fullWidth
              disabled={!preview}
              size="small"
              variant="contained"
            >
              {preview ? "PREVIEW" : "SELECT TAG"}
            </Button>
          )}
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