import React from "react";
import Box from "./common/Box";
import Pagination from "./Pagination";

const StageFour = () => {
  return (
    <div>
      <div className="hero">
        <h2>How to solve the Rubik's Cube: Stage 4</h2>
      </div>

      <div className="container">
        <Box>
          <h5>
            <u>Holding your Cube</u>
          </h5>

          <img
            src="images\stage-4-holding-your-cube.png"
            alt="stage-4-holding-your-cube"
          />

          <p>
            With the <i>completed white layer on the bottom</i> now you have to
            solve the middle layer, which means positioning the ‘edge pieces’ in
            the correct place.
          </p>
        </Box>

        <Box>
          <h5>Tips</h5>
          <p>
            - Notice the vertical row of blue(this could be red, orange, green)
            - THIS IS CRITICAL!
          </p>
          <img
            src="images\verticle-row-of-blue-stage-4-pt-2.png"
            alt="verticle-row-of-blue-stage-4-pt-2"
          />
          <p>
            - Create a vertical line by rotating the top face until the front
            color of the edge piece on the top face without yellow on it matches
            a side center piece. The color on the edge piece’s top face will
            determine the direction the edge piece should move.
          </p>
        </Box>

        <Box>
          <p>
            1) If you’re moving the edge piece in the same direction as
            indicated in the picture, then follow the sequence of moves pictures
            below:
          </p>
          <img
            src="images\stage-4-pt-3.png"
            alt="stage-4-pt-3"
            className="img-fluid"
          />
          <br />
          <img src="images\stage-4-pt-4.png" alt="stage-4-pt-4" /> <br />
          <p>
            2) If you’re moving the edge piece in the same direction as
            indicated in the picture, then follow the sequence of moves pictured
            below:
          </p>
          <img
            src="images\stage-4-pt-5.png"
            alt="stage-4-pt-5"
            className="img-fluid"
          />
          <p>
            Continue these steps until all the edge pieces are in the correct
            position. NOTE: If one of the edge pieces is already in the middle
            row, but in the wrong position, then do either one of the sequential
            moves and it will move to the top layer. Then you can do the
            appropriate sequential moves to position it in the correct location
            of the middle layer.
          </p>
        </Box>

        <Box>
          <img
            src="images\stage-4-holding-your-cube.png"
            alt="stage-4-holding-your-cube"
          />
          <p>
            If your bottom two layers look like this picture, you can move to
            Stage 5. You are two-thirds of the way done!
          </p>
        </Box>

        <Box>
          <Pagination next="/stage-five" prev="/stage-three" />
        </Box>
      </div>
    </div>
  );
};

export default StageFour;
