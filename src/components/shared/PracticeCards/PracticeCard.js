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

//TODO: When Mobius is refactored, extract this into it's own hook/function
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
