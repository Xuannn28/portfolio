/**
 * Portfolio - Data
 * @author Goh Jia Xuan 
 * 
 * @description This file contains the data of the projects in the portfolio.
 */

import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.png';

export const projects = [

    {
        name: 'project1',
        title: 'Package Delivery Management Application (PDMA)',
        skills: "AngularJs, Node.js, Express, MongoDB, GoogleAPI, Bootstrap, CloudFirestore, Socket.io",
        description: "A website which allows users to perform CRUD operations (add, delete, update) drivers and packages' detail, including login, sign up features and advanced Google API services such as Cloud Translate API, Text-to-Speech API and Generative AI (Google Gemini API).",
        img: project1,
    },

    {
        name: 'project2',
        title: 'Modelling of Data Analysis',
        skills: 'R',
        description: "A project which involves the use of R programming language to perform data analysis on a dataset. The datasets involved predicting the compressive strength of concrete from various components, learning model in predicting heart disease, and mass spectrometry data smoothing.",
        img: project2,
    },
];