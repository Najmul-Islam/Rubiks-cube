import React from "react";
import Box from "./common/Box";
import Pagination from "./Pagination";

const StageTwo = () => {
  return (
    <div>
      <div className="hero">
        <h2>How to solve the Rubik's Cube: Stage 2</h2>
      </div>

      <div className="container">
        <Box>
          <h5>
            <u>Holding your Cube</u>
          </h5>
          <img
            src="images\How-to-solve-the-Rubiks-Cube-stage-2.png"
            alt="How-to-solve-the-Rubiks-Cube-stage-2"
          />
          <p>
            Holding your Rubik’s Cube with the white centerpiece on the top
            face, you must create a white cross as shown. Much of this level is
            achieved with practice and by trial and error… but we do have some
            tips.
          </p>
        </Box>

        <Box>
          <h5>Tips</h5>
          <p>
            - Be sure to solve the sections of the white cross in the following
            order <br /> - blue, orange, green, red <br /> - Notice the EDGE
            PIECE COLORS above match the top white centerpiece and the side red
            and blue centerpieces. This is how we know the edge pieces are in
            the correct positions. <br /> - Keeping the white centerpiece on
            top, move the blue/white edge piece to the bottom face, then rotate
            it on the bottom until it is directly under the blue centerpiece.
            Now hold your Rubik’s Cube so the blue centerpiece and blue/white
            edge piece are on the right face. Rotate the right face until the
            blue/white edge piece is on the top face and above the blue
            centerpiece:
          </p>
          <img
            src="images\white-at-top-of-cube.png"
            alt="white-at-top-of-cube.png"
          />
          <p>
            - If your Rubik’s Cube looks like this, hold your Cube so the orange
            centerpiece is on the right face and start solving the side with the
            orange centerpiece the same way as stated above.
          </p>
        </Box>

        <Box>
          <p>
            - If your Rubik’s Cube looks like this, do the sequence below making
            sure the blue centerpiece is on the right face:
          </p>
          <img src="images/4_s2.png" alt="4_s2" />
        </Box>

        <Box>
          <p>
            If your Rubik’s Cube has a white cross that looks like this picture,
            you can move to Stage 3!
          </p>
          <img
            src="images\How-to-solve-the-Rubiks-Cube-stage-2-final.png"
            alt="How-to-solve-the-Rubiks-Cube-stage-2-final"
          />
        </Box>

        <Box>
          <Pagination next="/stage-three" prev="/stage-one" />
        </Box>
      </div>
    </div>
  );
};

export default StageTwo;
