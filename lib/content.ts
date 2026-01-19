export const profile = {
  name: "Srinivasulu R",
  role: "AI Engineer | Full-Stack AI Developer",
  summary: "Fresh graduate specializing in AI/ML systems, secure communication platforms, and intelligent automation. Building production-ready AI applications with modern frameworks.",
  location: "Bengaluru, India",
  email: "rrepanasrinivas@gmail.com",
  github: "https://github.com/srinivasulur",
  linkedin: "https://www.linkedin.com/in/srinivasulur",
  resume: "#",
  aboutLines: [
    "Computer Science graduate with hands-on experience building AI-powered applications and secure communication systems.",
    "Passionate about RAG systems, voice AI, and post-quantum cryptography for next-gen applications.",
    "Proficient in Python, Java, C, and modern AI frameworks. Quick learner ready to tackle complex engineering challenges."
  ]
};

export const skillGroups = [
  {
    title: "Programming",
    items: ["Python", "Java", "C", "JavaScript"]
  },
  {
    title: "AI/ML Frameworks",
    items: ["LangChain", "OpenAI API", "RAG Systems", "Voice Recognition"]
  },
  {
    title: "Technologies",
    items: ["Post-Quantum Cryptography", "NLP", "Full-Stack Development", "Git"]
  },
  {
    title: "Concepts",
    items: ["Retrieval Augmented Generation", "Secure Communication", "AI Integration", "System Architecture"]
  }
];

export const showcaseProjects = [
  {
    title: "RAG-Powered Document Q&A System",
    problem: "Organizations struggle to extract insights from large document repositories quickly and accurately.",
    approach: "Built a Retrieval Augmented Generation (RAG) system using LangChain, vector databases, and LLMs to enable intelligent document querying with contextual understanding.",
    tools: ["Python", "LangChain", "OpenAI API", "Vector Database"],
    contribution: "Designed the entire RAG pipeline including document chunking, embedding generation, semantic search, and response synthesis with source attribution.",
    outcome: "Achieved accurate context-aware answers with source citations, reducing manual document search time by 80%+.",
    github: "https://github.com/yourusername/rag-document-qa",
    cover: "/images/project-1.svg"
  },
  {
    title: "Quantum Messaging System",
    problem: "Traditional encryption methods are vulnerable to future quantum computer attacks, risking long-term data security.",
    approach: "Developed a secure communication platform implementing post-quantum cryptographic algorithms for message encryption, ensuring protection against quantum threats.",
    tools: ["Python", "Java", "Post-Quantum Crypto Libraries", "Networking"],
    contribution: "Implemented end-to-end post-quantum encryption, secure key exchange protocols, and a messaging interface with real-time communication.",
    outcome: "Created a quantum-resistant messaging system demonstrating future-proof security for sensitive communications.",
    github: "https://github.com/yourusername/quantum-messaging",
    cover: "/images/project-2.svg"
  },
  {
    title: "Voice-Based Virtual Assistant for Portfolio",
    problem: "Traditional portfolio websites lack interactive, accessible ways for visitors to explore content and engage with the developer's work.",
    approach: "Integrated voice recognition and natural language processing to create an interactive portfolio assistant that responds to voice commands and answers questions about projects, skills, and experience.",
    tools: ["Python", "Speech Recognition", "NLP", "Web Integration"],
    contribution: "Built voice input/output system, command processing logic, and seamless integration with portfolio content for an engaging user experience.",
    outcome: "Enhanced portfolio accessibility and user engagement, showcasing both AI skills and creative problem-solving.",
    github: "https://github.com/yourusername/voice-portfolio-assistant",
    cover: "/images/project-3.svg"
  }
];

export const experienceItems = [
  {
    label: "Academic Projects",
    org: "Computer Science Program",
    role: "Developer",
    period: "2023–2024",
    details: [
      "Built three production-ready AI applications: RAG document Q&A system, quantum-resistant messaging platform, and voice-controlled portfolio assistant.",
      "Demonstrated expertise in modern AI frameworks, cryptography, and full-stack development through hands-on implementation."
    ]
  },
  {
    label: "Self-Learning & Development",
    org: "Independent Study",
    role: "AI/ML Enthusiast",
    period: "2022–Present",
    details: [
      "Continuously learning cutting-edge technologies including LangChain, RAG systems, and post-quantum cryptography.",
      "Active in open-source communities and implementing real-world projects to solve practical problems."
    ]
  }
];

export const certificationList = [
  {
    title: "[Your Certifications Here - Recommended for Tier 1 Companies]",
    issuer: "AWS/Google Cloud/Microsoft Azure",
    year: "2024+"
  },
  {
    title: "Deep Learning Specialization (Recommended)",
    issuer: "Coursera - Andrew Ng",
    year: "In Progress"
  },
  {
    title: "Bachelor of Technology - Computer Science",
    issuer: "[Your University]",
    year: "2024"
  }
];

export const contactInfo = {
  email: profile.email,
  linkedin: profile.linkedin
};

const toSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export const caseStudies = showcaseProjects.map((project) => ({
  slug: toSlug(project.title),
  title: project.title,
  tldr: project.problem,
  problem: project.problem,
  role: project.contribution,
  approach: project.approach,
  architecture: "See repository documentation for architecture diagrams.",
  tech: project.tools,
  results: project.outcome,
  demo: project.github,
  github: project.github,
  learnings: [
    "Structured experiments with clear baselines.",
    "Documented trade-offs and next steps for review.",
    "Kept code reproducible so mentors could verify results."
  ]
}));
