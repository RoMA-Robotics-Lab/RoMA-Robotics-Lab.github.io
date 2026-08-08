export const applyUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLScF5LEyoz58F21m21-qJtloIQzgKhDZutaSA91BnOp1oHZ89g/viewform?usp=header";

export const researchAreas = [
  {
    slug: "beyond-slam",
    number: "01",
    title: "Beyond SLAM",
    korean: "강건한 위치추정과 지도작성",
    description:
      "We extend SLAM from diverse sensor modalities to multi-robot and multi-session environments, building robust mapping systems for dynamic and challenging real-world conditions.",
    descriptionKo:
      "다양한 센서, 다중 로봇, 반복 주행 환경으로 SLAM을 확장해 동적이고 복잡한 현실에서도 신뢰할 수 있는 지도를 구축합니다.",
    topics: ["Multi-modal SLAM", "Multi-robot SLAM", "Long-term autonomy", "Dynamic environments"],
    visual: "mapping",
  },
  {
    slug: "spatial-intelligence",
    number: "02",
    title: "Spatial Intelligence",
    korean: "공간 지능",
    description:
      "We extend geometric mapping toward spatial intelligence through semantic reasoning, enabling robots to understand, query, and navigate the world around them.",
    descriptionKo:
      "기하학적 지도를 의미 기반 공간 지능으로 발전시켜 로봇이 주변 세계를 이해하고, 질문하고, 목적지까지 이동하게 합니다.",
    topics: ["Semantic mapping", "Object-level localization", "Vision-language navigation", "Scene understanding"],
    visual: "semantic",
  },
  {
    slug: "robotics-mobility",
    number: "03",
    title: "Robotics & Mobility Applications",
    korean: "로보틱스와 모빌리티 응용",
    description:
      "Our research is applied across a wide range of platforms, from autonomous vehicles to diverse robotic systems operating in the field.",
    descriptionKo:
      "자율주행차부터 다양한 로봇 시스템까지 연구 결과를 실제 이동 플랫폼에 적용하고 현장에서 검증합니다.",
    topics: ["Autonomous vehicles", "Mobile robots", "Field robotics", "Intelligent sensing"],
    visual: "mobility",
  },
];

export const selectedPublications = [
  {
    year: "2026",
    venue: "CVPR 2026",
    title: "TherA: Thermal-Aware Visual-Language Prompting for Controllable RGB-to-Thermal Infrared Translation",
    authors: "D.G. Lee, T.H. Rhee, H. Jang, Y. Shin, U. Shin, A. Kim",
    visual: "thermal",
  },
  {
    year: "2026",
    venue: "IEEE RA-L",
    title: "MSG-Loc: Multi-Label Likelihood-Based Semantic Graph Matching for Object-Level Global Localization",
    authors: "G. Lee, J. Lee, J. Kim, Y. Shin, Y. Cho",
    visual: "semantic",
  },
  {
    year: "2025",
    venue: "IEEE T-IV",
    title: "Uni-Mapper: Unified Mapping Framework for Multi-Modal LiDARs in Complex and Dynamic Environments",
    authors: "G. Kang, H. Kim, B. Choi, S. Jeong, Y. Shin, Y. Cho",
    visual: "mapping",
  },
];

