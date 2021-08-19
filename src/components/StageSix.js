import React from "react";
import Box from "./common/Box";
import Pagination from "./Pagination";

const StageSix = () => {
  return (
    <div>
      <div className="hero">
        <h2>How to solve the Rubik's Cube: Stage 6</h2>
      </div>
      <div className="container">
        <Box>
          <h3 className="text-center mb-4">Solve the final layer</h3>

          <h5>
            <u>Holding the cube</u>
          </h5>
          <br />
          <img src="images\stage-6-1.png" alt="stage-6-1" />
          <p>
            Hold the Rubik’s Cube as shown, now twist the top face until at
            least 2 corners are in the right location as A, B or A, D or B, C as
            shown below. If all 4 corners are in the right place you can proceed
            to the 2nd step.
          </p>
        </Box>
        <Box>
          <h5>
            <u>1st Step: Position yellow corners correctly</u>
          </h5>
          <br />
          <p>
            While holding your Rubik’s Cube as shown above, look at the top
            face. Place the 2 correct corners in the back A, B or diagonally A,
            D or B, C across from each other.
          </p>
          <img src="images\stage-6-3.png" alt="stage-6-3" />
          <img src="images\stage-6-2.png" alt="stage-6-2" />
          <br />
          <br />
          <p>
            If corners A and B are in the right place then to switch C and D, do
            the sequence below:
          </p>
          <img
            src="images\stage-6-4.png"
            alt="stage-6-4"
            className="img-fluid"
          />
          <p>
            If you need to switch diagonal corners like B and C or D and A, then
            do the sequence once. Then, orient the Cube so the 2 correct corners
            are in the back and do the sequence again.
          </p>
        </Box>

        <Box>
          <h5>
            <u>2nd Step: Position yellow edges correctly</u>
          </h5>
          <br />
          <img src="images\stage-6-5.png" alt="stage-6-5" />
          <img src="images\stage-6-6.png" alt="stage-6-6" />
          <br />
          <br />
          <p>
            If 1 edge is correct and 3 edges are incorrect orient the Rubik’s
            Cube so the face with the correct edge is the back face. Then
            determine if the edge pieces need to move clockwise or
            counter-clockwise and do the correct sequence below.
          </p>
          <p>
            If all 4 edges are incorrect, then do either sequence below once,
            and then determine what direction the three edge pieces need to move
            and do the correct sequence below.
          </p>
          <br />
          <br />
          <p>To cycle EFG Clockwise or EFGH Clockwise:</p>
          <img
            src="images\stage-6-8.png"
            alt="stage-6-8"
            className="img-fluid"
          />
          <br />
          <br />
          <br />
          <p>To cycle EFG Counter-Clockwise or EFGH Counter-Clockwise:</p>

          <img
            src="images\stage-6-10.png"
            alt="stage-6-10"
            className="img-fluid"
          />
        </Box>
        <Box>
          <h5 className="text-center mb-4">
            Congratulations - You just solved a Rubik's Cube!
          </h5>
          <div className="text-center">
            <img src="images\stage-6-12.png" alt="stage-6-12" />
          </div>
        </Box>
        <Box>
          <Pagination next="/" prev="/stage-five" />
        </Box>
      </div>
    </div>
  );
};

export default StageSix;
