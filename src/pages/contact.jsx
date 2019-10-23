import React, { Component } from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import Obfuscate from "react-obfuscate";
import { FaEnvelopeO, FaCodepen, FaGithub, FaFacebook, FaInstagram, FaVk, FaHome, FaWechat } from "react-icons/lib/fa/";
import Helmet from "react-helmet";
import Maps from '../components/Maps';


export default props => (
    <div className="c-content-box">
      <Helmet title="Contact me" />

      <HeadlineWithFocus>
        You can get in touch <span>anytime via</span>
      </HeadlineWithFocus>
       <Maps/>

      
     
      <ul className="c-contact-list">
        <li className="c-contact-list__item">
          <FaEnvelopeO />
          <Obfuscate email="uk2709@gmail.com" />
        </li>
        <li className="c-contact-list__item">
          <FaCodepen />
          <a
            href="https://codepen.io/AK-47/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Codepen
          </a>
        </li>
        <li className="c-contact-list__item">
          <FaGithub />
          <a
            href="https://github.com/YKalashnikov"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li className="c-contact-list__item">
          <FaFacebook/>
          
          <a
            href="https://www.facebook.com/iurii.kalashnikov?"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </li>
        <li className="c-contact-list__item">
          <FaInstagram/>
          
          <a
            href="https://www.instagram.com/yuriikalashnikov/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
        <li className="c-contact-list__item">
          <FaVk/>
          <a
            href="https://vk.com/kalashnikov27"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vk
          </a>
        </li>
        <li className="c-contact-list__item">
          <FaWechat/>

          <a
             href= "https://drive.google.com/open?id=16TQU3CDHx2TkojdxAp8uGw_9haMXjQeR"
             target="_blank"
             rel="noopener noreferrer">
          
             kalashnikovyurii
          </a>
        </li>
      </ul>
      
      <h2
        className={`
        js-action-button-anchor
        c-content-box__subheadline 
        c-content-box__subheadline--with-button
      `}
      >
        One more thing
      </h2>
    </div>
  );



