import React from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button, Menu, MenuItem, Typography } from "@material-ui/core";

export default function PopularFilter(props) {
  const { selectedItem, handleFilterChange, menuItems } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (menuList) => {
    handleFilterChange({ type: 'popularFilterChange', content: menuList});
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="styled-menu"
        aria-haspopup="true"
        data-testid="popularFilterButton"
        onClick={handleClick}
      >
        <Typography variant="overline">
          {selectedItem}
        </Typography>
        {anchorEl ? <ExpandLessIcon color="primary" /> : <ExpandMoreIcon color="primary" />}
      </Button>
      <Menu
        id="styled-menu"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        data-testid="popularFilterMenu"
      >
        {menuItems.map((menuList) => (
          <MenuItem
            key={menuList}
            selected={menuList === selectedItem}
            onClick={() => handleMenuItemClick(menuList)}
            data-testid={menuList}
          >
            <Typography variant={"button"}>{menuList}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
