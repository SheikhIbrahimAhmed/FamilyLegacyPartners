import React from "react";
import image from "../../../src/assets/Family Legacy.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className="mt-6 p-3">
      <img className="mx-auto" src={image} alt="Family Legacy" />

      <div className="mt-4 flex">
        <div className="flex flex-col items-center w-1/2">
          <div className="flex items-center gap-2 mr-48">
            <FontAwesomeIcon className="text-gray-400" icon={faPhone} />
            <a className="text-xl text-685b44" href="https://www.google.com">
              734.667.1415
            </a>
          </div>
          <p className="text-md text-685b44 ">
            Family Legacy Wealth Partners
            <br /> 843 Penniman Ave | Plymouth, MI 48170 <br />{" "}
            <a className="text-xl text-685b44" href="https://www.google.com">
              F: 734.259.3074
            </a>
          </p>

          <div className="flex items-center gap-4 mr-32">
            <FontAwesomeIcon className="text-gray-400" icon={faLocationDot} />
            <a className="text-xl text-685b44" href="https://www.google.com">
              Maps and Directions
            </a>
          </div>
        </div>
        <div className="w-1/2">
          <p className="text-xs text-gray-700">
            Raymond James financial advisors may only conduct business with
            residents of the states and/or jurisdictions for which they are
            properly registered. Therefore, a response to a request for
            information may be delayed. Please note that not all of the
            investments and services mentioned are available in every state.
            Investors outside of the United States are subject to securities and
            tax regulations within their applicable jurisdictions that are not
            addressed on this site. Contact your local Raymond James office for
            information and availability. <br /> <br /> Links are being provided
            for information purposes only. Raymond James is not affiliated with
            and does not endorse, authorize or sponsor any of the listed
            websites or their respective sponsors. Raymond James is not
            responsible for the content of any website or the collection or use
            of information regarding any website's users and/or members. <br />{" "}
            <br />
            Investment advisory services offered through Raymond James Financial
            Services Advisors, Inc.. Family Legacy Wealth Partners is not a
            registered broker/dealer and is independent of Raymond James
            Financial Services. <br /> <br />
            <span>
              © 2024 Securities offered through Raymond James Financial
              Services, Inc., member{" "}
              <a
                className="underline text-neutral-800"
                href="https://www.google.com"
              >
                FINRA
              </a>{" "}
              /{" "}
              <a
                className="underline text-neutral-800"
                href="https://www.google.com"
              >
                SIPC
              </a>
              |{" "}
              <a
                className="underline text-neutral-800"
                href="https://www.google.com"
              >
                Legal Disclosures
              </a>{" "}
              |{" "}
              <a
                className="underline text-neutral-800"
                href="https://www.google.com"
              >
                Privacy, Security & Account Protection
              </a>{" "}
              |{" "}
              <a
                className="underline text-neutral-800"
                href="https://www.google.com"
              >
                Terms of Use
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
