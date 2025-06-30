import user_image from './user-image.png';
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
import profile_img from './profile-img.png';
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

export const assets = {
    user_image,
    home,
    github_white,
    
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
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Travel App',
        description: 'Front End Development',
        bgImage: Work1,
         githubLink: 'https://github.com/Dinuki85/TravelApp',
    },
    {
        title: 'Disaster watch app',
        description: 'Contribute to Full Stack Web & Mobile App Development',
        bgImage: DisasterWatch,
        githubLink: 'https://github.com/DisasterWatchHQ',
    },
    {
        title: 'NexShift Stratergies',
        description: 'Full Stack Development',
        bgImage: home,
        githubLink: 'https://github.com/Dinuki85/NexShift_Stratergies',
    }
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Full Stack Web Development', 
        description: 'Full Stack Web Development involves creating both the frontend (user interface) and backend (server-side logic) of web applications.As a Full Stack Developer, you work with technologies like HTML, CSS, and JavaScript to design intuitive, responsive user interfaces, and use backend frameworks and databases to handle data storage, authentication, APIs, and server-side processes. ', link: '' },
    {
        icon: assets.ui_icon, 
        title: 'Design with Canva',
        description: 'Design with Canva offers a powerful platform to create visually stunning graphics, presentations, and documents. It simplifies designing with intuitive drag-and-drop tools, templates, and a vast library of elements to meet your branding and creative needs effortlessly.',
        link: '' 
    },
    {
        icon: assets.web_icon, 
        title: 'Frontend Development',
        description: 'Frontend Development focuses on creating responsive and intuitive user interfaces using cutting-edge tools and technologies. Expertise includes React.js, Tailwind CSS, and Next.js to craft modern, fast-loading, and SEO-friendly web applications.',
        link: '' 
    },
    {
        icon: assets.web_icon, 
        title: 'Backend Development',
        description: 'Backend Development involves building scalable, secure, and efficient server-side applications. Proficiency includes technologies like Spring Boot, Node.js, MySQL, and MongoDB to implement robust APIs, manage databases, and handle server logic effectively.',
        link: '' 
    },

]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Tech Stack', description: 'HTML, CSS, JavaScript ,React Js, Next Js,Springboot,Node js,Mysql,MongoDB' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'BSc. in Information Technology' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 3 projects' }
];

export const toolsData = [
    assets.vscode, assets.mysql, assets.canva, assets.intelij_idea, assets.mongodb, assets.git
]