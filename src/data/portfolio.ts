export const profile = {
  name: 'Arsshad M',
  role: 'Software Engineer · Full-Stack Developer · AI/ML Enthusiast',
  tagline: 'I build practical software solutions at the intersection of engineering, data, and artificial intelligence.',
  location: 'Coimbatore, India',
  email: 'arsshadmaheswaran@gmail.com',
  phone: '+91 8248747652',
  linkedin: 'https://www.linkedin.com/in/arsshad-maheswaran-79a612300',
  github: 'https://github.com/arsshad-13',
  leetcode: 'https://leetcode.com/u/arssh_13_/',
};

export const projects = [
  { number: '01', title: 'Explainable AI-Driven Loan Advisory System', category: 'AI · FinTech · MLOps', description: 'An AI-driven loan advisory platform combining machine learning and SHAP-based explainability to make financial recommendations more transparent. The project also explores model retraining, data-drift detection, performance monitoring, and RAG-powered recommendation generation.', approach: 'The solution brings model predictions and explainability into a full-stack advisory workflow, with an MLOps direction for monitoring and retraining.', contributions: ['Integrated machine-learning workflows into a full-stack advisory application.', 'Applied SHAP-based explainability to communicate influential model features.', 'Designed an MLOps workflow covering retraining, drift detection, and monitoring.', 'Explored RAG-powered recommendation generation.'], stack: ['Python', 'Next.js', 'TypeScript', 'FastAPI', 'Flask', 'XGBoost', 'SHAP', 'RAG', 'Supabase'], featured: true, github: 'https://github.com/kishan0818/Explainable-AI-Driven-MLOps-Framework-for-Fair-Loan-Advisory', frontend: '', backend: '', confidential: false, image: '/images/loan-advisory.webp', visualLabel: 'EXPLAINABLE AI · LOAN ADVISORY', demo: '' },
  { number: '02', title: 'AutoDS AI – Autonomous Data Science Platform', category: 'AI · AutoML · Data Science', description: 'A full-stack AutoML platform designed to automate dataset profiling, preprocessing, feature engineering, and machine-learning model selection. Backend services manage datasets, experiments, and model workflows.', approach: 'The platform structures data preparation and model experimentation into a guided, automatable end-to-end workflow.', contributions: ['Designed dataset profiling and preprocessing stages.', 'Structured feature-engineering and model-selection workflows.', 'Developed backend services to manage datasets and experiments.', 'Built the application using a modern full-stack architecture.'], stack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Shadcn/UI'], featured: true, github: 'https://github.com/arsshad-13/autods-ai', frontend: '', backend: '', confidential: false, image: '/images/autods-ai.webp', visualLabel: 'AUTOML · AUTONOMOUS DATA SCIENCE', demo: '' },
  { number: '03', title: 'AI-Powered Cyber Triage System', category: 'Cybersecurity · Machine Learning', description: 'A machine-learning-based threat detection system for DoS/DDoS traffic using Random Forest. It includes an automated traffic-analysis pipeline, IP-blocking workflow, and monitoring dashboard for threat visualization.', approach: 'Network traffic is analyzed using a machine-learning model, with monitoring and automated IP-blocking functionality supporting the response workflow.', contributions: ['Applied a Random Forest model to DoS/DDoS threat detection.', 'Built an automated network-traffic analysis pipeline.', 'Integrated IP-blocking automation using Windows Firewall.', 'Created a dashboard for threat visualization.'], stack: ['Python', 'Flask', 'Random Forest', 'Wireshark', 'Scapy', 'SQLite', 'Windows Firewall'], featured: true, github: 'https://github.com/kishan0818/CyberTriage', frontend: '', backend: '', confidential: false, image: '/images/cyber-triage.webp', visualLabel: 'CYBERSECURITY · THREAT DETECTION', demo: '' },
  { number: '04', title: 'MailMind AI – Agentic Email Management Platform', category: 'Generative AI · Automation', description: 'An AI-powered Gmail client featuring OAuth 2.0 authentication, email management, composition, and real-time synchronization. Its assistant supports natural-language email search, filtering, navigation, composing, replying, and forwarding through tool-based interactions.', approach: 'MailMind combines Gmail integration with an AI assistant that maps natural-language requests to email actions through tool-based interactions.', contributions: ['Integrated Gmail API access with OAuth 2.0 authentication.', 'Implemented email management, composition, and synchronization capabilities.', 'Designed natural-language interactions for common email workflows.', 'Connected assistant actions through tool-based interactions.'], stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Shadcn/UI', 'Gmail API', 'OAuth 2.0', 'AI Agents'], featured: true, github: 'https://github.com/arsshad-13/nebula-mail-ai-web-app', frontend: '', backend: '', confidential: false, image: '/images/mailmind-ai.webp', visualLabel: 'AGENTIC AI · EMAIL AUTOMATION', demo: '' },
  { number: '05', title: 'SREC E‑Vehicle Tracking System', category: 'IoT · Real-time Systems', description: 'An institutional project that uses GPS-enabled location streaming to support live vehicle tracking. Includes tracking dashboards and alerting mechanisms using WebSockets and map visualization.', approach: 'A GPS-enabled hardware module supplies location data, which is streamed to a web dashboard for map-based live tracking and alerts.', contributions: ['Developed GPS-enabled real-time location streaming.', 'Implemented live tracking dashboards.', 'Added alerting mechanisms using Socket.IO.', 'Integrated Leaflet.js for map visualization.'], stack: ['Node.js', 'React', 'Socket.IO', 'Leaflet.js', 'SIM7600 4G-GPS Module'], featured: false, github: '', frontend: 'https://github.com/Siddharth-138/SREC-EV-Tracker-Frontend', backend: 'https://github.com/Siddharth-138/SREC-EV-Tracker-Backend', confidential: false, image: '/images/ev-tracking.webp', visualLabel: 'IOT · REAL-TIME VEHICLE TRACKING', demo: '' },
  { number: '06', title: 'Post-Discharge Patient Tracking & Appointment Scheduling', category: 'Healthcare · Full-Stack · Industrial Project', description: 'An industrial project developed with Sri Ramakrishna Hospital, Coimbatore. Backend services support patient tracking, appointment scheduling, automated notifications, and dashboards for monitoring follow-up activities.', approach: 'The project supports post-discharge follow-up through appointment scheduling, patient tracking, API services, and monitoring dashboards.', contributions: ['Developed backend services for patient tracking and appointment scheduling.', 'Implemented RESTful APIs for application workflows.', 'Supported automated notification workflows.', 'Built dashboards to monitor appointments and follow-up activities.'], stack: ['React.js', 'Python', 'Flask/Django', 'MySQL', 'REST APIs'], featured: false, github: '', frontend: '', backend: '', confidential: true, image: '/images/patient-tracking.webp', visualLabel: 'HEALTHCARE · PATIENT FOLLOW-UP', demo: '' },
];

export const experience = [
  { role: 'Full-Stack Developer Intern', company: 'Techvolt Software Pvt. Ltd.', location: 'NSR Road, Coimbatore · Onsite', date: 'June 2025', project: 'Smart Supermarket Ordering and Inventory Management System', image: '/images/smart-supermarket.webp', points: ['Engineered a full-stack application supporting product browsing, order processing and tracking, and inventory management.', 'Designed RESTful APIs for product, inventory, and order management with frontend–backend integration.', 'Developed modular backend components to improve data processing, maintainability, and scalability.'] },
  { role: 'Full-Stack Developer Intern', company: 'Techvolt Software Pvt. Ltd.', location: 'NSR Road, Coimbatore · Onsite', date: 'December 2025', project: 'Role-Based Student Records Management System', image: '/images/student-records.webp', points: ['Developed a role-based student management system with authentication and authorization mechanisms.', 'Implemented CRUD-based REST APIs for student record management and data retrieval.', 'Integrated database operations, input validation, and reusable backend components.'] },
];

export const skills = [
  { name: 'Programming Languages', items: ['Java', 'Python', 'SQL', 'C++', 'C'] },
  { name: 'Backend Development', items: ['FastAPI', 'Flask', 'Node.js', 'REST APIs'] },
  { name: 'Frontend Development', items: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { name: 'Databases', items: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'Supabase'] },
  { name: 'AI & Machine Learning', items: ['Machine Learning', 'Generative AI', 'Explainable AI (SHAP)', 'Prompt Engineering', 'RAG', 'MLOps'] },
  { name: 'Cloud & DevOps', items: ['Git', 'GitHub', 'GitHub Actions', 'Vercel'] },
  { name: 'Frameworks & Libraries', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV'] },
  { name: 'Security & Testing', items: ['JWT Authentication', 'Authentication', 'Authorization'] },
];

export const certifications = [
  { provider: 'Amazon Web Services', name: 'AWS Certification', description: 'Cloud fundamentals and services across the AWS ecosystem.', logo: 'https://www.google.com/s2/favicons?domain=aws.amazon.com&sz=128' },
  { provider: 'Cisco', name: 'Networking Basics', description: 'Core networking concepts, connectivity, and network communication.', logo: 'https://www.google.com/s2/favicons?domain=cisco.com&sz=128' },
  { provider: 'MongoDB University', name: 'MongoDB · 13 badges', description: 'Hands-on learning across MongoDB concepts and database workflows.', logo: 'https://www.google.com/s2/favicons?domain=mongodb.com&sz=128' },
  { provider: 'Snowflake', name: 'Snow Pro Certification', description: 'Snowflake data platform concepts and cloud data fundamentals.', logo: 'https://www.google.com/s2/favicons?domain=snowflake.com&sz=128' },
  { provider: 'Wadhwani Foundation', name: 'Employability Skills: Job Ready (With AI)', description: 'Workplace readiness and employability skills with AI.', logo: 'https://www.google.com/s2/favicons?domain=wadhwanifoundation.org&sz=128' },
  { provider: 'NPTEL', name: 'Software Testing', description: 'Software testing principles and quality assurance concepts.', logo: 'https://www.google.com/s2/favicons?domain=nptel.ac.in&sz=128' },
  { provider: 'Securiti', name: 'PrivacyOps · 12 badges', description: 'Privacy operations and data privacy management concepts.', logo: 'https://www.google.com/s2/favicons?domain=securiti.ai&sz=128' },
  { provider: 'Google Developer Student Clubs', name: 'Cybersecurity', description: 'Foundational cybersecurity learning and awareness.', logo: 'https://www.google.com/s2/favicons?domain=developers.google.com&sz=128' },
];
export const achievements = [
  '1st Prize – Paper Presentation, GCT',
  '1st Prize – Project Presentation, GCT',
  '2nd Prize – Youth Zest Paper Presentation, SREC',
  'Finalist (Institution Level) – Smart India Hackathon 2024',
];

export const leadership = [
  { role: 'Executive Member', organization: 'CYSIGMA Club, SREC' },
  { role: 'Club Member', organization: 'Phorartz Club, SREC' },
];

export const careerMilestone = {
  company: 'Blue Yonder',
  title: 'Campus Placement – Selected',
  description: 'Selected through the campus recruitment process. This milestone marks the transition from academic projects and internships toward a professional software engineering career.',
  period: 'November 2026',
};
export const publications = [{ title: 'Explainable AI-Driven MLOps Framework for Fair and Inclusive Loan Advisory', venue: 'IEEE International Conference on Smart Communication and Sustainable Technologies (ICSCST 2026)', status: 'Accepted for presentation; publication forthcoming in IEEE Conference Proceedings.' }];
