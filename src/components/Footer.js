import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="footer mt-5">
      <div className="container py-4">
        <div className="d-flex align-items-center justify-content-center mb-3">
          <a
            className="social-link"
            href="https://www.facebook.com/FestivalInMyanmar/"
            target="_blank"
          >
            <FontAwesomeIcon icon={["fab", "facebook-f"]} color="blue" />
          </a>
          <a
            className="social-link"
            href="https://my.wikipedia.org/wiki/%E1%80%99%E1%80%BC%E1%80%94%E1%80%BA%E1%80%99%E1%80%AC%E1%80%94%E1%80%AD%E1%80%AF%E1%80%84%E1%80%BA%E1%80%84%E1%80%B6#%E1%80%9B%E1%80%AC%E1%80%9E%E1%80%AE%E1%80%A5%E1%80%90%E1%80%AF"
            target="_blank"
          >
            <FontAwesomeIcon icon={["fab", "wikipedia-w"]} color="black" />
          </a>
        </div>
        <p className="text-secondary text-center">
          © All rights reserved by{" "}
          <span style={{ fontWeight: "bold", color: "#3f90ce" }}>Lucifer</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
