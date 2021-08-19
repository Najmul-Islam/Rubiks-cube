import React from "react";
import Box from "./common/Box";
import Pagination from "./Pagination";

const StageFive = () => {
  return (
    <div>
      <div className="hero">
        <h2>How to solve the Rubik's Cube: Stage 5</h2>
      </div>
      <div className="container">
        <Box>
          <h3 className="mb-4">SOLVE THE TOP FACE</h3>
          <h5>
            <u>Holding your Cube:</u>
          </h5>
          <p>
            1) Matching the yellow pattern on the top face of your Rubik’s Cube
            to one of the yellow patterns shown on the Cubes below.
          </p>
          <p>2) Then follow the correct sequence.</p>
          <img
            src="images\stage-5-holding-your-cube.png"
            alt="stage-5-holding-your-cube"
          />
          <h5>Tips:</h5>
          <p>
            - Yellow edge pieces on the top face do NOT need to match on the
            side pieces…yet!
          </p>
        </Box>

        <Box>
          <h5>
            <u>1st Step: Make a yellow cross:</u>
          </h5>
          <br />
          <img
            src="images\how-to-solve-rubiks-cube-stage-5.jpg"
            alt="how-to-solve-rubiks-cube-stage-5"
            className="rounded img-fluid"
          />
        </Box>

        <Box>
          <img src="images\stage-5-3.png" alt="stage-5-3" />
          <br />
          <h5>
            <u>2nd Step: Make all the corners yellow</u>
          </h5>
          <p>
            Now look at the top face of the Rubik’s Cube and match your face to
            one of the states below:
          </p>
          <img
            src="images\stage-5-yellow-corners.png"
            alt="stage-5-yellow-corners"
          />
        </Box>

        <Box>
          <h5>State 1</h5>
          <p>
            If no corner Cubes are yellow on the top face, you must have yellow
            left corner or left face as shown.
          </p>
          <h5>State 2</h5>
          <p>
            If one corner Cube is yellow match your top face as shown and do the
            sequence below.
          </p>
          <h5>State 3</h5>
          <p>
            If any two corner Cubes are yellow don’t worry about their position.
            You MUST match the front face with a yellow left corner as shown Do
            this sequence 1, 2 or 3 times to achieve a complete yellow top face.
            After each sequence, orient the Rubik’s Cube to REMATCH the top face
            to the appropriate state and repeat the sequence until all the
            corners are yellow.
          </p>
          <img
            src="images\stage-5-formula.png"
            alt="stage-5-formula"
            className="img-fluid"
          />
        </Box>

        <Box>
          <img src="images\stage-5-3.png" alt="stage-5-3" />
          <p>
            If your Rubik’s Cube looks like this picture above then you can move
            to Stage 6!
          </p>
        </Box>

        <Box>
          <Pagination next="/stage-six" prev="/stage-four" />
        </Box>
      </div>
    </div>
  );
};

export default StageFive;
