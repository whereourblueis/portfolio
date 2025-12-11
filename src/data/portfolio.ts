// 포트폴리오 데이터 - 여기서 내용을 수정하세요

export const personalInfo = {
  name: "이수현",
  title: "프론트엔드 개발자",
  email: "esuhyun0416@gmail.com",
  github: "https://github.com/LeeSuHyun0",
  description: "사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다. React와 Next.js를 활용한 웹 애플리케이션 개발에 열정을 가지고 있습니다.",
  shortBio: "안녕하세요! 저는 사용자 중심의 웹 경험을 만들어가는 프론트엔드 개발자입니다.",
};

export const skills = {
  frontend: [
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "JavaScript", icon: "javascript" },
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
  ],
  backend: [
    { name: "Java", icon: "java" },
    { name: "Spring Boot", icon: "spring" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Python", icon: "python" },
    { name: "MySQL", icon: "mysql" },
  ],
  tools: [
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "VS Code", icon: "vscode" },
    { name: "Docker", icon: "docker" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "E-commerce 플랫폼",
    description: "React와 Next.js를 활용한 풀스택 이커머스 웹사이트입니다. 장바구니, 결제 시스템, 사용자 인증 기능을 구현했습니다.",
    image: "/projects/ecommerce.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/ecommerce",
    featured: true,
  },
  {
    id: 2,
    title: "실시간 채팅 앱",
    description: "Socket.io를 활용한 실시간 채팅 애플리케이션입니다. 그룹 채팅, 1:1 채팅, 파일 공유 기능을 지원합니다.",
    image: "/projects/chat.png",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/chat-app",
    featured: true,
  },
  {
    id: 3,
    title: "날씨 대시보드",
    description: "OpenWeather API를 활용한 날씨 정보 대시보드입니다. 위치 기반 날씨 정보와 5일 예보를 제공합니다.",
    image: "/projects/weather.png",
    technologies: ["React", "Chart.js", "OpenWeather API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/weather-app",
    featured: false,
  },
  {
    id: 4,
    title: "포트폴리오 웹사이트",
    description: "Next.js와 Tailwind CSS로 만든 개인 포트폴리오 웹사이트입니다.",
    image: "/projects/portfolio.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/portfolio",
    featured: false,
  },
];

export const experiences = [
  {
    id: 1,
    company: "ABC 테크",
    position: "프론트엔드 개발자",
    period: "2023.03 - 현재",
    description: [
      "React와 TypeScript를 활용한 웹 애플리케이션 개발",
      "사용자 경험 개선을 위한 UI/UX 최적화",
      "코드 리뷰 및 주니어 개발자 멘토링",
    ],
  },
  {
    id: 2,
    company: "XYZ 스타트업",
    position: "프론트엔드 개발자 인턴",
    period: "2022.06 - 2023.02",
    description: [
      "Vue.js 기반 대시보드 개발",
      "REST API 연동 및 상태 관리",
      "반응형 웹 디자인 구현",
    ],
  },
];

export const education = [
  {
    id: 1,
    school: "한국대학교",
    degree: "컴퓨터공학과 학사",
    period: "2018.03 - 2022.02",
    description: "웹 프로그래밍, 알고리즘, 데이터베이스 등 전공 과목 이수",
  },
  {
    id: 2,
    school: "프로그래머스 부트캠프",
    degree: "프론트엔드 개발 과정",
    period: "2022.03 - 2022.05",
    description: "React, JavaScript 심화 과정 수료",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Next.js 13 App Router 완벽 가이드",
    excerpt: "Next.js 13의 새로운 App Router에 대해 알아봅니다. 파일 기반 라우팅부터 서버 컴포넌트까지...",
    date: "2024.01.15",
    tags: ["Next.js", "React"],
    url: "/blog/nextjs-app-router",
  },
  {
    id: 2,
    title: "TypeScript 타입 가드 활용하기",
    excerpt: "TypeScript에서 타입 가드를 효과적으로 사용하는 방법과 실제 활용 사례를 소개합니다.",
    date: "2024.01.10",
    tags: ["TypeScript"],
    url: "/blog/typescript-type-guards",
  },
  {
    id: 3,
    title: "Tailwind CSS로 다크모드 구현하기",
    excerpt: "Tailwind CSS를 사용하여 손쉽게 다크모드를 구현하는 방법을 알아봅니다.",
    date: "2024.01.05",
    tags: ["CSS", "Tailwind"],
    url: "/blog/tailwind-dark-mode",
  },
];

export const navLinks = [
  { name: "소개", href: "#about" },
  { name: "기술", href: "#skills" },
  { name: "프로젝트", href: "#projects" },
  { name: "경력", href: "#experience" },
  { name: "블로그", href: "#blog" },
];