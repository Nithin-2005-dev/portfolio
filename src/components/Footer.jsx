import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <a
            href="/"
            class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            previewlistener="true"
          >
            <svg class="bi" width="30" height="24">
              <use xlink:href="#bootstrap"></use>
            </svg>
          </a>
          <span class="mb-3 mb-md-0 text-body-secondary tks">
            made with &#9829; by Nithin
          </span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3">
            <a
              class="text-body-secondary"
              href="https://www.linkedin.com/in/nithin-kumar-a922b82a3/"
              target="_blank"
            >
              <svg class="bi icon" width="50" height="50">
                <use xlink:href="#linkedin"></use>
                <FaLinkedin />
              </svg>
            </a>
          </li>
          <li class="ms-2">
            <a
              class="text-body-secondary"
              href="https://www.instagram.com/nithin__kumar2/"
              target="_blank"
            >
              <svg class="bi icon" width="50" height="50">
                <use xlink:href="#instagram"></use>
                <FaInstagramSquare />
              </svg>
            </a>
          </li>
          <li class="ms-1">
            <a
              class="text-body-secondary"
              href="https://www.facebook.com/profile.php?id=100062150913192"
              target="_blank"
            >
              <svg class="bi icon" width="50" height="50">
                <use xlink:href="#facebook"></use>
                <FaFacebook />
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