export const publications = [
  ...selectedPublications,
  {
    year: "2025",
    venue: "EAAI",
    title: "Leveraging Falling Acceleration and Body Part Clustering for Physics-Based Human Fall Detection with Millimeter Wave Radar",
    authors: "H. Huh, I. Jeong, A. Lee, S. Lee, Y. Shin",
  },
  {
    year: "2025",
    venue: "ICRA 2025",
    title: "Diter++: Diverse Terrain and Multi-Modal Dataset for Multi-Robot SLAM in Multi-Session Environments",
    authors: "J. Kim, H. Kim, S. Jeong, Y. Shin, Y. Cho",
  },
  {
    year: "2024",
    venue: "IEEE T-ASE",
    title: "Object-Aware Impedance Control for Human–Robot Collaborative Task with Online Object Parameter Estimation",
    authors: "J. Park, Y. Shin, S. Kim",
  },
  {
    year: "2023",
    venue: "IAS 2023",
    title: "Efficient Traversability Mapping Based on Single Camera and 3D LiDAR",
    authors: "C. Youn, W. Youn, S. Kim, J. Park, Y. Shin",
  },
  {
    year: "2022",
    venue: "IEEE T-ITS",
    title: "Nonparametric Background Model-Based LiDAR SLAM in Highly Dynamic Urban Environments",
    authors: "J. Park, Y. Cho, Y. Shin",
  },
  {
    year: "2022",
    venue: "IEEE RA-L",
    title: "Vivid++: Vision for Visibility Dataset",
    authors: "A. Lee, Y. Cho, Y. Shin, A. Kim, H. Myung",
  },
  {
    year: "2021",
    venue: "IEEE RA-L",
    title: "3D Ego-Motion Estimation Using Low-Cost mmWave Radars via Radar Velocity Factor for Pose-Graph SLAM",
    authors: "Y. Park, Y. Shin, J. Kim, A. Kim",
  },
  {
    year: "2020",
    venue: "Autonomous Robots",
    title: "DVL-SLAM: Sparse Depth Enhanced Direct Visual-LiDAR SLAM",
    authors: "Y. Shin, Y. Park, A. Kim",
  },
  {
    year: "2020",
    venue: "ICRA 2020",
    title: "Pharao: Direct Radar Odometry Using Phase Correlation",
    authors: "Y. Park, Y. Shin, A. Kim",
  },
];

export const members = [
  { name: "Juhyun Kim", korean: "김주현", role: "Undergraduate Researcher" },
  { name: "Soobin Lee", korean: "이수빈", role: "Undergraduate Researcher" },
  { name: "Taegyu Jang", korean: "장태규", role: "Undergraduate Researcher" },
  { name: "Sihyeong Lee", korean: "이시형", role: "Undergraduate Researcher" },
  { name: "Ian Kim", korean: "김이언", role: "Undergraduate Researcher" },
  { name: "Jihwan Jeon", korean: "전지환", role: "Undergraduate Researcher" },
  { name: "Jinwoo Bae", korean: "배진우", role: "Undergraduate Researcher" },
];

export const newsItems = [
  { date: "2026.08", category: "Member", text: "Juhyun Kim joined RoMA Lab. Welcome!", korean: "김주현 학생이 학부연구생으로 합류했습니다." },
  { date: "2026.07", category: "Paper", text: "One paper (IESM for VLN) was accepted to EAAI in collaboration with KHU.", korean: "IESM for VLN 논문이 EAAI에 게재 승인되었습니다." },
  { date: "2026.07", category: "Member", text: "Soobin Lee and Taegyu Jang joined RoMA Lab.", korean: "이수빈, 장태규 학생이 학부연구생으로 합류했습니다." },
  { date: "2026.07", category: "Event", text: "RoMA Lab organized a special session on spatial intelligence-based mobile robots at ICROS 2026.", korean: "공간지능 기반 이동 로봇 특별 세션을 개최했습니다." },
  { date: "2026.07", category: "Member", text: "Sihyeong Lee joined RoMA Lab. Welcome!", korean: "이시형 학생이 학부연구생으로 합류했습니다." },
  { date: "2026.06", category: "Member", text: "Jinwoo Bae, Jihwan Jeon, and Ian Kim joined RoMA Lab.", korean: "배진우, 전지환, 김이언 학생이 학부연구생으로 합류했습니다." },
  { date: "2026.05", category: "Award", text: "Outstanding Early-Career Researcher Presentation at KSAE 2026 Spring Conference.", korean: "한국자동차공학회 춘계학술대회 신진과학자 세션에서 발표했습니다." },
  { date: "2026.03", category: "Paper", text: "TherA was accepted to CVPR 2026 in collaboration with SNU.", korean: "TherA 논문이 CVPR 2026에 게재 승인되었습니다." },
  { date: "2026.03", category: "Lab", text: "Robotics, Mobility and AI Lab opened at Kyungpook National University.", korean: "경북대학교 AI 로봇 모빌리티 연구실이 문을 열었습니다." },
];
