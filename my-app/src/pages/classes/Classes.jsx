import React from 'react';
import './Classes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Classes() {
  
    const dailyClasses = [
        {
          day: 1,
          topic: "Introduction to Programming",
          subTopics: ["What is Programming?", "Programming Languages", "Setting Up Development Environment"],
          description: "An overview of programming, different languages, and setting up tools for development."
        },
        {
          day: 2,
          topic: "JavaScript Basics",
          subTopics: ["Variables & Data Types", "Operators", "Basic Input/Output"],
          description: "Understanding JavaScript syntax, variables, and how to take user input."
        },
        {
          day: 3,
          topic: "Control Structures",
          subTopics: ["Conditional Statements", "Loops (for, while, do-while)", "Switch Case"],
          description: "Exploring different control structures for decision-making and iteration in JavaScript."
        },
        {
          day: 4,
          topic: "Functions in JavaScript",
          subTopics: ["Function Declaration", "Function Expressions", "Arrow Functions"],
          description: "Understanding how to define and use functions effectively in JavaScript."
        },
        {
          day: 5,
          topic: "Arrays and Objects",
          subTopics: ["Array Methods", "Object Properties & Methods", "Looping through Arrays & Objects"],
          description: "Working with arrays and objects, their properties, and useful built-in methods."
        },
        {
          day: 6,
          topic: "DOM Manipulation",
          subTopics: ["Selecting Elements", "Event Handling", "Updating the DOM"],
          description: "Learning how to manipulate the DOM to dynamically update web pages."
        },
        {
          day: 7,
          topic: "ES6 Features",
          subTopics: ["let & const", "Template Literals", "Destructuring", "Spread & Rest Operators"],
          description: "Exploring modern ES6+ JavaScript features to write cleaner and more efficient code."
        },
        {
          day: 8,
          topic: "Asynchronous JavaScript",
          subTopics: ["Callbacks", "Promises", "Async/Await"],
          description: "Understanding how JavaScript handles asynchronous operations using Promises and Async/Await."
        },
        {
          day: 9,
          topic: "APIs and Fetch",
          subTopics: ["REST APIs", "Fetching Data using Fetch API", "Handling API Responses"],
          description: "Working with APIs to fetch data and handle responses using JavaScript."
        },
        {
          day: 10,
          topic: "Introduction to TypeScript",
          subTopics: ["Why TypeScript?", "Type Annotations", "Interfaces & Types"],
          description: "Introduction to TypeScript and how it improves JavaScript development."
        },
        {
          day: 11,
          topic: "Introduction to Angular",
          subTopics: ["What is Angular?", "Setting Up Angular Project", "Angular CLI Basics"],
          description: "Setting up and understanding the basics of Angular framework."
        },
        {
          day: 12,
          topic: "Angular Components",
          subTopics: ["Creating Components", "Component Lifecycle", "Passing Data with @Input & @Output"],
          description: "Exploring components and their lifecycle in Angular."
        },
        {
          day: 13,
          topic: "Angular Directives & Pipes",
          subTopics: ["Structural & Attribute Directives", "Built-in Pipes", "Custom Pipes"],
          description: "Using directives and pipes to enhance UI in Angular applications."
        },
        {
          day: 14,
          topic: "Angular Forms",
          subTopics: ["Template-driven Forms", "Reactive Forms", "Form Validation"],
          description: "Working with forms and validations in Angular."
        },
        {
          day: 15,
          topic: "Angular Routing",
          subTopics: ["Routing Basics", "Lazy Loading", "Route Guards"],
          description: "Implementing routing in Angular applications."
        },
        {
          day: 16,
          topic: "State Management in Angular",
          subTopics: ["Local State", "RxJS and Observables", "NgRx Basics"],
          description: "Managing state effectively in Angular applications."
        },
        {
          day: 17,
          topic: "Introduction to Node.js",
          subTopics: ["What is Node.js?", "Installing Node.js", "Building a Simple Server"],
          description: "Understanding Node.js and creating a basic server using Express."
        },
        {
          day: 18,
          topic: "Express.js Basics",
          subTopics: ["Routing", "Middleware", "Handling Requests & Responses"],
          description: "Working with Express.js to build a REST API."
        },
        {
          day: 19,
          topic: "MongoDB & Mongoose",
          subTopics: ["MongoDB Basics", "Connecting with Mongoose", "CRUD Operations"],
          description: "Understanding MongoDB and how to interact with it using Mongoose."
        },
        {
          day: 20,
          topic: "Authentication & Authorization",
          subTopics: ["JWT Authentication", "User Roles & Permissions", "Securing API Endpoints"],
          description: "Implementing authentication and securing APIs in a Node.js app."
        },
        {
          day: 21,
          topic: "React Basics",
          subTopics: ["JSX & Components", "State & Props", "Handling Events"],
          description: "Understanding the core concepts of React and component-based architecture."
        },
        {
          day: 22,
          topic: "React Hooks",
          subTopics: ["useState", "useEffect", "useContext"],
          description: "Working with React hooks to manage state and effects in functional components."
        },
        {
          day: 23,
          topic: "React Routing",
          subTopics: ["React Router", "Navigation", "Dynamic Routing"],
          description: "Implementing routing in a React application."
        },
        {
          day: 24,
          topic: "Full Stack Integration",
          subTopics: ["Connecting Frontend & Backend", "API Calls", "State Management"],
          description: "Integrating React frontend with Node.js backend for full-stack development."
        },
        {
          day: 25,
          topic: "Project Deployment",
          subTopics: ["Hosting Frontend", "Deploying Backend", "Environment Variables & Security"],
          description: "Deploying the full-stack application and handling security concerns."
        },
        {
            day: 26,
            topic: "Advanced JavaScript Concepts",
            subTopics: ["Closures", "Prototypes", "Event Loop & Microtasks"],
            description: "Deep dive into advanced JavaScript concepts that improve performance and readability."
          },
          {
            day: 27,
            topic: "Unit Testing in JavaScript",
            subTopics: ["Jest Basics", "Mocking Functions", "Testing React Components"],
            description: "Writing unit tests in JavaScript using Jest for better code reliability."
          },
          {
            day: 28,
            topic: "Webpack & Build Tools",
            subTopics: ["Webpack Basics", "Code Splitting", "Tree Shaking"],
            description: "Understanding Webpack and optimizing the build process for web applications."
          },
          {
            day: 29,
            topic: "Angular Services & Dependency Injection",
            subTopics: ["Creating Services", "Injecting Dependencies", "Using HTTPClient"],
            description: "Building reusable services and handling HTTP requests in Angular."
          },
          {
            day: 30,
            topic: "Progressive Web Apps (PWA) with Angular",
            subTopics: ["Service Workers", "Caching Strategies", "Offline Mode"],
            description: "Making Angular applications work offline using Progressive Web App (PWA) techniques."
          },
          {
            day: 31,
            topic: "GraphQL with Node.js",
            subTopics: ["GraphQL vs REST", "Setting Up Apollo Server", "Query & Mutation"],
            description: "Building APIs using GraphQL and integrating them with a Node.js backend."
          },
          {
            day: 32,
            topic: "Server-Side Rendering (SSR) in React",
            subTopics: ["Next.js Basics", "Static & Dynamic Rendering", "API Routes"],
            description: "Exploring server-side rendering with Next.js for better SEO and performance."
          },
          {
            day: 33,
            topic: "Microservices Architecture",
            subTopics: ["What are Microservices?", "Building Microservices with Node.js", "Service Communication"],
            description: "Understanding the microservices approach and implementing it with Node.js."
          },
          {
            day: 34,
            topic: "Docker & Containerization",
            subTopics: ["What is Docker?", "Creating Docker Images", "Running Containers"],
            description: "Learning how to containerize applications using Docker."
          },
          {
            day: 35,
            topic: "Kubernetes for Beginners",
            subTopics: ["Kubernetes Basics", "Deploying Apps", "Scaling & Load Balancing"],
            description: "Understanding Kubernetes and deploying containerized applications."
          },
          {
            day: 36,
            topic: "CI/CD Pipelines with GitHub Actions",
            subTopics: ["Automating Builds", "Running Tests", "Deploying Apps"],
            description: "Setting up CI/CD pipelines for automated deployments."
          },
          {
            day: 37,
            topic: "Performance Optimization in Web Applications",
            subTopics: ["Lazy Loading", "Code Splitting", "Reducing Bundle Size"],
            description: "Optimizing frontend performance for faster loading times."
          },
          {
            day: 38,
            topic: "Security Best Practices in Web Development",
            subTopics: ["CORS & CSRF Protection", "XSS Prevention", "JWT Security"],
            description: "Securing web applications against common vulnerabilities."
          },
          {
            day: 39,
            topic: "WebSockets & Real-time Communication",
            subTopics: ["Socket.io Basics", "Building a Chat App", "Real-time Notifications"],
            description: "Implementing real-time features using WebSockets and Socket.io."
          },
          {
            day: 40,
            topic: "Serverless Computing with AWS Lambda",
            subTopics: ["What is Serverless?", "Deploying a Function", "Triggering Events"],
            description: "Exploring AWS Lambda and serverless architecture for scalable applications."
          },
          {
            day: 41,
            topic: "State Management in React",
            subTopics: ["Redux Toolkit", "Recoil", "Zustand"],
            description: "Managing application state efficiently in React using modern libraries."
          },
          {
            day: 42,
            topic: "Headless CMS & Content Management",
            subTopics: ["Strapi", "Sanity", "Contentful"],
            description: "Using headless CMS platforms to manage website content dynamically."
          },
          {
            day: 43,
            topic: "SEO & Web Accessibility",
            subTopics: ["SEO Best Practices", "ARIA Attributes", "Lighthouse Audits"],
            description: "Improving website accessibility and SEO for better search ranking."
          },
          {
            day: 44,
            topic: "Blockchain Basics & Smart Contracts",
            subTopics: ["What is Blockchain?", "Building Smart Contracts", "Using Web3.js"],
            description: "Introduction to blockchain technology and writing smart contracts."
          },
          {
            day: 45,
            topic: "Final Project & Code Review",
            subTopics: ["Project Development", "Code Review Process", "Deployment Strategies"],
            description: "Working on a real-world project, reviewing code quality, and deploying the application."
          }
      ];

      const navigate = useNavigate();

  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-12 p-0">
                <div className="top-bar">
                    <button className='border-button' onClick={()=> navigate("/raiseQuery")}>+ Raise Query</button>
                </div>
            </div>
        </div>
        <div className="row mt-2">
            <div className="col-8">
                <div className="head-section">
                    <h6>Please watch the recording.</h6>
                    <button>Play Recording</button>
                </div>
                <div className="class-details-container">
                    <div className="class-head-section">
                        <h5>Day 1: React Basics</h5>
                        <h6>21/08/2023 - Monday - 8:00 AM : 11:00 AM</h6>
                    </div>
                    <div className="class-sub-section">
                        <h6>Topics Covered</h6>
                        <ul>
                            <li>JSX & Components</li>
                            <li>State & Props</li>
                            <li>Handling Events</li>
                            <li>What is context, provide, createContext</li>
                        </ul>  
                        <h6>Pre Read</h6>
                        <ul>
                            <li>https://reactjs.org/docs/context.html</li>
                            <li>https://reactjs.org/docs/hooks-reference.html#usestate</li>
                        </ul>    
                    </div>
                </div>
                <div className="activity-section">
                    <h6>Activities</h6>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                https://docs.google.com/document/d/1ft6tjqQj6dsLbHJ1t2fPHgTQRSZwAE-qBzlxqTqWezw/edit#
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className='d-flex align-items-center gap-2'>
                                    <h6 className='m-0'>Tags</h6>
                                    <span className="badge rounded-pill text-bg-success text-white">React</span>
                               </div>
                               <div className="task-form mt-2">
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label text-muted fw-semibold">Front-end Deployed URL</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="url" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput2" className="form-label text-muted fw-semibold">Front-end Source Code</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="url" />
                                    </div>
                               </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-4">
                <div className="card-class">
                    <div className="card-header">Sessions Roadmap</div>
                    <div className="class-container">
                        { dailyClasses.map((cls, index) => (
                            <div key={index} className="class-round">
                                {cls.day}
                                {/* <div className="connecting-line"></div> */}
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Classes