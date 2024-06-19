import React from "react";
import { Link } from "react-router-dom";

export default function Thankyou() {
  return (
    <>
      <div class="px-4 py-5 my-5 text-center">
        <h1 class="display-5 fw-bold text-body-emphasis">
          Thank You for Your Feedback!
        </h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            Your feedback has been received. Thank you for taking the time to
            share your thoughts with me. Your input is greatly appreciated and
            will be instrumental in improving my portfolio. If you've provided
            contact information and requested a response, I'll be sure to get
            back to you as soon as possible. Otherwise, please feel free to
            reach out to me at any time if you have further questions or
            comments. Thank you once again for helping me enhance my portfolio
            experience!
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/">
              <button
                type="button"
                class="btn btn-primary btn-lg px-4 gap-3"
                fdprocessedid="g5q58i"
              >
                Go back to Home-page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
