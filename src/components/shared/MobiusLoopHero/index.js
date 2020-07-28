import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { Box, Card, CardContent, Typography } from "@material-ui/core";

const coloraton = (display, practice, color, baseColor) => {
  let coloration;
  switch (display) {
  case "all":
    coloration = color;
    break;
  case practice:
    coloration = color;
    break;
  default:
    coloration = baseColor;
  }
  return coloration;
};

const descripton = status => {
  let message;
  switch (status) {
  case "foundation":
    message =
        "The Foundation focuses on creating a team culture, an environment of collaboration and technical engineering practices. These support fast and iterative journeys through the discovery and delivery loops. Without the foundation teams cannot reach sustainable continuous delivery.";
    break;
  case "discovery":
    message =
        "The Discovery loop starts with the current as-is state. Practices on this loop lead to answering questions such as: Why are you doing this? What problems are you trying to solve, and for whom? How will you measure the results?";
    break;
  case "options":
    message =
        "The Options Pivot explores how you weigh your learnings with the direction you are heading. What are the teams possibilities? What might you need to realize the outcomes you've discoverd?";
    break;
  case "delivery":
    message =
        "The Delivery Loop focuses on delivering the options you have decided on and getting feedback from the users and stakeholders. What was measured impact? What did you learn?";
    break;
  default:
    message =
        "The Mobius Loop is a process model for developing digital products. The Open Practice Library is organized around this model and filtering below will show you practices that fall on that part of the loop.";
  }
  return message;
};

