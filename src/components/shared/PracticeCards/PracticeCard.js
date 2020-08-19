import React from "react";
import { navigate } from "gatsby";
import {
  Chip,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Box,
  Grid,
  Typography,
} from "@material-ui/core";
import { CameraAlt } from "@material-ui/icons";

const coloration = (mobiusSection) => {
  let coloration;
  switch (mobiusSection) {
    case "foundation":
      coloration = "primary.dark";
      break;
    case "discovery":
      coloration = "secondary.main";
      break;
    case "options":
      coloration = "error.main";
      break;
    case "delivery":
      coloration = "warning.main";
      break;
    default:
      coloration = "grey.800";
  }
  return coloration;
};

const PracticeCard = ({
  coverImage,
  mediaGallery,
  mobiusTag,
  practiceId,
  practiceTitle,
  slug,
  subtitle,
  tags,
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <Grid item data-testid={practiceId} xs={12} sm={6} md={4}>
      <Box
        component="span"
        display="flex"
        color="common.white"
        alignItems="center"
        position="absolute"
        p={1}
        style={{
          borderTopLeftRadius: "0.25rem",
          borderBottomRightRadius: "0.25rem",
          backgroundImage: `linear-gradient(
        rgba(0, 0, 0, ${0.6}),
        rgba(0, 0, 0, ${0.6})
      )`,
        }}
      >
        <CameraAlt fontSize="small" /> <Box marginLeft={1}>{mediaGallery}</Box>
      </Box>
      <Card
        role="button"
        onClick={() => {
          navigate(slug);
        }}
        data-testid="practicecard"
        raised={hovered}
        onMouseOut={() => setHovered(false)}
        onMouseOver={() => setHovered(true)}
        style={{ cursor: "pointer", height: "100%", width: "100%" }}
      >
        <Box borderBottom={6} color={coloration(mobiusTag)}>
          <CardMedia
            classes={{ height: 0, paddingTop: "56.25%" }}
            component="img"
            alt={practiceTitle}
            height="200"
            image={
              coverImage
                ? coverImage
                : "https://github.com/openpracticelibrary/opl-media/blob/master/images/Needs%20an%20Image.png?raw=true"
            }
            title={practiceTitle}
          />
        </Box>
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="h3"
            data-testid="practicetitle"
          >
            {practiceTitle}
          </Typography>
          <Typography component="p" gutterBottom variant="subtitle">
            {subtitle}
          </Typography>
          <CardActions>
            {tags.length !== 0
              ? tags.map((t, i) => (
                  <Chip label={`#${t}`} variant="outlined" size="small" />
                ))
              : null}
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default PracticeCard;
