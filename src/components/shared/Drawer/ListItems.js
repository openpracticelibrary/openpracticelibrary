import React from "react";
import { Link as RouterLink } from "gatsby";
import {
  Divider,
  ListItem,
  ListSubheader,
  List,
  Typography,
} from "@material-ui/core";

function ListItemLink({ primary, to, toggle }) {
  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );
  return (
    <ListItem button component={renderLink} onClick={toggle}>
      <Typography variant="body1">{primary}</Typography>
    </ListItem>
  );
}
const ListItems = ({ toggle }) => {
  return (
    <List data-testid="drawerPractices">
      <ListSubheader>
        <Typography variant="overline" color="primary">
          Practices
        </Typography>
      </ListSubheader>
      <ListItemLink to="/" primary="View Library" toggle={toggle} />
      <ListItemLink
        to="/learn"
        primary="Learn More"
        toggle={toggle}
        data-testid="SeeEverything"
      />
      <ListItemLink
        to={`${window.location.origin}/admin/#/collections/practice/new`}
        primary="Add a Practice"
        toggle={toggle}
      />
      <Divider />
      <ListSubheader>
        <Typography variant="overline" color="primary">
          Community
        </Typography>
      </ListSubheader>
      <ListItemLink to="/about" primary="About Us" data-testid="LearnAboutUs" />
      <ListItemLink to="/blog" primary="Blog" />
      <ListItemLink to="/page/contribution-guide" primary="Contributing" />
    </List>
  );
};

export default ListItems;
