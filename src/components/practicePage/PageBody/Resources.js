import React from "react";
import { Typography, Box, Button } from "@material-ui/core";
import ResourceListItem from "./ResourceListItem";
import {
  Link,
  Mic,
  CloudDownload,
  OndemandVideo,
  Store,
  MenuBook,
} from "@material-ui/icons";

const Icon = {
  web: <Link />,
  download: <CloudDownload />,
  podcast: <Mic />,
  video: <OndemandVideo />,
  purchase: <Store />,
  book: <MenuBook />,
};

export default function ResourcesWeLove(props) {
  const [expanded, setExpanded] = React.useState(false);
  const resourceLinkList = () => {
    if (Object.keys(props.links[0]).length !== 0) {
      const resourceList = props.links.filter(
        (resource) => (resource.link != null) ? (resource.link.length > 0) : false
      );
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
          <Box>
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
          </Box>
        );
      }

      return (
        <>
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
          {resourceList.length > 5 && !expanded && (
            <Button>
              <Typography variant={"overline"} onClick={handleExpand}>
                See {expandedListLength} more links
              </Typography>
            </Button>
          )}
        </>
      );
    }
  };

  const handleExpand = () => {
    setExpanded(true);
  };

  return (
    <Box>
      <Typography>
        Check out these great links which can help you dive a little deeper into
        running the {props.practiceTitle} practice with your team, customers or
        stakeholders.
      </Typography>

      <Box marginLeft={2} my={2}>
        {resourceLinkList()}
      </Box>
    </Box>
  );
}
