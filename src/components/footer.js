import React from "react";
import Sitemetadata from "./sitemetadata";

const Footer = () => (
  <div>
    <Sitemetadata />
  </div>
);

const Contact = () => (
  <div className="contact">
    <h1 className="contacttext">CONTACT US</h1>
    <br />
    <address className="address">
      Kalinga Nagar,Ghatikia
      <br />
      CET, Bhubaneswar
      <br />
      Odisha
    </address>
    <span>
      <i className="fa fa-envelope" />
      <a href="">jgadgskls</a>
    </span>
    <span>
      <i className="fa fa-phone" />
      <a href="tel:1-847-555-5555">1-847-555-5555</a>
    </span>
    <span>
      <a href="">
        <i className="fa fa-facebook-f" />
      </a>
      <a href="">
        <i className="fa fa-github" aria-hidden="true" />
      </a>
      <a href="">
        <i className="fa fa-twitter" />
      </a>
    </span>
  </div>
);
