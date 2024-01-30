import React from "react";
import image from "../../../src/assets/Family Legacy.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className="mt-6">
      <img className="mx-auto" src={image} alt="Family Legacy" />

      <div>
        <div>
          <FontAwesomeIcon icon={faPhone} />
          <FontAwesomeIcon icon={faLocationDot} />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
