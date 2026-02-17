import user_image from './user-image.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import DisasterWatch from './DisasterWatch.png';
import figma from './figma.png';
import canva from './canva.jpg'
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-image.jpg';
import download_icon from './download-icon.png';
import logo from './logo.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import intelij_idea from './intelij_idea.jpg';
import mysql from './mysql.png';
import home from './home.png';
import github_white from './github_white.png';
import Work1 from './Work1.png';
import nodejs from './Nodejs.png';
import github from './github_icon.png';
import linkedin from './linkedin_icon.png';
import paymentGateway from './paymentGateway.png';
import userManagement from './userManagementSystem.png';
import shoppingMart from './ShoppingMart.png';

export const assets = {
    user_image,
    home,
    github_white,
paymentGateway,
userManagement,
    github,
    code_icon,
    Work1,
    linkedin,
    mysql,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    intelij_idea,
    DisasterWatch,
    project_icon_dark,
    vscode,
    nodejs,
    firebase,
    figma,
    git,
    logo,
    mongodb,
    right_arrow_white,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    canva,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    shoppingMart
};

export const workData = [
  {
    title: 'Travel App',
    description: 'Front End Development',
    bgImage: assets.Work1,
    githubLink: 'https://github.com/Dinuki85/TravelApp',
  },
  {
    title: 'Disaster watch app',
    description: 'Developed responsive UI components and integrated live API data, Performed UI validation & API response testing, Collaborated cross-functionally with backend team for data accuracy',
    bgImage: assets.DisasterWatch,
    githubLink: 'https://github.com/DisasterWatchHQ',
  },
  {
    title: 'NexShift Stratergies',
    description: 'Full Stack Development',
    bgImage: assets.home,
    githubLink: 'https://github.com/Dinuki85/NexShift_Stratergies',
  },
  {
    title: 'Payment Gateway Using Stripe in the SpringBoot ',
    description: 'Integrate payment Gateway in SpringBooot application(Backend Development)',
    bgImage: assets.paymentGateway,
    githubLink: 'https://github.com/Dinuki85/paymentGateway.git',
  },
  {
    title: 'User Management System ',
    description: 'Developed a full-stack user management system allowing real-time Add, View, Edit, and Delete operations with a responsive UI. Implemented RESTful APIs, database operations, and exception handling to ensure scalability and reliability.',
    bgImage: assets.userManagement,
    githubLink: 'https://github.com/Dinuki85/SpringbootCRUDAppliCATION',
  },
  {
    title: 'Shopping Mart ',
    description: 'Developing a Fully working backend with product management(Add to cart,Buy products ,Add,Remove,Update products),User management with role based(Admin,Customer,Seller),All the features like e-commerce website ,User Authentication with Jwt Authentication .',
    bgImage: assets.shoppingMart,
    githubLink: 'https://github.com/Dinuki85/shoppingMart',
  },
   
];

export const mediaData = [
  {
    title: 'Backend Payment Gateway Demo',
    description: 'A demonstration video of backend payment gateway using Springboot and Stripe.',
    video: assets.backend,
  },
];

export const serviceData = [
  {
    icon: assets.web_icon, // Replace with a relevant icon if you want
    title: 'Full Stack Web Development',
    description:
      'Full Stack Web Developer skilled in delivering end-to-end web solutions by integrating modern frontend technologies such as React.js and Next.js with backend frameworks including Spring Boot and Node.js. Experienced in building responsive, scalable, and maintainable applications optimized for user experience and business requirements.',
    link: '',
  },
  {
    icon: assets.web_icon, // Replace with a React/Next.js icon if available
    title: 'Modern Frontend Development',
    description:
      'Skilled in modern frontend development, creating dynamic and SEO-optimized interfaces using React.js and Next.js, styled with Tailwind CSS. Focused on performance, accessibility, and responsive design to deliver seamless user experiences across all devices.',
    link: '',
  },
  {
    icon: assets.web_icon, // Replace with Spring Boot/Node.js icon if available
    title: 'Robust Backend Development',
    description:
      'Experienced in developing robust backend services using Spring Boot and Node.js, with efficient data management via MySQL and MongoDB. Skilled in building RESTful APIs and ensuring seamless integration with frontend applications while maintaining security and high performance.',
    link: '',
  },
];



export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Tech Stack', description: 'HTML, CSS, JavaScript ,React Js, Next Js,Springboot,Node js,Mysql,MongoDB' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'BSc. in Information Technology' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 3 projects' }
];

export const toolsData = [
    assets.vscode, assets.mysql, assets.canva, assets.intelij_idea, assets.mongodb, assets.git
]