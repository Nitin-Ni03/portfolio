export const personalInfo = {
  name: "Nitin Shelke",
  title: "Frontend & React Developer",
  phone: "+91 7666592336",
  email: "nitinshelke2005@gmail.com",
  github: "https://github.com/Nitin-Ni03",
  linkedin: "https://www.linkedin.com/in/nitinshelke", // standard format
  summary: "Aspiring Frontend Developer skilled in React.js, JavaScript, modern CSS layouts, and interactive UI/UX animations. Experienced in building high-performance responsive web applications, REST API integrations, and translating complex design mockups into pixel-perfect interactive frontends."
};

export const skills = {
  design: [
    { name: "Responsive Design", level: 96 },
    { name: "Flexbox & CSS Grid", level: 95 },
    { name: "DOM Manipulation", level: 92 },
    { name: "UI/UX Animations", level: 90 }
  ],
  frameworks: [
    { name: "React.js", level: 92 },
    { name: "Spring Boot", level: 75 },
    { name: "Spring Security & JWT", level: 75 },
    { name: "Hibernate / JPA", level: 70 }
  ],
  languages: [
    { name: "JavaScript (ES6+)", level: 92 },
    { name: "HTML5", level: 95 },
    { name: "CSS3 / Sass", level: 92 },
    { name: "Java", level: 80 }
  ],
  databases: [
    { name: "MySQL", level: 75 },
    { name: "MongoDB", level: 70 }
  ],
  tools: [
    { name: "Git & GitHub", level: 88 },
    { name: "VS Code & Postman", level: 90 },
    { name: "IntelliJ IDEA", level: 80 },
    { name: "Webpack & Vite", level: 85 }
  ],
  concepts: [
    { name: "API Integration", level: 90 },
    { name: "RESTful Services", level: 85 },
    { name: "JWT Authentication", level: 80 },
    { name: "Object-Oriented Programming", level: 82 }
  ]
};

export const projects = [
  {
    title: "BookVerse Online Library Management",
    tech: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "Hibernate", "REST API"],
    github: "https://github.com/Nitin-Ni03/portfolio", // Replace with general repo or portfolio
    bullets: [
      "Built a secure backend library management system using Spring Boot, Spring Security, and MySQL.",
      "Implemented JWT-based authentication and role-based authorization for Admin and User access control.",
      "Developed RESTful APIs for book management, subscriptions, and user operations.",
      "Integrated Hibernate/JPA for efficient database interaction and CRUD functionality.",
      "Performed API testing using Postman and implemented exception handling and input validation."
    ]
  },
  {
    title: "Book Finder App",
    tech: ["React.js", "JavaScript", "CSS3", "Axios", "Open API"],
    github: "https://github.com/Nitin-Ni03/portfolio",
    bullets: [
      "Developed a responsive book search application using React.js and Axios with real-time API integration.",
      "Implemented dynamic search functionality to fetch books by title and author from external APIs.",
      "Designed reusable React components and responsive UI using CSS3, Flexbox, and Grid.",
      "Displayed book details including cover image, author information, and preview links dynamically."
    ]
  },
  {
    title: "Rock Paper Scissor Game",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Nitin-Ni03/portfolio",
    bullets: [
      "Built an interactive Rock-Paper-Scissors game using JavaScript, HTML, and CSS.",
      "Implemented game logic with random computer choices and real-time score updates.",
      "Used DOM manipulation and event handling to create a dynamic user experience.",
      "Designed a responsive and visually interactive interface for smooth gameplay."
    ]
  },
  {
    title: "Memory Card Game",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Nitin-Ni03/portfolio",
    bullets: [
      "Developed an interactive memory matching game using JavaScript with dynamic DOM manipulation.",
      "Implemented card matching logic, score tracking, and responsive gameplay functionality.",
      "Added animations and responsive design techniques to enhance user experience across devices.",
      "Utilized event listeners and array-based logic for efficient game state management."
    ]
  }
];

export const education = [
  {
    college: "KSD.Model College",
    location: "Khambalpada, Dombivli, Maharashtra",
    degree: "B.com – IT, GST and Auditing",
    cgpa: "8.58",
    duration: "July 2023 – April 2025"
  }
];

export const certifications = [
  {
    title: "Full Stack Web Development in JAVA",
    provider: "IT Vedant",
    year: "2026",
    details: "Certification in Web Development Essential, JavaScript Essential, React Essential, MySQL, JAVA, and Spring Boot."
  },
  {
    title: "Data Science & Analysis",
    provider: "HP LIFE online",
    year: "2025",
    details: "Course on leading data science and analytics practices, methodologies, and tools, examining benefits/challenges of a data-driven approach."
  },
  {
    title: "IBM Certification",
    provider: "IBM / Academic Partner",
    year: "2026",
    details: "For Web Development using HTML, SQL and Relational Databases, Java Fundamentals, Microservices with open-source AI technology, and Spring Boot."
  }
];

export const experience = [
  {
    company: "Vehop Enterprises",
    location: "Dombivli, Maharashtra",
    role: "Warehouse Associate",
    duration: "Nov 2024 – Feb 2026",
    bullets: [
      "Managed inventory operations including receiving, labelling, and organizing products to maintain stock accuracy.",
      "Ensured timely order picking, packing, and dispatch to support smooth logistics and on-time delivery.",
      "Operated warehouse equipment safely and followed standard operating procedures to improve efficiency.",
      "Collaborated with team members to optimize workflow and reduce processing errors."
    ]
  }
];
