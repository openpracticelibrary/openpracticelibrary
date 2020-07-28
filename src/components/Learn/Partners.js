import React from "react";
import { Typography } from "@material-ui/core";
import OplTooltip from "../shared/components/OplTooltip";
import OplImage from "../shared/components/OplImage";

const Partners = props => {
  const title = (
    <>
      <Typography variant={"h6"}>
        <b>{props.name}</b>
      </Typography>
      <Typography variant={"subtitle2"}>{props.text}</Typography>
    </>
  );

  return (
    <OplTooltip title={title} placement="bottom" minH="50px">
      <OplImage
        src={props.logo}
        alt="Red Hat"
        width={134}
        height={72}
        objectFit="contain"
        mt={3}
        mb={12}
        mx={4}
      />
    </OplTooltip>
  );
};

export default Partners;
