import React from "react";
import { Link as RouterLink } from "gatsby";
import {
  Divider,
  ListItem,
  ListItemText,
  ListSubheader,
  List,
  Typography,
  Collapse,
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
export function TopListItems(props) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  
  const { toggle } = props;
  
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
        to={`${window.location.origin}/admin/#/collections/practice/entries/new`}
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
      <ListItem button onClick={handleClick}>
        <ListItemText>
          <Typography variant="body2">
            Contributing
          </Typography>
        </ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div">
          <ListItemLink to="/page/contribution-guide" primary="Contribution Guide" data-testid="ContributionGuide" />
          <ListItemLink to="/page/cms" primary="Using the CMS" />
          <ListItemLink to="/page/editorial" primary="Editorial Flow" />
        </List>
      </Collapse>
    </List>
  );
}
