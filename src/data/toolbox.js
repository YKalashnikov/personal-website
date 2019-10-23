import { FaEnvelopeO, FaCodepen, FaGithub, FaFacebook, FaInstagram, FaVk, FaHome } from "react-icons/lib/fa/";

const toolbox = [
    {
      id: 1,
      label: "JavaScript",
      description: `Often abbreviated as <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">JS</a>,
        it is a high-level, dynamic, weakly typed,
        prototype-based, multi-paradigm, and interpreted programming language.`,
      comment: `That's the only programming language I use on a daily basis. 
        <b>And I love it!</b>`
       
    },
    {
      id: 2,
      label: "ES2015",
      description: `It's a pseudonym for the latest version of the 
        <a href="https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_-_ECMAScript_2015" target="_blank">
        ECMAScript</a> aka JavaScript.`,
      comment: `ES6 makes my coding easier.`
    },
    {
      id: 3,
      label: "Babel",
      description: `A <a href="https://babeljs.io/" target="_blank">transpiler</a> for JavaScript 
        best known for its ability to turn ES2015 into code that runs in browsers 
        which does not support it directly. It lets us use next generation 
        JavaScript, today.`,
      comment: `That's a <b>must-have</b> tool.`
    },
    {
      id: 4,
      label: "HTML5",
      description: `A markup language used for structuring and presenting content on the 
        World Wide Web. It is the fifth and current major version of the 
        <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank">HTML</a> standard.`,
      comment: `There is no web without HTML.`
    },
    {
      id: 5,
      label: "CSS",
      description: `Cascading Style Sheets - a style sheet 
        <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank">language</a> 
        used for describing the presentation of a document written in HTML.`,
      comment: `CSS makes the web beautiful.`
    },
    {
      id: 6,
      label: "SASS",
      description: `Sass is the most mature, stable, and powerful professional grade CSS extension <a href="http://sass-lang.com/" target="_blank">language</a> 
      in the world.`, 
      comment: `SASS helps me write and manage CSS code faster.`
    },
    {
      id: 7,
      label: "Git",
      description: `Git is a <a href="https://en.wikipedia.org/wiki/Git" target="_blank">version control</a> system for tracking changes 
        in computer files and coordinating work on those files among multiple people.`,
      comment: `It saved my life, a couple of times ;)`
    },
    {
      id: 8,
      label: "Github",
      description: `A web-based Git version control repository hosting service.`,
      comment: `That's my <a href="https://github.com/YKalashnikov" target="_blank">Github</a>`
    },
    {
      id: 9,
      label: "React",
      description: `A JavaScript <a href="https://reactjs.org/" target="_blank">library</a> for building user interfaces. 
        React makes it painless to create interactive UIs. Build encapsulated components 
        that manage their own state and then compose them to make complex UIs.`,
      comment: `I've been in love with it since using it for the first time.`
    },
    {
      id: 10,
      label: "Gatsby",
      description: `A static PWA (Progressive Web App) 
        <a href="https://www.gatsbyjs.org/" target="_blank">generator</a>. Gatsby lets 
        you build blazing-fast sites with your data, whatever the source.`,
      comment: `The website you are looking at now is built with Gatsby.`
    },
    {
      id: 11,
      label: "GraphQL",
      description: `It's a query language for APIs. <a href="http://graphql.org/" target="_blank">GraphQL</a> 
      gives clients the power to ask for exactly what they need and nothing more. I am on my way to master that`,
      comment: `The <a href="https://www.graph.cool/" target="_blank">Graphcool</a> framework.`
    },
   
    {
      id: 12,
      label: "npm/yarn",
      description: `A package <a href="https://www.npmjs.com/" target="_blank">manager</a> for 
        the JavaScript programming language. `,
        comment: `I prefer using yarn fot its speed productivity.`
        
    },
    {
      id: 13,
      label: "Webpack",
      description: `An open-source JavaScript module <a href="https://webpack.js.org/" target="_blank">bundler</a>.
        Webpack takes modules with dependencies and generates static assets representing those modules.`,
        comment:`very convenient and useful.`
    },
    {
      id: 14,
      label: "jQuery",
      description: `A cross-platform JavaScript <a href="https://jquery.com/" target="_blank">library</a> designed to simplify 
        the client-side scripting of HTML.`,
      comment: `I used it often ... in the past.`
    },
    {
      id: 15,
      label: "Wordpress",
      description: `The largest self-hosted <a href="https://wordpress.org/" target="_blank">blogging tool</a>
        in the world, used on millions of sites.`,
      comment: `Easy to start off :) .`
    },
   
    {
      id: 16,
      label: "Python",
      description: ` <a href="https://www.python.org/doc/essays/blurb/" target="_blank">Python</a> is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development 
        .`,
      comment: `. 
        <b>I've not build much using Python as of now</b>`
    },
    {
      id: 17,
      label: "Redux",
      description: ` <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">Redux</a>Redux is a predictable state container for JavaScript apps. It helps to write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.`,
      comment: ` 
        <b>I find it very useful with big projects.</b>`
    },
    {
      id: 18,
      label: "MongoDB",
      description: ` <a href="https://www.mongodb.com/" target="_blank">MongoDB</a> is a document database with the scalability and flexibility that you want with the querying and indexing that you need. `,
      comment: `I use it quite often`
      
    },
    {
      id: 19,
      label: "Bootstrap",
      description: ` <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a> is an open-source JavaScript framework developed by the team at Twitter. It is a combination of HTML, CSS, and JavaScript code designed to help build user interface components. Bootstrap was also programmed to support both HTML5 and CSS3.
        `,
      comment: `i used it a lot in the past`
       
    },
    {
      id: 20,
      label: "Node",
      description: ` <a href="https://nodejs.org/en/" target="_blank">Node</a> is an open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications.
        `,
      comment: `I love NodeJS`
       
    },
    {
      id: 21,
      label: "SAS, SQL",
      description:  `<a href="https://www.sas.com/en_us/home.html" target="_blank">SAS</a> 
      language is a computer programming language used for statistical analysis. <br/>
      <a href="https://en.wikipedia.org/wiki/SQL" target="_blank">SQL</a>
       is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system.`
      ,
      comment: ` 
        <b>I was introduced to them in my data science course in university </b>`
    }
  ]

  export default toolbox;