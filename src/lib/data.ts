export const siteConfig = {
  name: 'Wassil Chuttoo',
  title: 'Wassil Chuttoo — Senior Software Developer in Test',
  description:
    'Senior SDET specializing in enterprise test automation, Playwright frameworks, and quality engineering. Building robust automation solutions for world-class HCM software at Dayforce.',
  url: 'https://wasschuttoo.github.io/portfolio-wassil',
  ogImage: '/CW.png',
  links: {
    linkedin: 'https://linkedin.com/in/wassilchuttoo',
    github: 'https://github.com/wasschuttoo',
    email: 'chelsea.fc.wass@hotmail.com',
    phone: '+230 5488 5938',
  },
  location: 'Vacoas, Mauritius',
};

export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Certifications', href: '/certifications' },
  { name: 'Education', href: '/education' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Contact', href: '/contact' },
];

export const stats = [
  { label: 'Years of Experience', value: 4, suffix: '+' },
  { label: 'Test Coverage Growth', value: 30, suffix: '%+' },
  { label: 'Regression Effort Reduced', value: 40, suffix: '%' },
  { label: 'Promotions in 3 Years', value: 3, suffix: '' },
];

export const experience = [
  {
    title: 'Software Developer in Test – Senior',
    company: 'Dayforce',
    location: 'Ebene, Mauritius',
    period: 'Nov 2025 – Present',
    type: 'Full-time',
    description:
      'Architecting enterprise-scale automation strategy for a global HCM platform serving millions of users worldwide.',
    achievements: [
      'Architecting and owning the end-to-end automation framework strategy for the enterprise HCM platform, setting coding standards and tooling decisions for the team',
      'Contributing directly to development tasks — fixing bugs, building features, and writing production code alongside automation responsibilities',
      'Leading sprint ceremonies as a certified Scrum Master — running planning, retrospectives, and stand-ups while actively removing cross-team blockers',
      'Championing shift-left testing by embedding QA earlier in the development cycle, measurably reducing post-release defect rates',
      'Mentoring junior and mid-level engineers through pair programming, code reviews, and structured feedback sessions',
      'Partnering with Product and Engineering leadership to define acceptance criteria, test scope, and quality gates for major feature releases',
    ],
    technologies: ['Playwright', 'C#', 'TypeScript', 'Azure DevOps', 'React', 'ReqnRoll', 'CI/CD'],
  },
  {
    title: 'Software Developer in Test III',
    company: 'Dayforce',
    location: 'Ebene, Mauritius',
    period: 'Nov 2024 – Oct 2025',
    type: 'Full-time',
    description:
      'Drove 30%+ automation coverage growth and eliminated systemic test flakiness through data-driven root-cause analysis.',
    achievements: [
      'Grew automation framework coverage by 30%+ by designing and integrating new Playwright test suites targeting high-risk user journeys',
      'Diagnosed and eliminated chronic test flakiness through systematic root-cause analysis and targeted refactoring in C# and TypeScript',
      'Automated regression pipelines in Azure DevOps CI/CD, reducing manual regression effort by approximately 40%',
      'Introduced ReqnRoll (BDD) test patterns to bridge communication between business stakeholders and engineering teams',
      'Acted as technical liaison between QA, development, and release management teams to align test delivery with sprint goals',
    ],
    technologies: ['Playwright', 'C#', 'TypeScript', 'Azure DevOps', 'ReqnRoll', 'BDD', 'Selenium'],
  },
  {
    title: 'Software Developer in Test',
    company: 'Dayforce',
    location: 'Ebene, Mauritius',
    period: 'Jun 2022 – Oct 2024',
    type: 'Full-time',
    description:
      'Built the foundational automation framework from the ground up that remains the backbone of the team\'s test infrastructure today.',
    achievements: [
      'Built the foundational automation framework from scratch using Playwright and Selenium, establishing patterns still in production today',
      'Developed reusable test libraries and data-driven test scripts in Java and C#, cutting test authoring time across the team',
      'Contributed to front-end feature development using React and TypeScript alongside automation duties — a true hybrid developer role',
      'Maintained consistently high E2E pass rates by proactively identifying test gaps and collaborating with developers on testability improvements',
      'Documented test architecture, onboarding guides, and runbooks in Confluence; managed defect lifecycle end-to-end in Jira',
    ],
    technologies: ['Playwright', 'Selenium', 'Java', 'C#', 'React', 'TypeScript', 'Docker', 'Jira'],
  },
  {
    title: 'Software Developer in Test – Associate',
    company: 'Dayforce',
    location: 'Ebene, Mauritius',
    period: 'Apr 2022 – May 2022',
    type: 'Full-time',
    description:
      'Rapidly onboarded to an enterprise-scale automation stack and delivered independent test contributions within weeks.',
    achievements: [
      'Rapidly onboarded to the Playwright/Selenium automation stack, delivering first independent test contributions within weeks',
      'Collaborated with senior engineers to implement new automation patterns and improve framework coverage from day one',
    ],
    technologies: ['Playwright', 'Selenium', 'C#', 'Azure DevOps'],
  },
  {
    title: 'Test Engineer – Associate',
    company: 'Accenture Technologies',
    location: 'Ebene, Mauritius',
    period: 'Aug 2021 – Mar 2022',
    type: 'Full-time',
    description:
      'Designed comprehensive test strategies and managed quality assurance across multiple concurrent release cycles.',
    achievements: [
      'Designed comprehensive test cases, decision tables, and test conditions aligned to functional requirements and business rules',
      'Executed functional and regression test cycles, tracking and managing defects through their full lifecycle in Jira',
      'Built structured test datasets to support repeatable, reliable test execution across multiple environments',
      'Maintained test plans and managed execution runs on Azure DevOps across several concurrent release cycles',
    ],
    technologies: ['Azure DevOps', 'Jira', 'SQL', 'Manual Testing', 'Test Planning'],
  },
];

