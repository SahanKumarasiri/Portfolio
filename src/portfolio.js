/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Sahan Kumarasiri",
  title: "Hi all, I'm Sahan",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / ReactJS / NodeJS / Flutter and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1uzBPS5nF5lBSGhqBUnd379la4ke0dVvd?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SahanKumarasiri",
  linkedin: "https://www.linkedin.com/in/sahankumarasiri/",
  gmail: "kumarsirisahan@gmail.com@gmail.com",
  gitlab: "https://gitlab.com/SahanKumarasiri",
  facebook: "https://www.facebook.com/Sahan.R.Inc",
  medium: "https://medium.com/@SahanKumarasiri",
  stackoverflow: "https://stackoverflow.com/users/16866691/sahan-kumarasiri",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Docker"
    ),
    emoji("⚡ Develop interactive Mobile Applications using Flutter")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sri Lanka Institute of Information Technology",
      logo: require("./assets/images/SLIIT_Logo_Crest.png"),
      subHeader:
        "Bsc.(Hons) Information Technology | specialization in Sofftware Engineering",
      duration: " 2020 -  2024",
      desc: "The largest IT degree awarding institute in Sri Lanka in the field of Information Technology, ...",
      descBullets: []
    },
    {
      schoolName: "Ibbagamuwa Central College",
      logo: require("./assets/images/icc.png"),
      subHeader: "Ordinary Level + Advanced Level",
      duration: "2010 -  2018",
      desc: "Ordinary Level = 7A passes, 1 B pass, 1 C pass || Advanced Level = Combined Mathematics - C pass, Physics - S pass, ICT - B pass "
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineering Student",
      company: "SLIIT",
      companylogo: require("./assets/images/SLIIT_Logo_Crest.png"),
      date: "2020 – Present",
      desc: "The largest IT degree awarding institute in Sri Lanka in the field of Information Technology."
    },
    {
      role: "Trainee Software Engineer",
      company: "One Billion Technology",
      companylogo: require("./assets/images/1bt.png"),
      date: "2022 – Present",
      desc: "1 Billion Tech is an innovative software engineering services and technology product consulting company headquartered in Silicon Valley, USA.      "
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/login.png"),
      projectName: "Thaulla Bojun",
      projectDesc: "Online Food Ordering & Delivery Management System",
      footerLink: [
        {
          name: "Visit Repo",
          url: "https://github.com/SLIIT-IT-Project-2021/Thaulla-Bojun"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/logo.png"),
      projectName: "Free Cracked Softwares",
      projectDesc:
        "We are non-profitable Organization. ADs FreeS imple to Handle.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://onlinesoftwaresolutions.000webhostapp.com/"
        }
      ]
    },
    {
      image: require("./assets/images/amaya.png"),
      projectName: "Amaya Bookstore",
      projectDesc: "Full Stack MERN Web Application for Bookstore",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://amaya-bookstore.herokuapp.com/"
        }
      ]
    },
    {
      image: require("./assets/images/sithuwili.png"),
      projectName: "Sithuwili",
      projectDesc: "Mobile Application | Flutter",
      footerLink: [
        {
          name: "Download APK",
          url: "https://www.mediafire.com/file/fxnpnqelzjub86y/Sithuwili.apk/file"
        }
      ]
    },
    {
      image: require("./assets/images/ASR.png"),
      projectName: "ASR Screen Recorder",
      projectDesc: "Desktop Application | Electron",
      footerLink: [
        {
          name: "Download",
          url: "https://www.mediafire.com/file/1ry0r2ls18xj0fp/ASR_ScreenRecorder_Setup_1.0.0.exe/file"
        }
      ]
    },
    {
      image: require("./assets/images/SRP.png"),
      projectName: "SLIIT Research Portal",
      projectDesc: "Web Application | MERN Stack",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sliit-research-portal.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/sg.jpg"),
      projectName: "SquadGurus",
      projectDesc: "Company Project | @1billiontechnology",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://app.squadgurus.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "First Year First Semester",
      subtitle: "3.41 GPA",
      image: require("./assets/images/gpa1.PNG"),
      footerLink: [
        {
          name: "View Result",
          url: "https://i.ibb.co/myHkZxs/gpa1.png"
        }
      ]
    },
    {
      title: "First Year Second Semester",
      subtitle: "3.23 GPA",
      image: require("./assets/images/gpa2.PNG"),
      footerLink: [
        {
          name: "View Result",
          url: "https://i.ibb.co/J2QkRfV/gpa2.png"
        }
      ]
    },

    {
      title: "Second Year First Semester",
      subtitle: "3.54 GPA",
      image: require("./assets/images/gpa3.PNG"),
      footerLink: [
        {
          name: "View Result",
          url: "https://i.ibb.co/0jsc1V2/gpa3.png"
        }
      ]
    },
    {
      title: "Second Year Second Semester",
      subtitle: "3.312 GPA",
      image: require("./assets/images/Screenshot 2022-01-02 175948.png"),
      footerLink: [
        {
          name: "View Result",
          url: "https://i.ibb.co/2kWGd3v/Screenshot-2022-01-02-175948.png"
        }
      ]
    },
    {
      title: "Third Year First Semester",
      subtitle: "2.92 GPA",
      image: require("./assets/images/Screenshot 2022-12-04 134545.png"),
      footerLink: [
        {
          name: "View Result",
          url: "https://i.ibb.co/LnyXvGD/Screenshot-2022-12-04-134545.png"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

//Channel Section
const channelSection = {
  title: emoji("Youtube Videos 📽️"),
  subtitle: "Begin With Lower Level that I have done !",

  channelCards: [
    {
      title: "React Redux Series  ",
      subtitle: "Sinhala for Beginners",
      footerLink: [
        {
          name: "YouTube PlayList ➡️",
          url: "https://www.youtube.com/embed/0O6YokAbd3Q?list=PLOQzOAMEi30dnbXTAbsos5kCLbjbxiLcE",
          ytPlayListUrl:
            "https://www.youtube.com/playlist?list=PLOQzOAMEi30dnbXTAbsos5kCLbjbxiLcE"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/@SahanKumarasiri/s-o-l-i-d-principles-javascript-version-controlling-nosql-735a6106c9b0",
      title: "S.O.L.I.D Principles | JavaScript | Version Controlling | NoSQL",
      description:
        "Before moving to the S.O.L.I.D Principles, let’s dive in to the OOP(Object Oriented Programming) concepts. There are mainly four aspects such as Abstraction, Encapsulation, Inheritance and Polymorphism. So, S.O.L.I.D principles are placed on top of the OOP concepts."
    },
    {
      url: "https://medium.com/@SahanKumarasiri/deep-dive-into-js-promises-callbacks-iife-es6-features-version-controlling-nosql-972988c0b15a",
      title:
        "Deep dive into JS Promises & Callbacks| IIFE | ES6 Features | Version Controlling | NoSQL",
      description:
        "In the JavaScript language, there is no such thing as a ‘callback,’ it’s only a convention. Unlike most functions, which return a result immediately, callback-based functions need time to produce a result. The term ‘asynchronous,’ often known as ‘async,’ simply means ‘takes some time’ or ‘happens later, not immediately.’ Callbacks are typically used solely when doing I/O, such as downloading files, reading files, interacting to databases, and so on."
    },
    {
      url: "https://medium.com/@SahanKumarasiri/javascript-frameworks-libraries-9b09e61db215",
      title: "JavaScript Frameworks & Libraries",
      description:
        "In the modern industry, there are so many frameworks and libraries such as Django, Ruby on Rails, Laravel and Spring Boot. Concerning the web development, JavaScript frameworks are in the lead. They are ReactJS (React is a library), AngularJS, VueJS and EmberJS are some of the frontend development frameworks. After introducing the NodeJS runtime environment, we can run JS in the backend also. There are some popular framworks available for backend development such as ExpressJS and KoaJS."
    },
    {
      url: "https://medium.com/@SahanKumarasiri/concept-behind-the-koa-d741566e4e41",
      title: "Concept Behind The Koa",
      description:
        "Koa is a new web framework designed by the team behind Express, which aims to be a smaller, more expressive, and more robust foundation for web applications and APIs. By leveraging async functions, Koa allows you to ditch callbacks and greatly increase error-handling. Koa does not bundle any middleware within its core, and it provides an elegant suite of methods that make writing servers fast and enjoyable."
    },
    {
      url: "https://medium.com/@SahanKumarasiri/java-spring-boot-graphql-docker-502fde5fa2ea",
      title: "Java-Spring Boot | GraphQL | Docker",
      description:
        "Spring Boot is an open source, microservice-based Java web framework. The Spring Boot framework creates a fully production-ready environment that is completely configurable using its prebuilt code within its codebase."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [{}],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "0776135690",
  email_address: "kumarasirisahan@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  channelSection
};
