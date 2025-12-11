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
      title: "통합형 진로 상담·성향 프로파일링 플랫폼",
      description: "Python과 SpringBoot, TypeScript를 활용한 웹사이트입니다. 프론트엔드 및 비회원/회원 챗봇, AI를 활용한 어시스턴트 챗봇 기능을 구현하였습니다.",
      image: "/projects/chat.png",
      technologies: ["TypeScript", "SpringBoot", "Python",],
      githubUrl: "https://github.com/team-gbbd/DreamPath.git",
      featured: true,
  },
  {
      id: 2,
      title: "AI 융합 모의면접 & 취업컨설팅 웹 서비스",
      description: "SpringBoot와 React를 활용한 풀스택 웹사이트입니다. 프론트엔드를 전담하여 웹 화면 설계, UX/UI 구현, 사용자 인터렉션 기능을 지원합니다.",
      image: "/projects/ecommerce.png",
      technologies: ["React", "JavaScript"],
      githubUrl: "https://github.com/mic-project/mic-project.git",
      featured: true,
  },
  {
    id: 3,
    title: "베이커리 점주를 위한 플랫폼",
    description: "React를 활용한 빵 스캔/추천/결제를 지원하는 대시보드입니다.",
    image: "/projects/weather.png",
    technologies: ["React", "JavaScript"],
    githubUrl: "https://github.com/team-gbbd/ddbb.git",
    featured: false,
  },
  {
    id: 4,
    title: "실시간 병원 예약 통합 웹 서비스",
    description: "React를 활용한 병원 예약 및 리뷰 시스템을 지원하는 웹사이트입니다.",
    image: "/projects/portfolio.png",
    technologies: ["React", "JavaScript"],
    githubUrl: "https://github.com/mic-project/hospitalreservation.git",
    featured: false,
  },
];

export const experiences = [
  {
    id: 1,
    company: "코리아스픽스(주)",
    position: "연구원",
    period: "2023.04 - 2024.12",
    description: [
      "시/도 토론회 용역 전반 업무",
      "참가자 모집, 설문 및 현장 트러블슈팅",
      "결과보고서 제작 및 사후관리",
    ],
  },
];

export const education = [
  {
    id: 1,
    school: "생성형 AI활용 심화 과정",
    degree: "AI Agent 활용 풀스택 웹개발",
    period: "2025.10 - 2025.12",
  },
  {
    id: 2,
    school: "클라우드 환경 자바 풀스택 웹개발자",
    degree: "SpringBoot 활용 풀스택 웹개발",
    period: "2025.03 - 2022.10",
  },
    {
        id: 3,
        school: "IT융합비즈니스과",
        degree: "부천대학교",
        period: "2020.03 - 2025.02",
    },

];

export const blogPosts = [
  {
    id: 1,
    title: "React?",
    excerpt: "React에 관련된 모든 것을 배워봅시다!",
    tags: ["기술블로그", "React"],
    url: "https://www.notion.so/React-1c286f02afa480149ccbc479c26e5fbf?source=copy_link",
  },
];

export const navLinks = [
  { name: "소개", href: "#about" },
  { name: "기술", href: "#skills" },
  { name: "프로젝트", href: "#projects" },
  { name: "경력", href: "#experience" },
  { name: "노션", href: "#notion" },
];