import React from "react";
import { Link as RouterLink } from "gatsby";
import { motion } from "framer-motion";
import {
  Divider,
  ListItem,
  ListSubheader,
  List,
  Typography,
} from "@material-ui/core";
import Logo from "../../../components/shared/Logo";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -1 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

function ListItemLink({ primary, to }) {
  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );
  return (
    <ListItem button component={renderLink}>
      <Typography variant="body1">{primary}</Typography>
    </ListItem>
  );
}
const ListItems = () => {
  return (
    <List data-testid="drawerPractices">
      <motion.li variants={variants}>
        <Logo small horizontal />
      </motion.li>
      <motion.li variants={variants}>
        <ListSubheader>
          <Typography variant="overline" color="primary">
            Practices
          </Typography>
        </ListSubheader>
      </motion.li>
      <motion.li variants={variants}>
        <ListItemLink to="/" primary="View Library" />
      </motion.li>
      <motion.li variants={variants}>
        <ListItemLink
          to="/learn"
          primary="Learn More"
          data-testid="SeeEverything"
        />
      </motion.li>
      <motion.li variants={variants}>
        <ListItemLink
          to={`${typeof window !== 'undefined' && window.location.origin}/admin/#/collections/practice/entries/new`}
          primary="Add a Practice"
        />
      </motion.li>
      <motion.li variants={variants}>
        <Divider />
      </motion.li>
      <motion.li variants={variants}>
        <ListSubheader>
          <Typography variant="overline" color="primary">
            Community
          </Typography>
        </ListSubheader>
      </motion.li>
      <motion.li variants={variants}>
        <ListItemLink to="/about" primary="About Us" data-testid="LearnAboutUs" />
      </motion.li>
      <motion.li variants={variants}>
        <ListItemLink to="/blog" primary="Blog" />
      </motion.li>
      <motion.li variants={variants}>
        <ListItemLink to="/page/contribution-guide" primary="Contributing" />
      </motion.li>
    </List>
  );
};

export default ListItems;
