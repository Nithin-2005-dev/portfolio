import React from "react";

export default function Home() {
  return (
    <>
      <div className=" mx-4 my-4 cont" id="home">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src="https://i.imghippo.com/files/1EtIL1718788147.jpg"
              class="d-block mx-lg-auto img-fluid cont mx-5 my-5 myimg"
              alt="Nithin's image"
              width="350"
              height="350"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <div className="container home">
              <h1 className="display-6 head">
                "Embrace the beauty of creation; where pixels meet passion, and
                imagination knows no bounds."
              </h1>
              <h1 className="display-5 name">Nithin's Creative Portfolio</h1>
            </div>
          </div>
          {/* <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 mx-5" fdprocessedid="0zr39k" onClick={()=>showAll()}>View Profile</button>
        </div> */}
        </div>
      </div>
    </>
  );
}
