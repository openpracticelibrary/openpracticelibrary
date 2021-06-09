import React, { useReducer } from "react";
import { Drawer, Fab, Hidden, Box } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import ListItems from "./ListItems";
import DrawerFooter from "./DrawerFooter";
import Logo from "../../../components/shared/Logo";

const OPLDrawer = () => {
  const [open, toggle] = useReducer((drawerOpen) => !drawerOpen, false);
  return (
    <>
      <Hidden smDown implementation="js">
        <Drawer
          variant="permanent"
          data-testid="drawer"
          PaperProps={{ elevation: 5 }}
          open={open}
        >
          <Box
            positon="relative"
            height="100vh"
            display="flex"
            flexDirection="column"
          >
            <Box
              position={open ? "absolute" : "relative"}
              padding={1}
              top={0}
              right={0}
              zIndex="drawer"
            >
              <Fab
                color="primary"
                disableFocusRipple
                data-testid="drawerActions"
                onClick={toggle}
              >
                {!open ? <MenuIcon /> : <CloseIcon />}
              </Fab>
            </Box>
            {open && (
              <>
                <ListItems drawerOpen={open} toggle={toggle} />
                <DrawerFooter />
              </>
            )}
          </Box>
        </Drawer>
      </Hidden>

      <Hidden mdUp>
        <Box position="fixed" bottom={0} m={1} zIndex="drawer">
          <Fab
            edge={false}
            onClick={toggle}
            disableFocusRipple
            data-testid="drawerActions"
            color="primary"
          >
            <MenuIcon color="" />
          </Fab>
        </Box>
        <Drawer
          variant="temporary"
          data-testid="drawer"
          open={open}
          transitionDuration={200}
        >
          <Box
            height="100vh"
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                paddingTop={2}
              >
                <Logo small horizontal />
              </Box>
              <ListItems drawerOpen={open} toggle={toggle} />
            </Box>
            <Box marginBottom={4}>
              <DrawerFooter />
            </Box>
            <Box position="absolute" bottom={0} right={0} m={1}>
              <Fab
                onClick={toggle}
                disableFocusRipple
                data-testid="drawerActions"
                color="primary"
              >
                <CloseIcon />
              </Fab>
            </Box>
          </Box>
        </Drawer>
      </Hidden>
    </>
  );
};
export default OPLDrawer;
