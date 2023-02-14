import React from "react";
import { Typography } from "@material-ui/core";
import ReactMarkdown from "react-markdown";

const Image = (props) => (
  <img {...props} style={{ maxWidth: "100%" }} alt="Embedded Content" />
);

const FullText = ({ source }) => {
  return (
    <Typography>
      <ReactMarkdown components={{ img: Image }}>{source}</ReactMarkdown>
    </Typography>
  );
};
export default FullText;