export const skills = {
  'Programming Languages': [
    { name: 'C#', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'JavaScript', level: 90 },
    { name: 'Java', level: 80 },
    { name: 'Python', level: 70 },
    { name: 'SQL', level: 85 },
  ],
  'Automation & Testing': [
    { name: 'Playwright', level: 98 },
    { name: 'Selenium', level: 85 },
    { name: 'SpecFlow / ReqnRoll', level: 90 },
    { name: 'Cucumber', level: 80 },
    { name: 'FitNesse', level: 70 },
    { name: 'Postman', level: 85 },
  ],
  'Frontend Development': [
    { name: 'React', level: 85 },
    { name: 'HTML / CSS', level: 90 },
    { name: 'jQuery', level: 75 },
    { name: 'Tailwind CSS', level: 80 },
  ],
  'DevOps & Cloud': [
    { name: 'Azure DevOps', level: 92 },
    { name: 'CI/CD Pipelines', level: 90 },
    { name: 'Docker', level: 75 },
    { name: 'GitHub Actions', level: 80 },
    { name: 'Jenkins', level: 70 },
  ],
  'Methodologies & Practices': [
    { name: 'Agile / Scrum', level: 95 },
    { name: 'TDD', level: 88 },
    { name: 'BDD', level: 92 },
    { name: 'Shift-Left Testing', level: 90 },
    { name: 'CI/CD', level: 90 },
  ],
  'Tools & Databases': [
    { name: 'Jira', level: 90 },
    { name: 'Confluence', level: 85 },
    { name: 'SSMS', level: 80 },
    { name: 'PGAdmin', level: 75 },
    { name: 'Git', level: 90 },
  ],
  Leadership: [
    { name: 'Team Mentoring', level: 90 },
    { name: 'Scrum Master', level: 88 },
    { name: 'Technical Strategy', level: 85 },
    { name: 'Cross-team Collaboration', level: 92 },
    { name: 'Code Review', level: 90 },
  ],
};

export const projects = [
  {
    title: 'Enterprise E2E Automation Framework',
    description:
      'Designed and built a comprehensive end-to-end automation framework from the ground up for a global HCM platform, now the backbone of all automated testing.',
    problem: 'No existing automation infrastructure; manual testing was slow, expensive, and error-prone across complex user journeys.',
    solution: 'Architected a scalable Playwright + C# framework with reusable page objects, data-driven test patterns, and seamless CI/CD integration.',
    technologies: ['Playwright', 'C#', 'Azure DevOps', 'Docker', 'ReqnRoll'],
    outcomes: ['30%+ coverage growth', '40% reduction in manual regression', 'Sub-10-minute feedback loops'],
    category: 'Automation',
  },
  {
    title: 'CI/CD Pipeline Automation',
    description:
      'Automated regression pipelines in Azure DevOps, enabling continuous quality validation on every commit and release.',
    problem: 'Manual regression cycles were blocking releases and consuming significant engineering hours.',
    solution: 'Built multi-stage Azure DevOps pipelines with parallel test execution, smart retries, and Slack/Teams notifications.',
    technologies: ['Azure DevOps', 'YAML', 'Playwright', 'C#', 'Docker'],
    outcomes: ['~40% reduction in manual effort', 'Faster release cycles', 'Continuous quality feedback'],
    category: 'DevOps',
  },
  {
    title: 'BDD Test Patterns with ReqnRoll',
    description:
      'Introduced Behavior-Driven Development patterns to bridge communication gaps between business stakeholders and engineering.',
    problem: 'Misaligned understanding between business requirements and test coverage led to escaped defects.',
    solution: 'Implemented ReqnRoll (SpecFlow successor) with Gherkin scenarios written collaboratively with product owners.',
    technologies: ['ReqnRoll', 'C#', 'Gherkin', 'SpecFlow', 'Playwright'],
    outcomes: ['Improved stakeholder alignment', 'Living documentation', 'Reduced requirement ambiguity'],
    category: 'Testing',
  },
  {
    title: 'Test Flakiness Eradication',
    description:
      'Systematic initiative to diagnose and eliminate chronic test flakiness across the automation suite.',
    problem: 'Flaky tests eroded team confidence in automation results, leading to ignored failures and escaped bugs.',
    solution: 'Implemented root-cause analysis workflows, retry isolation patterns, and targeted refactoring of timing-sensitive tests.',
    technologies: ['C#', 'TypeScript', 'Playwright', 'Analytics'],
    outcomes: ['Significantly improved test reliability', 'Restored team trust in automation', 'Reduced false positives'],
    category: 'Quality',
  },
  {
    title: 'React Feature Development',
    description:
      'Contributed production-quality React and TypeScript features alongside automation responsibilities, demonstrating full-stack capability.',
    problem: 'Team needed additional frontend development capacity to meet sprint commitments.',
    solution: 'Delivered production React components and TypeScript features while maintaining full automation workload.',
    technologies: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    outcomes: ['Dual-track delivery', 'On-time feature releases', 'Demonstrated hybrid developer value'],
    category: 'Frontend',
  },
];

