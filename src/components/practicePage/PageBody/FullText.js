import React from "react";
import { Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";

const Image = (props) => (
  <img {...props} style={{ maxWidth: "100%" }} alt="Embedded Content" />
);

const FullText = ({ source }) => {
  return (
    <Typography component={"div"}>
      <ReactMarkdown components={{ img: Image }}>{source}</ReactMarkdown>
    </Typography>
  );
};
export default FullText;
