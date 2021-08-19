import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ next, prev }) => {
  return (
    <div>
      <div class="d-flex justify-content-between" role="group">
        <Link to={prev}>
          <button
            type="button"
            class={
              prev === ""
                ? "btn btn-primary btn-lg disabled"
                : "btn btn-primary btn-lg"
            }
          >
            Previous
          </button>
        </Link>

        <Link to={next}>
          <button type="button" class="btn btn-primary btn-lg">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