const MobiusLoopHero = ({ displayContent = true, displaySection = "all" }) => {
  const section = displaySection.toLocaleLowerCase();
  const { palette, typography } = useTheme();
  return (
    <Box>
      <Box
        height="50vh"
        width="100%"
        bgcolor={section === "all" ? palette.grey["100"] : palette.grey["300"]}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 4490 3174"
          height="100%"
          width="100%"
          version="1.1"
        >
          <defs id="defs6">
            <clipPath id="clipPath18" clipPathUnits="userSpaceOnUse">
              <path
                id="path16"
                d="m 177.845,1281.11 c 0,-344.347 269.425,-584.863 655.358,-584.863 v 0 c 98.351,0 190.255,24.593 278.196,66.465 v 0 141.63 c -90.2,-52.73 -182.127,-84.755 -277.907,-84.755 v 0 c -309.269,0 -525.281,189.718 -525.281,461.104 v 0 c 0,254.381 269.431,461.102 600.757,461.102 v 0 c 57.449,0 127.126,-12.715 202.431,-42.165 v 0 131.696 c -69.452,22.96 -137.784,34.722 -202.72,34.722 v 0 c -402.994,0 -730.834,-262.409 -730.834,-584.936"
              />
            </clipPath>
            <clipPath id="clipPath28" clipPathUnits="userSpaceOnUse">
              <path
                id="path26"
                d="m 1163.813,1678.013 c 13.164,-4.071 30.79,-6.682 54.283,-2.115 v 0 c 22.771,8.066 30.856,25.03 34.987,39.92 v 0 c 8.442,30.585 -15.054,62.792 -29.672,69.163 v 0 c -19.878,9.875 -39.756,18.867 -59.598,26.972 v 0 z m 519.566,-264.977 c -52.555,50.9 -105.868,100.669 -160.541,147.448 v 0 c 0.202,0.623 0.096,1.298 -0.29,1.829 v 0 l 43.65,26.613 c 8.871,5.419 7.828,18.229 -1.655,20.063 v 0 l -257.322,49.631 c -4.271,0.511 -8.508,-1.183 -11.202,-4.474 v 0 c -2.693,-3.292 -3.456,-7.708 -2.017,-11.685 v 0 l 102.131,-236.568 c 3.77,-8.698 16.811,-7.042 20.407,2.534 v 0 l 21.121,56.315 c 0.356,-0.314 1.009,-0.28 1.833,0 v 0 c 9.914,-8.413 21.555,-18.409 32.333,-27.666 v 0 c 8.152,-7.249 16.343,-14.57 24.461,-21.965 v 0 c 0.396,-0.352 0.825,-0.738 1.153,-1.09 v 0 c 32.328,-29.355 64.263,-59.66 95.988,-90.389 v 0 l -35.21,-35.2 C 1424.958,1155.295 1295.793,1026.244 1163.813,937.354 v 0 -147.444 c 169.886,95.312 326.395,251.691 488.46,413.692 v 0 c 10.343,10.387 20.763,20.769 31.145,31.117 v 0 c 10.416,-10.348 20.811,-20.721 31.179,-31.117 v 0 c 171.28,-171.121 336.341,-336.012 517.451,-429.241 v 0 206.985 c -4.042,6.571 -7.761,13.041 -11.172,19.339 v 0 c -32.835,60.084 -54.428,134.421 -60.818,209.255 v 0 16.578 l 57.188,-18.441 c 6.301,-2.036 12.382,0.844 14.802,5.347 v 0 8.537 c -0.035,0.064 -0.07,0.13 -0.106,0.195 v 0 l -125.738,225.269 c -2.283,3.619 -6.337,5.806 -10.685,5.752 v 0 c -4.345,-0.048 -8.346,-2.326 -10.542,-5.999 v 0 l -120.168,-228.44 c -4.416,-8.413 5.174,-17.177 15.015,-13.693 v 0 l 48.39,16.965 c 0,-0.632 0.757,-1.196 1.979,-1.689 v 0 -16.578 c 4.31,-52.816 14.676,-104.995 30.893,-155.542 v 0 c -83.453,72.227 -166.758,155.474 -251.756,240.371 v 0 c -11.781,11.733 -23.577,23.466 -35.387,35.199 v 0 c 144.379,140.263 294.054,270.651 458.105,347.488 v 0 136.493 c -203.482,-79.622 -380.087,-231.27 -548.669,-394.716"
              />
            </clipPath>
            <clipPath id="clipPath38" clipPathUnits="userSpaceOnUse">
              <path
                id="path36"
                d="m 1683.379,1413.036 c -52.555,50.9 -105.868,100.669 -160.541,147.448 v 0 c 0.202,0.623 0.096,1.298 -0.29,1.829 v 0 l 43.65,26.613 c 8.871,5.419 7.828,18.229 -1.655,20.063 v 0 l -257.322,49.631 c -4.271,0.511 -8.508,-1.183 -11.202,-4.474 v 0 c -2.693,-3.292 -3.456,-7.708 -2.017,-11.685 v 0 l 102.131,-236.568 c 3.77,-8.698 16.811,-7.042 20.407,2.534 v 0 l 21.121,56.315 c 0.356,-0.314 1.009,-0.28 1.833,0 v 0 c 9.914,-8.413 21.555,-18.409 32.333,-27.666 v 0 c 8.152,-7.249 16.343,-14.57 24.461,-21.965 v 0 c 0.396,-0.352 0.825,-0.738 1.153,-1.09 v 0 c 32.328,-29.355 64.263,-59.66 95.988,-90.389 v 0 l -35.21,-35.2 C 1316.885,1047.323 1088.945,819.587 833.492,819.587 v 0 c -309.269,0 -525.281,189.718 -525.281,461.104 v 0 c 0,254.381 269.431,461.102 600.757,461.102 v 0 c 65.383,0 146.608,-16.471 233.938,-55.334 v 0 c 13.04,-5.773 35.922,-18.196 75.19,-10.561 v 0 c 22.771,8.066 30.856,25.03 34.987,39.92 v 0 c 8.442,30.585 -15.054,62.792 -29.672,69.163 v 0 c -107.413,53.361 -215.077,81.065 -314.732,81.065 v 0 c -402.994,0 -730.834,-262.409 -730.834,-584.936 v 0 c 0,-344.347 269.425,-584.863 655.358,-584.863 v 0 c 311.319,0 558.008,246.395 819.07,507.355 v 0 c 10.343,10.387 20.763,20.769 31.145,31.117 v 0 c 10.416,-10.348 20.811,-20.721 31.179,-31.117 v 0 c 261.168,-260.926 507.857,-507.355 819.07,-507.355 v 0 h 0.464 c 385.681,3.519 654.894,244.035 654.894,584.863 v 0 c 0.218,344.42 -269.248,584.936 -655.108,584.936 v 0 c -340.094,0 -603.883,-213.869 -850.538,-453.01 m 125.951,-124.464 c -11.781,11.733 -23.577,23.466 -35.387,35.199 v 0 c 228.155,221.65 469.491,418.621 759.974,418.621 v 0 c 309.231,0 525.242,-189.689 525.242,-461.103 v 0 c 0,-127.032 -48.89,-242.206 -137.803,-324.535 v 0 c -94.98,-87.996 -229.193,-135.41 -387.762,-136.921 v 0 h -0.685 c -1.901,0 -8.871,0.174 -18.321,0.454 v 0 c -46.305,2.312 -92.016,11.303 -135.647,26.685 v 0 c -80.794,38.047 -129.865,101.65 -158.065,153.713 v 0 c -32.835,60.084 -54.428,134.421 -60.818,209.255 v 0 16.578 l 57.188,-18.441 c 9.918,-3.206 19.291,5.772 14.696,14.079 v 0 l -125.738,225.269 c -2.283,3.619 -6.337,5.806 -10.685,5.752 v 0 c -4.345,-0.048 -8.346,-2.326 -10.542,-5.999 v 0 l -120.168,-228.44 c -4.416,-8.413 5.174,-17.177 15.015,-13.693 v 0 l 48.39,16.965 c 0,-0.632 0.757,-1.196 1.979,-1.689 v 0 -16.578 c 4.31,-52.816 14.676,-104.995 30.893,-155.542 v 0 c -83.453,72.227 -166.758,155.474 -251.756,240.371"
              />
            </clipPath>
            <clipPath id="clipPath48" clipPathUnits="userSpaceOnUse">
              <path
                id="path46"
                d="m 2284.426,1826.422 v -132.698 c 79.384,30.893 162.209,48.668 249.491,48.668 v 0 c 309.231,0 525.242,-189.689 525.242,-461.103 v 0 c 0,-127.032 -48.89,-242.206 -137.804,-324.535 v 0 c -94.979,-87.996 -229.192,-135.41 -387.761,-136.921 v 0 h -0.685 c -1.901,0 -8.872,0.173 -18.321,0.454 v 0 c -46.305,2.312 -92.015,11.303 -135.647,26.684 v 0 c -38.222,18 -69.343,41.718 -94.515,67.228 v 0 -164.544 c 79.141,-33.881 161.636,-53.408 249.241,-53.408 v 0 h 0.464 c 385.681,3.519 654.894,244.035 654.894,584.863 v 0 c 0.217,344.42 -269.249,584.936 -655.108,584.936 v 0 c -87.929,0 -170.74,-14.291 -249.491,-39.624"
              />
            </clipPath>
            <clipPath id="clipPath58" clipPathUnits="userSpaceOnUse">
              <path
                id="path56"
                d="m 232.581,471.403 c -30.826,0 -55.818,-24.986 -55.818,-55.813 v 0 c 0,-30.826 24.992,-55.818 55.818,-55.818 v 0 h 2902.388 c 30.827,0 55.818,24.992 55.818,55.818 v 0 c 0,30.827 -24.991,55.813 -55.818,55.813 v 0 z"
              />
            </clipPath>
          </defs>
          <g transform="matrix(1.3333333,0,0,-1.3333333,0,3174.8)" id="g10">
            <g id="g12">
              <g clipPath="url(#clipPath18)" id="g14">
                <path
                  id="path20"
                  fill={coloraton(
                    section,
                    "discovery",
                    palette.secondary.main,
                    palette.grey[500]
                  )}
                  d="M -817.906,3175.526 H 1554.638 V -186.271 H -817.906 Z"
                />
              </g>
            </g>
            <g id="g32">
              <g clipPath="url(#clipPath38)" id="g34">
                <path
                  id="path40"
                  fill={coloraton(
                    section,
                    "options",
                    palette.error.main,
                    palette.grey[500]
                  )}
                  d="M 1163.813,2731.653 H 2232.048 V 256.333 H 1163.813 Z"
                />
              </g>
            </g>
            <g id="g42">
              <g clipPath="url(#clipPath48)" id="g44">
                <path
                  id="path50"
                  fill={coloraton(
                    section,
                    "delivery",
                    palette.warning.main,
                    palette.grey[500]
                  )}
                  d="M 1841.188,3175.526 H 4213.732 V -186.905 H 1841.188 Z"
                />
              </g>
            </g>
            <g id="g52">
              <g clipPath="url(#clipPath58)" id="g54">
                <path
                  id="path60"
                  fill={coloraton(
                    section,
                    "foundation",
                    palette.primary.dark,
                    palette.grey[500]
                  )}
                  d="M 3634.026,-83.465 H -266.473 v 998.107 h 3900.499 z"
                />
              </g>
            </g>
            <text
              fontSize={typography.h1.fontSize}
              fontFamily={typography.h1.fontFamily}
              fontWeight={typography.h1.fontWeight}
              fill={palette.text.primary}
              transform="matrix(1,0,0,-1,711.874,1297.6992)"
            >
              <tspan
                id="tspan66"
                y="0"
                x="0 67.715302 95.467476 143.71356 189.14172 243.70677 294.34381 344.38312 383.23615"
              >
                Discovery
              </tspan>
              <tspan
                id="tspan68"
                y="102.46956"
                x="108.87391 158.57164 213.13669 267.70172"
              >
                Loop
              </tspan>
              <tspan
                id="tspan70"
                y="0"
                x="1588.449 1656.1643 1706.2036 1733.9557 1761.7079 1812.345 1862.3843 1901.2373"
              >
                Delivery
              </tspan>
              <tspan
                id="tspan72"
                y="102.46956"
                x="1662.0563 1711.754 1766.3191 1820.884"
              >
                Loop
              </tspan>
              <tspan
                id="tspan74"
                y="402.10764"
                x="797.46936 867.7464 924.31812 958.90161 986.65375 1041.2189 1097.3209"
              >
                Options
              </tspan>
              <tspan
                id="tspan76"
                y="504.57718"
                x="861.59821 913.94305 941.69525 992.33228 1046.8973"
              >
                Pivot
              </tspan>
              <tspan
                id="tspan78"
                y="1070.2092"
                x="723.77667 772.79126 827.35632 883.45837 939.56049 996.17493 1046.385 1080.9685 1108.7206 1163.2856"
              >
                Foundation
              </tspan>
            </text>
            <text id="text88" transform="matrix(1,0,0,-1,176.7651,227.4687)">
              <tspan y="0" x="0" id="tspan82" />
              <tspan y="67.172379" x="0" id="tspan86" />
            </text>
          </g>
        </svg>
      </Box>
      {displayContent ? (
        <Box display="flex" justifyContent="center">
          <Box maxWidth="60%" marginTop={-4}>
            <Card>
              <CardContent>
                <Typography
                  data-testid={`mobius-display-${section}`}
                  variant="subtitle1"
                >
                  {descripton(section)}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

export default MobiusLoopHero;
