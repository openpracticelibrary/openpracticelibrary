import React from "react";
import { navigate } from "gatsby";
import { Box, Card, CardContent, Link, Typography } from "@mui/material";
import MobiusDescription from "./MobiusDescription";
import FoundationGraphic from "./FoundationGraphic";
import FoundationDescription from "./FoundationDescription";
import DiscoveryGraphic from "./DiscoveryGraphic";
import DiscoveryDescription from "./DiscoveryDescription";
import DeliveryGraphic from "./DeliveryGraphic";
import DeliveryDescription from "./DeliveryDescription";
import OptionsGraphic from "./OptionsGraphic";
import OptionsDescription from "./OptionsDescription";

const sectionContent = (status) => {
  let content;
  switch (status) {
    case "foundation":
      content = <FoundationDescription />;
      break;
    case "discovery":
      content = <DiscoveryDescription />;
      break;
    case "options":
      content = <OptionsDescription />;
      break;
    case "delivery":
      content = <DeliveryDescription />;
      break;
    default:
      content = <MobiusDescription />;
  }
  return content;
};

const MobiusLoopHero = ({ showContent = true, displaySection = "all" }) => {
  const section = displaySection.toLocaleLowerCase();
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection={{ xs: "column", md: "row" }}
    >
      <Box width={1}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box
            color={
              section === "discovery" || section === "all"
                ? "mobiusDiscover.main"
                : "grey.400"
            }
            role="button"
            onClick={() => {
              navigate("/tags/discovery");
            }}
            marginRight={1}
            position="relative"
            style={{ cursor: "pointer" }}
            width={1 / 4}
          >
            <Box
              position="absolute"
              style={{
                position: "absolute",
                left: "60%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
              fontSize={{ xs: ".75rem", sm: "1rem", md: "1.125" }}
            >
              <Typography color="inherit" variant="inherit">
                Discover
              </Typography>
            </Box>
            <DiscoveryGraphic />
          </Box>
          <Box
            color={
              section === "options" || section === "all"
                ? "mobiusDecide.main"
                : "grey.400"
            }
            onClick={() => {
              navigate("/tags/options");
            }}
            position="relative"
            role="button"
            style={{ cursor: "pointer" }}
            width="44%"
          >
            <Box
              position="absolute"
              bottom="10%"
              style={{
                left: "50%",
                transform: "translate(-50%, 0)",
              }}
              fontSize={{ xs: ".75rem", sm: "1rem", md: "1.125" }}
            >
              <Typography variant="inherit">
                Decide
              </Typography>
            </Box>
            <OptionsGraphic />
          </Box>
          <Box
            color={
              section === "delivery" || section === "all"
                ? "mobiusDeliver.main"
                : "grey.400"
            }
            marginLeft={1}
            onClick={() => {
              navigate("/tags/delivery");
            }}
            position="relative"
            role="button"
            style={{ cursor: "pointer" }}
            width={1 / 4}
          >
            <Box
              style={{
                position: "absolute",
                left: "40%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
              fontSize={{ xs: ".75rem", sm: "1rem", md: "1.125" }}
            >
              <Typography variant="inherit">
                Deliver
              </Typography>
            </Box>
            <DeliveryGraphic />
          </Box>
        </Box>
        <Box
          color={
            section === "foundation" || section === "all"
              ? "mobiusFoundation.main"
              : "grey.400"
          }
          margin="auto"
          maxWidth="95%"
          onClick={() => {
            navigate("/tags/foundation");
          }}
          position="relative"
          role="button"
          style={{ cursor: "pointer", textAlign: "center" }}
          fontSize={{ xs: ".75rem", sm: "1rem", md: "1.125" }}
        >
          <FoundationGraphic />
          <Typography color="inherit" variant="inherit">
            Foundation
          </Typography>
        </Box>
      </Box>
      {showContent ? (
        <Box width={{ xs: 1, md: 1 / 2 }} marginLeft={{ xs: 0, md: 3 }}>
          <Card>
            <CardContent data-testid={`mobius-display-${section}`}>
              {sectionContent(section)}
            </CardContent>
          </Card>
          <Box display="flex" justifyContent="center" fontSize=".625rem">
            <Typography
              align="right"
              color="grey"
              gutterBottom
              variant="inherit"
            >
              <Link
                color="secondary"
                href="http://mobiusloop.com"
                rel="noopener"
                target="_blank"
              >
                “Mobius Loop”
              </Link>{" "}
              is licensed under{" "}
              <Link
                color="secondary"
                href="https://creativecommons.org/licenses/by-sa/4.0/"
                rel="noopener"
                target="blank"
              >
                CC BY-SA 4.0.
              </Link>
            </Typography>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

export default MobiusLoopHero;
