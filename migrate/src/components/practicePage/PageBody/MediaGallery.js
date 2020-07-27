import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import DefaultImage from "../../../assets/images/DefaultImage.png";
import AddImage from "../../../assets/images/add.png";
import AddImageCard from "./AddImage";

import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  space: {
    padding: theme.spacing(1),
  },
  mediaBox: {
    "& .image-gallery-slide img": {
      borderRadius: 17,
      width: "100%",
      height: "530px",
      objectFit: "fill",
    },
    "& .fullscreen .image-gallery-slide img": {
      height: "auto",
      width: "auto",
      minHeight: "50vh",
    },
  },
  videoWrapper: {
    overflow: "hidden",
    paddingTop: "56.25%",
    position: "relative",
    "& iframe": {
      position: "absolute",
      border: 0,
      height: "100%",
      left: 0,
      top: 0,
      width: "100%",
      borderRadius: 17,
    },
  },
}))
;

export default function MediaGallery({ practiceId, title, mediaGallery, mediaRef }) {
  const classes = useStyles();
  const images = mediaGallery.map(media => {
    const url = new URL(media.link);
    if (url.hostname.includes('youtube') && url.pathname.includes('watch')) {
      const youtubeId = url.searchParams.get('v');
      const link = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
      const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=0&showinfo=1`;
      return {
        original: link,
        thumbnail: link,
        embedUrl,
        renderItem: () => renderVideo({ embedUrl, original: link })
      }
    } else if (url.hostname.includes('youtube') && url.pathname.includes('playlist')) {
      const youtubeId = url.searchParams.get('list');
      const link = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
      const embedUrl = `https://www.youtube.com/embed/?listType=playlist&list=${youtubeId}`;
      return {
        original: link,
        thumbnail: link,
        embedUrl,
        renderItem: () => renderVideo({ embedUrl, original: link })
      }
    } else if (url.hostname.includes('youtu')) {
      const youtubeId = url.pathname.split('/')[1];
      const link = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
      const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=0&showinfo=1`;
      return {
        original: link,
        thumbnail: link,
        embedUrl,
        renderItem: () => renderVideo({ embedUrl, original: link })
      }
    } else {
      return {
        original: media.link,
        thumbnail: media.link
      };
    };
  });

  images.push({
    original: AddImage,
    thumbnail: AddImage,
    renderThumbInner: () => (<AddImageCard currentMediaGallery={mediaGallery} practiceId={practiceId} />)
  });

  const renderVideo = (item) => {
    return (
      <div>
        <div className={classes.videoWrapper}>
          <iframe
            title={item.embedUrl}
            src={item.embedUrl}
            allowFullScreen
          >
          </iframe>
        </div>
      </div>
    );
  }

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.space}>
          <Typography variant={"h4"} ref={mediaRef}>
            <b>Look at {title}</b>
          </Typography>
        </Box>
        <Box className={classes.mediaBox}>
          <ImageGallery
            items={images}
            showBullets={true}
            showIndex={false}
            showThumbnails={true}
            lazyLoad={true}
            showPlayButton={false}
            showFullscreenButton={true}
            onErrorImageURL={DefaultImage}
            onPlay={(currentIndex) => console.log(images[currentIndex])}
          />
        </Box>
      </Box>
    </>
  );
}
