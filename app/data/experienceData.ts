import { Experience } from "@/model/experience";


const experiences: Experience[] = [
    {
      company: "HDFC Life Insurance, Banglore",
      designation: "Software Development Engineer - Frontend",
      isCurrent: true,
      url: "https://www.hdfclife.com/",
      duration: {
        start: "2024",
        end: "Present",
      },
      description: "Software Development Engineer - Frontend",
      points: [
        "Designed and implemented face detection with eye blink detection in frontend, followed by real-time video recording. This feature reduced the liveliness verification failure rate from 33% to under 1%",
        "Lead the frontend system design architecture, optimizing scalability and performance across projects and enhancing reliability and user experience.",
        "AI Platform Dashboard: Developed a dashboard with advanced features: PDF upload and automatic summary generation, Interactive question-answering from uploaded PDFs, Audio upload with accurate transcription capabilities, etc.",
        "Data-Driven Dashboards: Worked on multiple dashboards, delivering insightful and user-friendly interfaces for data analysis and management.",
      ],
      skills: [
        "ReactJS",
        "Angular",
        "Redux.js",
        "NodeJS",
        "AWS",
        "Bootstrap",
        "TailwindCSS",
        "Ant Design",
      ],
      images: [
        {
          title: 'Team Outing HDFC Life',
          src: "https://d2q97ly59pm6yh.cloudfront.net/assets/experience/hdfc_life/team_outing.webp",
        },
        {
          title: 'Team Photo HDFC Life',
          src: "https://d2q97ly59pm6yh.cloudfront.net/assets/experience/hdfc_life/team.webp",
        },
        {
          title: 'HDFC Life Diwali Celebration',
          src: "https://d2q97ly59pm6yh.cloudfront.net/assets/experience/hdfc_life/diwali.webp",
        },
      ]
    },
    {
      company: "Parallel Reality, UK (Remote)",
      designation: "Software Development Engineer",
      isCurrent: false,
      url: "https://www.parallelreality.co.uk/",
      duration: {
        start: "MAR 2021",
        end: "DEC 2023",
      },
      description: "Software Development Engineer",
      points: [
        "Led the front-end development for the EMA project, a ground-breaking Electronic Medical Assistant platform designed for NHS UK.",
        "Developed comprehensive Progressive Web App (PWA) for NHS doctors to manage patient care, featuring:",
          [
            "Prescription Management – Assign and track prescriptions.",
            "Doctor Notes – Send and manage patient notes.",
            "Video & Audio Calls – Secure telehealth consultations.",
            "Performance Tracking – Graph-based patient progress insights.",
            "Patient Onboarding – Seamless registration and profile management.",
            "Real-time Notifications – Instant updates for doctors and patients."
          ],
        "Developed and maintained various components of the EMA system, including admin, representative, and doctor dashboards and developed and integrated RESTful APIs for seamless data handling and communication.",
      ],
      skills: [
        "ReactJS",
        "Angular",
        "NextJS",
        "Redux.js",
        "AWS",
        "NodeJS",
        "Bootstrap",
        "Accessibility",
        "Web Performance",
      ],
      images: [
        {
          title: '',
          src: 'https://d2q97ly59pm6yh.cloudfront.net/assets/experience/parallel_reality/team.webp',
        },
        {
          title: '',
          src: 'https://d2q97ly59pm6yh.cloudfront.net/assets/experience/parallel_reality/ui_discussion.webp',
        },
        {
          title: '',
          src: 'https://d2q97ly59pm6yh.cloudfront.net/assets/experience/parallel_reality/user_profile.webp',
        },
        {
          title: '',
          src: 'https://d2q97ly59pm6yh.cloudfront.net/assets/experience/parallel_reality/appointment.webp',
        }
      ]
    },
    {
      company: "SimplyTurn Technology, Hyderabad (Remote)",
      designation: "Software Development Intern",
      isCurrent: false,
      url: "https://simplyturn.com/",
      duration: {
        start: "SEP 2020",
        end: "DEC 2020",
      },
      description: "Software Development Intern",
      points: [
        "Developed high-performance, reusable components for the HRMS dashboard, enhancing the user experience and functionality. Collaborated with cross-functional teams to implement UI designs, ensuring project requirements.",
        "Integrated RESTful APIs to enable seamless data flow and improve system performance.",
      ],
      skills: [
        "ReactJS",
        "Angular",
        "Bootstrap",
        "TypeScript",
        "Redux",
        "GIT",
        "Figma",
      ],
      images: []
    },
  ];

  export default experiences;
  