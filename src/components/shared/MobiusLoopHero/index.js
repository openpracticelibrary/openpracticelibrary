import React from "react";
import { navigate } from "gatsby";
import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
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
    <Container>
      <Box
        maxWidth={{ xs: "100%", sm: "80%", md: "70%" }}
        mx="auto"
        marginTop={2}
        marginBottom={4}
      >
        <Box
          display="flex"
          alignItems="center"
          marginBottom={2}
          justifyContent="center"
        >
          <Box
            color={
              section === "discovery" || section === "all"
                ? "secondary.main"
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
              fontSize={{ xs: ".75rem", sm: "1rem", md: "1.25rem" }}
            >
              <Typography color="inherit" variant="inherit">
                Discovery
              </Typography>
            </Box>
            <DiscoveryGraphic />
          </Box>
          <Box
            color={
              section === "options" || section === "all"
                ? "error.main"
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
              fontSize={{ xs: ".75rem", sm: "1rem", md: "1.25rem" }}
            >
              <Typography variant="inherit">Options</Typography>
            </Box>
            <OptionsGraphic />
          </Box>
          <Box
            color={
              section === "delivery" || section === "all"
                ? "warning.main"
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
              fontSize={{ xs: ".75rem", sm: "1rem", md: "1.25rem" }}
            >
              <Typography variant="inherit">Delivery</Typography>
            </Box>
            <DeliveryGraphic />
          </Box>
        </Box>
        <Box
          color={
            section === "foundation" || section === "all"
              ? "primary.main"
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
          fontSize={{ xs: ".75rem", sm: "1rem", md: "1.25rem" }}
        >
          <FoundationGraphic />
          <Typography align="center" color="inherit" variant="inherit">
            Foundation
          </Typography>
        </Box>
      </Box>
      {showContent ? (
        <Box maxWidth={{ xs: "100%", sm: "80%", md: "70%" }} mx="auto">
          <Card>
            <CardContent data-testid={`mobius-display-${section}`}>
              {sectionContent(section)}
            </CardContent>
          </Card>
        </Box>
      ) : null}
    </Container>
  );
};

export default MobiusLoopHero;
