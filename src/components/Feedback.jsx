import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Feedback() {
  let test = false;
  const text1 = useRef("");
  const text2 = useRef("");
  const text3 = useRef("");
  const text4 = useRef("");
  const text5 = useRef("");
  const clicked = () => {};
  const navigate = useNavigate();
  const check = () => {
    if (
      text1.current.value === "" ||
      text2.current.value === "" ||
      text3.current.value === "" ||
      text4.current.value === ""
    ) {
      document.querySelector("#hidden").style.display = "block";
    } else {
      clicked();
      navigate("/thanks");
    }
  };
  return (
    <div class="container my-5 my-5">
      <div class="display-4" style={{ fontWeight: "700" }}>
        Tell Me What You Think?
      </div>
      <p class="feedText">
        Thank you for visiting my portfolio! Your feedback is incredibly
        valuable in helping me improve the user experience and content of my
        website. Please take a few moments to share your thoughts with me. Your
        input will guide future updates and enhancements to ensure that this
        portfolio continues to meet the needs of its visitors effectively. If
        you encountered any issues, have suggestions for improvement, or simply
        want to share your experience, I'm eager to hear from you. Thank you for
        your time and contribution!
      </p>
      <div class="mb-10 ">
        <label for="knowing" class="display-6 " style={{ fontWeight: "400" }}>
          How would you rate the overall design/layout of the portfolio?
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder=""
          ref={text1}
        />
      </div>
      <div class="mb-10 ">
        <label for="knowing" class="display-6 " style={{ fontWeight: "400" }}>
          Were you able to easily find the information you were looking for?
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder=""
          ref={text2}
        />
      </div>
      <div class="mb-10 ">
        <label for="knowing" class="display-6 " style={{ fontWeight: "400" }}>
          What did you like most about the portfolio?
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder=""
          ref={text3}
        />
      </div>
      <div class="mb-10 ">
        <label for="knowing" class="display-6 " style={{ fontWeight: "400" }}>
          What aspects do you think could be improved?
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder=""
          ref={text4}
        />
      </div>
      <div class="mb-10 ">
        <label
          for="exampleFormControlTextarea1"
          class="form-label display-6 "
          style={{ fontWeight: "400" }}
        >
          Any additional comments or suggestions?
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          ref={text5}
        ></textarea>
      </div>
      <p id="hidden">
        Oops! It seems like you missed filling out some required fields in the
        feedback form. Please make sure to complete all mandatory fields before
        submitting your feedback.
      </p>
      <button type="button" class="btn btn-success" onClick={() => check()}>
        Submit Feedback
      </button>
    </div>
  );
}
