import React from "react";
import { Typography, Box, Button } from "@material-ui/core";
import ResourceAddLink from "./ResourceAddLink";
import ResourceListItem from "./ResourceListItem";
import { makeStyles } from "@material-ui/core/styles/index";
import { DownloadIcon, PodcastIcon, WebLinkIcon } from "../../../assets/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  space: {
    padding: theme.spacing(1),
  },
  indent: {
    marginLeft: theme.spacing(4),
  },
}));

//todo: (@Darcie) icons for video, purchase, books
//todo: review the structure of the resource.description

const Icon = {
  web: <WebLinkIcon />,
  download: <DownloadIcon />,
  podcast: <PodcastIcon />,
  video: <PodcastIcon />,
  purchase: <WebLinkIcon />,
  book: <WebLinkIcon />,
};

export default function ResourcesWeLove(props) {
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();
  const linkTypes = Object.keys(Icon);

  const resourceLinkList = () => {
    const resourceList = props.links.filter(resource => resource.link.length > 0);
    const listLength = resourceList.length;
    let initialLinkList = [];
    let expandedLinkList = [];
    let expandedListLength = 0;
    if (listLength > 5) {
      initialLinkList = resourceList.slice(0, 5);
      expandedLinkList = resourceList;
      expandedListLength = listLength - 5;
    } else {
      initialLinkList = resourceList;
    }

    if (expanded) {
      return (
        <React.Fragment>
          {expandedLinkList.map((resource, i) => (
            <ResourceListItem
              key={i}
              listItemKey={i}
              url={resource.link}
              description={resource.description}
            >
              {Icon[resource.linkType]}
            </ResourceListItem>
          ))}
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        {initialLinkList.map((resource, i) => (
          <ResourceListItem
            key={i}
            listItemKey={i}
            url={resource.link}
            description={resource.description}
          >
            {Icon[resource.linkType]}
          </ResourceListItem>
        ))}
        {(resourceList.length > 5 && !expanded) &&
          <Button>
            <Typography variant={"overline"} onClick={handleExpand}>
              See {expandedListLength} more links
            </Typography>
          </Button>
        }
      </React.Fragment>
    );
  };


  const handleExpand = () => {
    setExpanded(true);
  };

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.space}>
          <Typography variant={"h4"} ref={props.resourceRef}>
            <b>Links we love</b>
          </Typography>
          <Typography>
            Check out these great links which can help you dive a little deeper into running an event storming workshop with your team, customers or stakeholders.
          </Typography>
        </Box>

        <Box className={classes.indent}>
          {resourceLinkList()}
          <ResourceAddLink practiceId={props.practiceId} prevResources={props.links} linkTypes={linkTypes}>
          </ResourceAddLink>
        </Box>
      </Box>
    </>
  );
}
