import React from "react";
import Box from "./common/Box";
import Pagination from "./Pagination";

const Stage = () => {
  return (
    <div>
      <div className="hero">
        <h2>How to solve the Rubik's Cube</h2>
      </div>
      <div className="container">
        <Box>
          <p>
            It took Erno Rubik (the inventor of the Rubik’s Cube) one month to
            learn how to do a Rubik’s Cube. Some people started thinking about
            how to complete the Rubik’s Cube back in the 80’s, and in 40 years
            have got little further than one side. If you want to learn how to
            solve the Rubik’s Cube, look no further, you have come to the right
            place!
          </p>
          <p>
            Getting help with solving the Rubik’s Cube is not cheating. There
            are 42 Quintillion possibilities, but only one correct solution.
            Hence without knowing how to solve a Rubik’s Cube it is nearly
            impossible.
          </p>
        </Box>

        <Box>
          <p>
            This guide on how to do the Rubik’s Cube will take about 45 minutes
            to learn, but once you have you can impress all your friends with
            how you can solve one of life’s great mysteries.
          </p>
        </Box>

        <Box>
          <Pagination next="/stage-one" prev="/" />
        </Box>
      </div>
    </div>
  );
};

export default Stage;