export const certifications = [
  {
    title: 'ISTQB – Certified Tester Foundation Level (CTFL)',
    issuer: 'ISTQB',
    date: 'September 2023',
    description: 'Industry-standard certification validating software testing fundamentals, test design techniques, and quality assurance practices.',
    skills: ['Test Design', 'Test Management', 'Defect Management', 'Test Levels', 'Risk-Based Testing'],
    verifyUrl: '#',
  },
  {
    title: 'Professional Scrum Master™ I (PSM I)',
    issuer: 'Scrum.org',
    date: 'December 2022',
    description: 'Demonstrates deep understanding of Scrum theory, practices, and the Scrum Master role in guiding teams toward high performance.',
    skills: ['Scrum Framework', 'Sprint Planning', 'Retrospectives', 'Servant Leadership', 'Agile Coaching'],
    verifyUrl: '#',
  },
];

export const education = [
  {
    degree: 'BSc (Hons) Information Systems',
    institution: 'University of Mauritius',
    period: 'Aug 2018 – Aug 2021',
    description: 'Comprehensive study of information systems, software engineering, database management, and business technology alignment.',
    coursework: ['Software Engineering', 'Database Systems', 'Web Development', 'Information Security', 'Project Management'],
  },
  {
    degree: 'Certificate in IT',
    institution: 'BCS (British Computer Society)',
    period: 'Apr 2017 – May 2021',
    description: 'Professional IT certification covering computing fundamentals, systems architecture, and professional practice.',
    coursework: ['Computing Fundamentals', 'Systems Architecture', 'Professional Issues in IT'],
  },
  {
    degree: "HSC 'A' Level",
    institution: 'Phoenix SSS',
    period: 'Nov 2016',
    description: 'Higher School Certificate qualifying for university entrance.',
    coursework: [],
  },
];

export const achievements = [
  {
    title: '3 Promotions in Under 3 Years',
    description: 'Advanced from Associate SDET to Senior SDET at Dayforce — one of the fastest progressions in the organization — reflecting consistent high-impact delivery and technical leadership.',
    category: 'Career Growth',
    icon: 'trophy',
  },
  {
    title: '40% Manual Regression Reduction',
    description: 'Designed and implemented CI/CD pipeline automation in Azure DevOps that eliminated 40% of manual regression effort, freeing engineering time for innovation.',
    category: 'Impact',
    icon: 'trending-up',
  },
  {
    title: '30%+ Automation Coverage Growth',
    description: 'Expanded framework coverage by over 30% in a single role tenure by targeting high-risk user journeys and building scalable test patterns.',
    category: 'Impact',
    icon: 'bar-chart',
  },
  {
    title: 'Dual-Track Contributor',
    description: 'Simultaneously delivered production React/TypeScript features and high-coverage automated test suites — embodying the hybrid developer model.',
    category: 'Technical',
    icon: 'code',
  },
  {
    title: 'Framework Architect',
    description: 'Built the foundational E2E automation framework from scratch that remains the backbone of team testing infrastructure years later.',
    category: 'Technical',
    icon: 'layers',
  },
  {
    title: 'Certified While Working Full-Time',
    description: 'Earned both ISTQB CTFL and PSM I certifications while maintaining full-time delivery commitments — demonstrating continuous professional growth.',
    category: 'Professional Development',
    icon: 'award',
  },
];
