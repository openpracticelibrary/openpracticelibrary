const filterTags = [
  "ALL",
  "VALIDATE",
  "VALUE",
  "INSIGHT",
  "IDEATE",
  "BUILD",
  "ANALYZE",
  "METHODS",
  "CULTURE"
];

const mobiusLoopArray = [
  "All",
  "Discovery",
  "Options",
  "Delivery",
  "Foundation"
];

const popularMenuItems = {
  Popular: "upvotes:DESC",
  Newest: "createdAt:DESC",
  Curated: "curated:ASC"
};

const formTagArray = (selectedFilterTag, selectedMobiusLoopFilter) => [
  ...(selectedFilterTag !== "ALL" ? [selectedFilterTag.toLowerCase()] : []),
  ...(selectedMobiusLoopFilter !== "All"
    ? [selectedMobiusLoopFilter.toLowerCase()]
    : [])
];

export { filterTags, mobiusLoopArray, popularMenuItems, formTagArray };
