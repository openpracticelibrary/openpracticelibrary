import React from "react";
import { Box } from "@material-ui/core";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import DefaultImage from "../../../assets/images/DefaultImage.png";

export default function MediaGallery({
  practiceId,
  title,
  mediaGallery,
  mediaRef,
}) {
  const images = mediaGallery.map((media) => {

    var url;
    try {
        url = media.link ? new URL(media.link) : new URL("https://via.placeholder.com/300");
    } catch (TypeError) {
        url = new URL("https://via.placeholder.com/300");
    }

    if (url.hostname.includes("youtube") && url.pathname.includes("watch")) {
      const youtubeId = url.searchParams.get("v");
      const link = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
      const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=0&showinfo=1`;
      return {
        original: link,
        thumbnail: link,
        embedUrl,
        renderItem: () => renderVideo({ embedUrl, original: link }),
      };
    } else if (
      url.hostname.includes("youtube") &&
      url.pathname.includes("playlist")
    ) {
      const youtubeId = url.searchParams.get("list");
      const link = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
      const embedUrl = `https://www.youtube.com/embed/?listType=playlist&list=${youtubeId}`;
      return {
        original: link,
        thumbnail: link,
        embedUrl,
        renderItem: () => renderVideo({ embedUrl, original: link }),
      };
    } else if (url.hostname.includes("youtu")) {
      const youtubeId = url.pathname.split("/")[1];
      const link = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
      const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=0&showinfo=1`;
      return {
        original: link,
        thumbnail: link,
        embedUrl,
        renderItem: () => renderVideo({ embedUrl, original: link }),
      };
    } else {
      return {
        original: media.link,
        thumbnail: media.link,
      };
    }
  });

  const renderVideo = (item) => (
    <Box overflow="hidden" paddingTop="56.25%" position="relative">
      <iframe
        style={{
          position: "absolute",
          border: 0,
          height: "100%",
          left: 0,
          top: 0,
          width: "100%",
          borderRadius: 17,
        }}
        title={item.embedUrl}
        src={item.embedUrl}
        allowFullScreen
      />
    </Box>
  );
  return (
    <Box>
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
  );
}
