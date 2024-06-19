import React from "react";

export default function Achive() {
  return (
    <div className="car" id="projects">
      <div className="display-6 sub">My Projects</div>
      <div className="container rounded border-2 mx-10 my-4 car px-4 py-4">
        <hr></hr>
        {/* <div className='display-6 supsub'>1)Basic calculator</div> */}
        <div class="card car" style={{ width: "18rem" }}>
          <img
            src="https://i.imghippo.com/files/dYvqv1718788203.png"
            class="card-img-top"
            alt="calculator image"
          />
          <div class="card-body mx-5 my-5">
            <h5 class="card-title">Basic calculator</h5>
            <a
              href="https://github.com/Nithin-2005-dev/calculator.git"
              class="btn btn-primary"
            >
              Click to view github page
            </a>
            <p className="text">
              This is the basic calculator project that i made when i started
              learning little bit JavaScript with html and css
            </p>
          </div>
        </div>
        <div />
        <div class="card car" style={{ width: "18rem" }}>
          <img
            src="https://i.imghippo.com/files/QNUPN1718788335.png"
            class="card-img-top"
            alt="mental-health app image"
          />
          <div class="card-body mx-5 my-5">
            <h5 class="card-title">Mental health app</h5>
            <a
              href="https://github.com/Nithin-2005-dev/mental-health-app.git"
              class="btn btn-primary"
            >
              Click to view github page
            </a>
            <p className="text">
              This project on mental health is tried in my first hackthon.At
              that time i started learning react little bit but i'm not able to
              apply it in my project due to lack of confidence.
            </p>
          </div>
        </div>
        <div class="card car" style={{ width: "18rem" }}>
          <img
            src="https://i.postimg.cc/0Nt0wYhM/Screenshot-2024-03-27-205911.png"
            class="card-img-top"
            alt="todo-app image"
          />
          <div class="card-body mx-5 my-5">
            <h5 class="card-title">Todo App</h5>
            <a
              href="https://github.com/Nithin-2005-dev/Todo-app.git"
              class="btn btn-primary"
            >
              Click to view github page
            </a>
            <p className="text">
              Todo-app is made purely with react and bootstrap.It did this
              project at the time where i started learning react-hooks.
            </p>
          </div>
        </div>
        <div class="card car my-3" style={{ width: "18rem" }}>
          <img
            src="https://i.imghippo.com/files/C9n7O1718788402.png"
            class="card-img-top"
            alt="social-media app image"
          />
          <div class="card-body mx-5 my-5">
            <h5 class="card-title">social media</h5>
            <a
              href="https://github.com/Nithin-2005-dev/social-media.git"
              class="btn btn-primary"
            >
              Click to view github page
            </a>
            <p className="text">
              after getting some grip on react hooks and some other advanced
              concepts of react i made this social-media app but failed handle
              to fetch and adding data from the dummy server
            </p>
          </div>
        </div>
        <div class="card car my-3" style={{ width: "18rem" }}>
          <img
            src="https://i.imghippo.com/files/vepMA1718788438.png"
            class="card-img-top"
            alt="text utiles app image"
          />
          <div class="card-body mx-5 my-5">
            <h5 class="card-title">Text utiles</h5>
            <a
              href="https://github.com/Nithin-2005-dev/text_utiles.git"
              class="btn btn-primary"
            >
              Click to view github page
            </a>
            <p className="text">
              i made text manipulation app with react and bootstrap and this is
              the first project started implementing dark mode in my Projects
              along with some alerts and react router.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
