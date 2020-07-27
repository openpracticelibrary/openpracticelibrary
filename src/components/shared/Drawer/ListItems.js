import React from "react";
import { Link as RouterLink } from "@reach/router";

import { ListItem, ListSubheader, List, Typography } from "@material-ui/core";

function ListItemLink(props) {
  const { primary, to, toggle } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink} onClick={toggle}>
        <Typography variant="body2">{primary}</Typography>
      </ListItem>
    </li>
  );
}

export function TopListItems(props) {
  const { toggle } = props;
  return (
    <List data-testid="drawerPractices">
      <ListSubheader>
        <Typography variant="overline" color="primary">
          Practices
        </Typography>
      </ListSubheader>
      <ListItemLink
        to="/learn"
        primary="Learn More"
        toggle={toggle}
        data-testid="SeeEverything"
      />
      <ListItemLink to="/" primary="View Library" toggle={toggle} />
    </List>
  );
}

export function BottomListItems() {
  return (
    <List data-testid="drawerCommunity">
      <ListSubheader>
        <Typography variant="overline" color="primary">
          Community
        </Typography>
      </ListSubheader>
      <ListItemLink to="/about" primary="About Us" data-testid="LearnAboutUs" />
    </List>
  );
}
