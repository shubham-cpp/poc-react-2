import { ReactElement } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Footer = (): ReactElement => {
  return (
    <footer className="fixed-md-bottom sticky-sm-bottom">
      <p className="text-center">
        <span>
          <AiFillFacebook />{" "}
        </span>
        <span>
          <AiFillInstagram />{" "}
        </span>
        <span>
          <AiFillTwitterSquare />{" "}
        </span>
      </p>
      <h1 className="fs-6 text-center">
        {"Copyright © "}
        Learning Curve Public School {"  "}
        {new Date().getFullYear()}
        {"."}
      </h1>
    </footer>
  );
};

export default Footer;
