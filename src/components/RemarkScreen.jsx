import React from 'react';
import Link from 'gatsby-link';
import Obfuscate from 'react-obfuscate';
import { FaPaperPlaneO, FaWrench, FaSmileO } from 'react-icons/lib/fa';
import { IoIosBody, IoAndroidMail } from "react-icons/lib/io/"
import { GoTerminal } from "react-icons/lib/go"

const ForHomePageContent = (
  <div className="c-remark-screen__message">
    <p>
    
      <b>Welcome <FaSmileO/> </b><br /> I am glad that you are here
    </p>
    <p>
      While you're going over the website please keep in mind that:
    </p>
    <p>
       I'm open to <b>full time job</b> offers, and currently I live in <b>San Diego CA</b>.
    </p>
    <p>
      If you feel that I would make a good addition to your team or if you simply want to go hiking, drop me 
      a message at <b><Obfuscate email='uk2709@gmail.com' /></b>.
    </p>
    <p>
      Thank you. Now, you can explore
    </p>
  </div>
);

const ForContactPageContent = (
  <div className="c-remark-screen__message">
    <p>
      <b>Hi my friend <IoIosBody/></b><br /> Before you leave
    </p>
    <p>
    I would like you to join me for adventures, such as connecting with nature, teaching people, making an impact in the world, building apps, solving algorithms and  improving consistently
    </p>
    <p>
      Shoot me a message <IoAndroidMail/> and we'll get connected <b><Obfuscate email='uk2709@gmail.com' /></b>.
    </p>
    <p>
      
    </p>
    <p>
      Thank you and be <b>strong</b>,<br /><br />

      <b>Iurii Kalashnikov &reg; 2018</b>
    </p>
  
  </div>
);

const RemarkScreen = (props) => { 
  const links = [ 
    { path: 'contact', icon: FaPaperPlaneO },
    { path: 'terminal', icon: GoTerminal } 
    
  ];

  return (
    <div className={`c-remark-screen ${props.isActive && 'c-remark-screen--is-active'}`}>
      {props.locationPathName === '/' ? ForHomePageContent : ForContactPageContent}
      {props.locationPathName === '/' &&
        <div className="c-remark-screen__links">
          {
            links.map((link) => (        
              <Link 
                key={link.path}
                className="c-remark-screen__link" 
                to={`/${link.path}/`}
                onClick={props.onClick}
                tabIndex={props.isActive ? '1' : '-1'}
              >
                <link.icon /> {link.path}
              </Link>)
              
            ) 
          }
        </div>
      }

      <div className="c-remark-screen__bg"></div>
    </div>
  )
};

export default RemarkScreen;
