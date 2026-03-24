import CMS from "decap-cms-app/dist/decap-cms-app";
if (typeof window !== 'undefined') {
  window.CMS = CMS;
  window.DecapCmsApp = CMS;
  window.NetlifyCmsApp = CMS;
}

import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import PracticePagePreview from "./preview-templates/PracticePagePreview";

CMS.registerPreviewStyle(
  "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap"
);
CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("practice", PracticePagePreview);

export default CMS;
