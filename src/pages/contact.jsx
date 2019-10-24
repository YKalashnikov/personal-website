import React, { Component } from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
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
          <a
            href="mailto:uk2709@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
           {/*  Email */}          <FaEnvelopeO />
          </a>
        </li>
        <li className="c-contact-list__item">
         
          <a
            href="https://codepen.io/AK-47/"
            target="_blank"
            rel="noopener noreferrer"
          > <FaCodepen />
            {/* Codepen */}
          </a>
        </li>
        <li className="c-contact-list__item">
         
          <a
            href="https://github.com/YKalashnikov"
            target="_blank"
            rel="noopener noreferrer"
          >
           <FaGithub />
            {/* GitHub */}
          </a>
        </li>
        <li className="c-contact-list__item">
          
          <a
            href="https://www.facebook.com/iurii.kalashnikov?"
            target="_blank"
            rel="noopener noreferrer"
          > <FaFacebook/>
            {/* Facebook */}
          </a>
        </li>
        <li className="c-contact-list__item">
          <a
            href="https://www.instagram.com/yuriikalashnikov/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >          <FaInstagram/>
          {/*   Instagram */}
          </a>
        </li>
        <li className="c-contact-list__item">
          <a
            href="https://vk.com/kalashnikov27"
            target="_blank"
            rel="noopener noreferrer"
          >       <FaVk/>
         {/*    Vk */}
          </a>
        </li>
        <li className="c-contact-list__item">
          <a
             href= "https://drive.google.com/open?id=16TQU3CDHx2TkojdxAp8uGw_9haMXjQeR"
             target="_blank"
             rel="noopener noreferrer">
                    <FaWechat/>
         {/*     kalashnikovyurii */}
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



