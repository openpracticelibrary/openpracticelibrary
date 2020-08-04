const gradientSelect = (tags) => {
  const tagList = tags ? tags.map((t) => t.toLowerCase()) : [];
  if (tagList.includes("foundation")) {
    return 1;
  }
  if (tagList.includes("discovery")) {
    return 2;
  }
  if (tagList.includes("options")) {
    return 3;
  }
  if (tagList.includes("delivery")) {
    return 4;
  }
  return 0;
};
export default gradientSelect;
