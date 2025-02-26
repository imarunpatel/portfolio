import { Project } from "../../components/ProjectCard";

const projects: Project[] = [
    {
      name: "Penny Track",
      description: '',
      points: [
          'Developed a full-stack web app for tracking daily expenses with budget management.',
          'Built the frontend with ReactJS, enabling category-based expense tracking and budget setting with graphics insight.',
          'Leveraged a serverless Node.js backend on AWS for efficient, scalable data handling.'
      ],
      techStack: {
        frontend: ['ReactJS', 'Tailwind CSS', 'Zustand'],
        backend: ['NodeJS', 'AWS Serverless Architecture', 'TypeScript'],
      },
      image: '/images/pennyTrack.png',
      link: 'https://d1culq9uiz6gbl.cloudfront.net/',
      github: 'https://github.com/imarunpatel/penny-track-web'
    },
    {
      name: "Skills Track",
      description: "",
      points: [
        "Developed a dynamic blog website using NextJS, with content management powered by Sanity",
        "Implemented Sanity's collaborative editing features, allowing multiple authors to work simultaneously on articles.",
      ],
      techStack: {
        frontend: ["NextJS", "TailwindCSS"],
        backend: ["Sanity"],
      },
      image: "/images/skillsTrack.png",
      link: 'https://skillstrack.in/',
    },
    {
      name: "Royale Mount School",
      description: "Developed a comprehensive school management system consisting of a website for students and parents, an admin mobile app, and a robust backend infrastructure to streamline school operations.",
      points: [
        "Responsive design for students and parents to access school-related information.",
        "Features include announcements, dynamic update of images",
        "Designed scalable RESTful APIs using AWS Lambda, API Gateway, and DynamoDB.",
        "Implemented S3 for storing and serving media files."
      ],
      techStack: {
        frontend: ["Angular", "Flutter"],
        backend: ["Node.js", "AWS Serverless Architecture"],
      },
      image: "/images/rms.png",
      link: 'https://royalmountschool.in/'
    },
    {
      name: 'Todo List',
      description: '',
      points: [
        'Developed a dynamic and user-friendly To-do List application with advanced features, enabling users to create tasks, upload images, and manage task progress seamlessly.',
        'Implemented drag-and-drop functionality, allowing tasks to effortlessly move between different columns, such as “To-do”, “Progress”, and “Done”.'
      ],
      techStack: {
        frontend: ['NextJS', 'Tailwind', 'Zustand'],
        backend: ['Firebase']
      },
      image: '/images/todo.png',
      link: 'https://todo-list-33bd0.firebaseapp.com/',
      github: "https://github.com/imarunpatel/todo-list"
    }
  ];
  
  export default projects;