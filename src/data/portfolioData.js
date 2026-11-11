// ============================================================
// portfolioData.js — Syed Afraz Portfolio Data
// This file controls all text and links on the website.
// ============================================================

export const personalInfo = {
  name: "Syed Afraz",
  firstName: "Syed Afraz",
  brandName: "Syed Afraz",
  title: "Java Full Stack Developer",
  location: "Mysore, Karnataka, India",
  phone: "+91 97427 90474",
  emails: {
    primary: "syedafraz2005@gmail.com",
    secondary: "",
  },
  summary: "BCA graduate and aspiring Java Full Stack Developer with a strong foundation in Core Java, object-oriented programming, SQL and front-end development, plus working knowledge of Python.",
  resumeUrl: "/Syed_Afraz_Resume.pdf",
};

export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/syedafraz2005-png",
  linkedin: "https://www.linkedin.com/in/syed-afraz-72359729a",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Syed Afraz",
  titleHighlight: "Java Full Stack Developer",
  subtitle: "Building robust, scalable back-end architectures and seamless web experiences with Java, Python, and modern relational databases.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:syedafraz2005@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Syed_Afraz_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Syed Afraz</span>, an aspiring Java Full Stack Developer based in Bengaluru, India. I specialize in Core Java, object-oriented design, relational databases, and modern web application development, sharpening my skills through the placement training program at TAP Academy. Driven by curiosity and clean architecture, I build reliable, production-ready solutions from concept to deployment.`,
  techStack: ["Java", "Python", "SQL", "Django", "JavaScript", "MySQL"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A methodical engineering approach from requirements to clean production code.",
  cards: [
    { number: "01", title: "Research", text: "Analyze requirements, study edge cases, and architect modular data flow." },
    { number: "02", title: "Design", text: "Craft normalized relational database schemas and clean component layouts." },
    { number: "03", title: "Develop", text: "Implement robust OOP business logic, CRUD endpoints, and responsive UIs." },
    { number: "04", title: "Deploy", text: "Test thoroughly, optimize queries, and ship maintainable applications." },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [
        { name: "Java (Core & OOP)" },
        { name: "Python" },
        { name: "SQL" },
        { name: "JavaScript" },
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML5 & CSS3" },
        { name: "JavaScript (ES6+)" },
        { name: "Django" },
        { name: "REST APIs" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL" },
        { name: "Database Design" },
        { name: "Normalization" },
        { name: "JDBC" },
      ],
    },
    {
      title: "Tools & Concepts",
      skills: [
        { name: "Git & GitHub" },
        { name: "Eclipse / VS Code" },
        { name: "MySQL Workbench" },
        { name: "Data Structures & OOP" },
      ],
    },
  ],
};

export const leadershipList = [
  {
    title: "Technical Symposium & Coding Challenges",
    description: "Coordinated technical coding rounds and peer-learning workshops focused on algorithms, Java, and web technologies.",
    role: "Student Coordinator",
    badge: "Leadership",
  },
  {
    title: "Computer Applications Club & Hackathons",
    description: "Collaborated with student developers to design full-stack prototypes and participate in inter-college software competitions.",
    role: "Core Member",
    badge: "Community",
  },
];

export const internshipsList = [
  {
    organization: "Ethnotech Academy (in association with NSDC & Maharaja Institute of Technology)",
    role: "Full Stack Development Intern",
    duration: "Feb 2026 – Mar 2026",
    skills: ["Front-End Fundamentals", "Back-End Logic", "Database Integration", "CRUD Operations", "Version Control"],
    tech: ["Python", "Django", "MySQL", "HTML5", "CSS3", "JavaScript", "Git"],
  },
];

export const softSkillsList = [
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborate effectively across version control workflows and group code reviews." },
  { name: "Problem Solving", icon: "🧩", desc: "Break complex algorithmic and back-end logic challenges into modular steps." },
  { name: "Communication", icon: "💬", desc: "Articulate architectural decisions and technical findings clearly to evaluators." },
  { name: "Adaptability", icon: "🔄", desc: "Rapidly learn and incorporate new frameworks, libraries, and best practices." },
];

export const projects = [
  {
    id: "instagram-clone",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Instagram Clone – Social Media Web Application",
    description: "Full-featured social media platform featuring user authentication, profile management, image posts, and reels, backed by a normalized MySQL schema.",
    techTags: ["Python", "Django", "MySQL", "JavaScript", "HTML5", "CSS3"],
    links: { github: "https://github.com/syedafraz2005-png", demo: "" },
    isFlagship: true,
  },
  {
    id: "polls-analysis",
    number: "02",
    badge: null,
    title: "Polls Analysis System",
    description: "Interactive voting and analytics application enabling users to cast ballots and view real-time ranked results with role-based admin security.",
    techTags: ["Python", "Django", "MySQL", "JavaScript", "HTML5", "CSS3"],
    links: { github: "https://github.com/syedafraz2005-png", demo: "" },
    isFlagship: false,
  },
  {
    id: "sentiment-analysis",
    number: "03",
    badge: null,
    title: "Sentiment Analysis of Tweets",
    description: "NLP and text mining system preprocessing tweet datasets and classifying sentiment polarity with visual distribution charts.",
    techTags: ["Python", "NLTK", "Pandas", "Matplotlib"],
    links: { github: "https://github.com/syedafraz2005-png", demo: "" },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Certificate of Internship – Python Full Stack Development",
      issuer: "Ethnotech Academy (NSDC Affiliated)",
      icon: "🏅",
    },
  ],
  viewAllUrl: "https://www.linkedin.com/in/syed-afraz-72359729a",
};

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "MIT Degree College, Mysore, Karnataka, India",
  cgpa: "2023 – 2026",
  graduation: "2026",
  twelfth: "Pre-University Course (PUC), Science | 2021 – 2023 — Vidyavardhaka PU College, Mysore, Karnataka, India",
  tenth: "",
};

export const footerContent = {
  taglines: ["Java Full Stack Developer", "Core Java · SQL · Web Development", "Building Scalable Digital Experiences"],
  credential: "BCA Graduate",
  copyright: `© ${new Date().getFullYear()} Syed Afraz | Built with React`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

export default personalInfo;

