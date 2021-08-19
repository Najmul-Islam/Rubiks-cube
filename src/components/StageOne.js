import React from "react";
import Box from "./common/Box";
import Pagination from "./Pagination";

const StageOne = () => {
  return (
    <div>
      <div className="hero">
        <h2>How to solve the Rubik's Cube: Stage 1</h2>
      </div>

      <div className="container">
        <Box>
          <h3>Definitions of Rubik's cube pieces</h3>
          <h5>
            <u>Edge Pieces</u>
          </h5>
          <img
            src="images/rubiks-cube-edge-pieces.jpg"
            alt="rubiks-cube-edge-pieces"
            width="150"
            height="150"
          />
          <p>
            Pieces with two colors. There are twelve edge pieces located in the
            middle rows
          </p>
        </Box>
        <Box>
          <h5>
            <u>Corner Pieces</u>
          </h5>
          <img
            src="images/rubiks-cube-corner-pieces.jpg"
            alt="rubiks-cube-corner-pieces"
            width="150"
            height="150"
          />
          <p>
            Pieces with three colors. There are eight corner pieces located on
            the corners.
          </p>
        </Box>

        <Box>
          <h5>
            <u>Centre Pieces</u>
          </h5>
          <img
            src="images/rubiks-cube-centre-pieces.jpg"
            alt="rubiks-cube-centre-pieces"
            width="150"
            height="150"
          />
          <p>
            Pieces with once color. There are six center pieces located in the
            center of each side, center pieces DO NOT MOVE and represent the
            color of their side.
          </p>
        </Box>
        <Box>
          <p>Center piece colors are always opposite each other:</p>
          <p>
            <span style={{ backgroundColor: "black", color: "white" }}>
              White
            </span>{" "}
            is opposite{" "}
            <span style={{ backgroundColor: "black", color: "yellow" }}>
              yellow
            </span>
          </p>
          <p>
            <span style={{ color: "orange" }}>Orange</span> is opposite
            <span style={{ color: "red" }}> red</span>
          </p>
          <p>
            <span style={{ color: "Green" }}>Green</span> is opposite
            <span style={{ color: "blue" }}>blue</span>
          </p>
        </Box>

        <Box>
          <p>Each side of the cube is represented by a letter:</p>
          <img src="images/6_full.jpg" alt="6_full" className="rounded" />
        </Box>

        <Box>
          <p>
            The letter with an “i” after it means an inverted or
            counter-clockwise move when looking at that face directly
          </p>
          <img
            src="images/how-to-solve-cube-formula.png"
            alt="how-to-solve-cube-formula"
            className="img-fluid"
          />
        </Box>

        <Box>
          <h5>
            <u>Very important</u>
          </h5>
          <p>
            When making the moves above hold your Rubik’s Cube full-face front
            with the logo on top as shown. Dark grey on the pictures means that
            the color does not matter. Each move is a 1/4 turn rotation.
          </p>
          <img
            src="images/how-to-solve-cube-formula-2.png"
            alt="how-to-solve-cube-formula-2"
          />
        </Box>
        <Box>
          <Pagination next="/stage-two" prev="/" />
        </Box>
      </div>
    </div>
  );
};

export default StageOne;
