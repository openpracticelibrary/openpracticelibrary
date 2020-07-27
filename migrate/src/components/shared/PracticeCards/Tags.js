import React from "react";
import { Box } from "@material-ui/core";
import OplTypography from "../components/OplTypography";

const TagContainer = ({ children }) => (
  <Box
    id="tags"
    display="flex"
    flexDirection="row"
    justifyContent="flex-start"
    mx={-1}
    pt={3}
    flexWrap="wrap"
    width={300}
  >
    {children}
  </Box>
);

const TagBox = ({ children }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      width="fit-content"
      borderRadius={5}
      bgcolor="grey.200"
      ml={1}
      my={0.5}
      px={0.5}
      height={20}
    >
      {children}
    </Box>
  )
};

const Tags = (props) => {
  const tagsLength = props.tags.length;
  let initialTags = props.tags;
  if (tagsLength > 3) {
    initialTags = initialTags.slice(0, 3);
    const extraTags = props.tags.slice(3, props.tags.length);
    if (props.isHovered) {
      return (
        <TagContainer>
          {initialTags.map((t, i) => (
            <TagBox key={i}>
              <OplTypography variant={"overline"}>
              #{t.tag}&nbsp;
              </OplTypography>
            </TagBox>
          ))}
          {extraTags.map((t, i) => (
            <TagBox key={i}>
              <OplTypography variant={"overline"}>
              #{t.tag}&nbsp;
              </OplTypography>
            </TagBox>
          ))}
        </TagContainer>
      );
    }
  }

  return (
    <TagContainer>
      {initialTags.map((t, i) => (
        <TagBox key={i}>
          <OplTypography fontSize="0.75rem" variant={"overline"}>
                #{t.tag}&nbsp;
          </OplTypography>
        </TagBox>
      ))}
    </TagContainer>
  );
};

export { Tags, TagBox };
