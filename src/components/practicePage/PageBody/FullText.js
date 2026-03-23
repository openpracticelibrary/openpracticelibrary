import React from "react";
import { Typography, Box } from "@mui/material";
import ReactMarkdown from "react-markdown";

const Image = (props) => (
  <img {...props} style={{ maxWidth: "100%" }} alt="Embedded Content" />
);

const FullText = ({ source }) => {
  return (
    <Typography component="div">
      <ReactMarkdown
        components={{
          img: Image,
          pre: ({ children }) => (
            <Box
              sx={{
                overflowX: "auto",
                overflowY: "hidden",
                marginY: 3,
                padding: 2,
                borderRadius: 2,
                whiteSpace: "pre",
                bgcolor: "rgba(0,0,0,0.05)",
                boxShadow: "inset -12px 0 13px -17px rgba(0,0,0,0.3)",
              }}
            >
              {/* 
      `children` here represents the content of the <pre> element,
      which ReactMarkdown generates from Markdown code blocks
      (the parts wrapped in triple backticks ```). 
      Wrapping children in this Box allows us to style and scroll
      only the code block, without affecting other Markdown content.
      */}
              {children}
            </Box>
          ),
        }}
      >
        {source}
      </ReactMarkdown>
    </Typography>
  );
};

export default FullText;