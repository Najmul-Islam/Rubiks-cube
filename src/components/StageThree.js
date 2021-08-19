import React from "react";
import Box from "./common/Box";
import Pagination from "./Pagination";

const StageThree = () => {
  return (
    <div>
      <div className="hero">
        <h2>How to solve the Rubik's Cube: Stage 3</h2>
      </div>

      <div className="container">
        <Box>
          <h5>
            <u>Holding your Cube</u>
          </h5>
          <p>
            With the white cross in the top face, you must solve the white
            corner pieces. As indicated in this picture:
          </p>
          <img
            src="images\holding-your-cube-stage-3.png"
            alt="holding-your-cube-stage-3"
          />
        </Box>

        <Box>
          <h5>
            <u>Tips:</u>
            <br />
            <br />
          </h5>
          <img
            src="images\stage-3-rubiks-cube-tips.png"
            alt="stage-3-rubiks-cube-tips"
          />
          <br />
          <p> - Corner pieces will have one white side plus 2 other colours.</p>
          <br />
          <p>
            - If the corner piece is already on the bottom face, then rotate the
            bottom until the corner is directly below its intended location.
            Once in that position, your Rubik’s Cube may look like any one of
            the three pictures on the right. Then, do the sequence below 1X, 2X
            or 3X or UNTIL it is in the correct position.
          </p>
        </Box>

        <Box>
          <img src="images\stae-1-formula-1.png" alt="stae-1-formula-1" />
          <br />
          <br />
          <p>
            - Repeat this process for all four corners.- If the corner is on the
            top face of the Cube, move it to the bottom face by doing:
          </p>
          <br />
          <img src="images\stage-3-formula-2.png" alt="stage-3-formula-2" />
          <img src="images/5_s3.png" alt="5_s3" />
        </Box>

        <Box>
          <p>
            If the white layer of your Cube looks like the picture here, you
            have completed one-third of the Rubik’s Cube and you can now move to
            Stage 4!
          </p>
          <img
            src="images\holding-your-cube-stage-3.png"
            alt="holding-your-cube-stage-3"
          />
        </Box>

        <Box>
          <Pagination next="/stage-four" prev="/stage-two" />
        </Box>
      </div>
    </div>
  );
};

export default StageThree;
