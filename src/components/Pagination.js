import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ next, prev }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="d-flex justify-content-between" role="group">
        <Link to={prev}>
          <button
            type="button"
            class={
              prev === ""
                ? "btn btn-primary btn-lg disabled"
                : "btn btn-primary btn-lg"
            }
            onClick={handleClick}
          >
            Previous
          </button>
        </Link>

        <Link to={next}>
          <button
            onClick={handleClick}
            type="button"
            className="btn btn-primary btn-lg"
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
