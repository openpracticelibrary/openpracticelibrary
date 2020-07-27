import blueDiagonals from "../../../assets/images/bluelines.svg";
import purpleGrid from "../../../assets/images/graph-paper.svg";
import yellowRain from "../../../assets/images/rain.svg";
import greenDots from "../../../assets/images/polka-dots.svg";

const backgroundImage = (tags) => {
  const tagMatch = tags.map(t => t.tag.toLowerCase());
  if (tagMatch.includes('discovery')) {
    return `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.76) 70.4%, #FFFFFF 900%), url(${blueDiagonals})`;
  }
  if (tagMatch.includes('delivery')) {
    return `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.76) 70.4%, #FFFFFF 900%), url(${greenDots})`;
  }
  if (tagMatch.includes('options')) {
    return `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.76) 70.4%, #FFFFFF 900%), url(${yellowRain})`;
  }

  return `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.76) 70.4%, #FFFFFF 900%), url(${purpleGrid})`;
};

export default backgroundImage;
