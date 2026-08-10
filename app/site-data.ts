export const applyUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLScF5LEyoz58F21m21-qJtloIQzgKhDZutaSA91BnOp1oHZ89g/viewform?usp=header";

export type Publication = {
  id?: string;
  year: string;
  venue: string;
  venueFull: string;
  title: string;
  authors: string;
  markedAuthors: string;
  visual?: "mapping" | "semantic" | "thermal" | "mobility";
  image?: string | null;
  imageAlt?: string | null;
  links?: { label: string; url: string }[];
};

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
      "We apply our research across autonomous vehicles, mobile robots, humanoids, and other robotic platforms, validating intelligent systems in real-world environments.",
    descriptionKo:
      "자율주행차, 이동 로봇, 휴머노이드 등 다양한 플랫폼에 연구 기술을 적용하고 실제 환경에서 지능형 시스템의 성능을 검증합니다.",
    topics: ["Autonomous vehicles", "Mobile robots", "Humanoid robots", "Field robotics"],
    visual: "mobility",
  },
];

const iesmPublication: Publication = {
    id: "hong2026iesm",
    year: "2026",
    venue: "EAAI",
    venueFull: "Engineering Applications of Artificial Intelligence (EAAI)",
    title: "Instance-Enriched Semantic Maps for Visual Language Navigation",
    authors: "J. Hong, E. Kang, S. Kim, Y.S. Shin",
    markedAuthors: "J. Hong*, E. Kang*, S. Kim†, Y.S. Shin†",
    visual: "semantic",
    image: "/selected-iesm.webp",
    imageAlt: "Overview of Instance-Enriched Semantic Mapping and multi-type expert fusion for visual-language navigation",
    links: [
      { label: "Paper", url: "https://www.sciencedirect.com/science/article/pii/S0952197626019603" },
      { label: "arXiv", url: "https://arxiv.org/abs/2607.12630" },
      { label: "Project", url: "https://rcilab.github.io/iesm_vln/" },
    ],
};

const msgLocPublication: Publication = {
    id: "lee2026msgloc",
    year: "2026",
    venue: "IEEE RA-L",
    venueFull: "IEEE Robotics and Automation Letters (RA-L)",
    title: "MSG-Loc: Multi-Label Likelihood-Based Semantic Graph Matching for Object-Level Global Localization",
    authors: "G. Lee, J. Lee, J. Kim, Y. Shin, Y. Cho",
    markedAuthors: "G. Lee*, J. Lee, J. Kim, Y. Shin†, Y. Cho†",
    visual: "semantic",
    image: "/selected-msg-loc.webp",
    imageAlt: "MSG-Loc semantic graph matching pipeline with qualitative localization results",
    links: [
      { label: "Paper", url: "https://ieeexplore.ieee.org/abstract/document/11297765" },
      { label: "arXiv", url: "https://arxiv.org/abs/2512.03522" },
      { label: "Project", url: "https://sparolab.github.io/research/msg-loc/" },
      { label: "Video", url: "https://www.youtube.com/watch?v=Nmz_XxtqOr8" },
      { label: "Code", url: "https://github.com/sparolab/MSG-Loc" },
    ],
};

const uniMapperPublication: Publication = {
    id: "kang2025unimapper",
    year: "2025",
    venue: "IEEE T-IV",
    venueFull: "IEEE Transactions on Intelligent Vehicles (T-IV)",
    title: "Uni-Mapper: Unified Mapping Framework for Multi-Modal LiDARs in Complex and Dynamic Environments",
    authors: "G. Kang, H. Kim, B. Choi, S. Jeong, Y. Shin, Y. Cho",
    markedAuthors: "G. Kang*, H. Kim, B. Choi, S. Jeong, Y. Shin†, Y. Cho†",
    visual: "mapping",
    image: "/selected-unimapper.webp",
    imageAlt: "Uni-Mapper multi-modal LiDAR mapping results with dynamic-object removal across four sensor platforms",
    links: [
      { label: "Paper", url: "https://ieeexplore.ieee.org/iel8/7274857/7448921/11057931.pdf" },
      { label: "arXiv", url: "https://arxiv.org/abs/2507.20538" },
      { label: "Project", url: "https://sparolab.github.io/research/uni_mapper/" },
      { label: "Video", url: "https://www.youtube.com/watch?v=SK0TU9Vy3Is" },
      { label: "Code", url: "https://github.com/sparolab/uni-mapper" },
    ],
};

export const publications: Publication[] = [
  iesmPublication,
  {
    year: "2026",
    venue: "CVPR 2026",
    venueFull: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    title: "TherA: Thermal-Aware Visual-Language Prompting for Controllable RGB-to-Thermal Infrared Translation",
    authors: "D.G. Lee, T.H. Rhee, H. Jang, Y. Shin, U. Shin, A. Kim",
    markedAuthors: "D.G. Lee*, T.H. Rhee, H. Jang, Y. Shin, U. Shin, A. Kim†",
    visual: "thermal",
    links: [
      { label: "Paper", url: "https://openaccess.thecvf.com/content/CVPR2026/html/Lee_TherA_Thermal-Aware_Visual-Language_Prompting_for_Controllable_RGB-to-Thermal_Infrared_Translation_CVPR_2026_paper.html" },
      { label: "arXiv", url: "https://arxiv.org/abs/2602.19430" },
      { label: "Code", url: "https://github.com/donkeymouse/TherA" },
    ],
  },
  msgLocPublication,
  uniMapperPublication,
  {
    year: "2025",
    venue: "EAAI",
    venueFull: "Engineering Applications of Artificial Intelligence (EAAI)",
    title: "Leveraging Falling Acceleration and Body Part Clustering for Physics-Based Human Fall Detection with Millimeter Wave Radar",
    authors: "H. Huh, I. Jeong, A. Lee, S. Lee, Y. Shin",
    markedAuthors: "H. Huh*, I. Jeong, A. Lee, S. Lee†, Y. Shin†",
  },
  {
    year: "2025",
    venue: "ICRA 2025",
    venueFull: "IEEE International Conference on Robotics and Automation (ICRA)",
    title: "Diter++: Diverse Terrain and Multi-Modal Dataset for Multi-Robot SLAM in Multi-Session Environments",
    authors: "J. Kim, H. Kim, S. Jeong, Y. Shin, Y. Cho",
    markedAuthors: "J. Kim*, H. Kim, S. Jeong, Y. Shin, Y. Cho†",
    links: [
      { label: "Paper", url: "https://ieeexplore.ieee.org/abstract/document/11128593" },
      { label: "arXiv", url: "https://arxiv.org/abs/2412.05839" },
      { label: "Project", url: "https://sparolab.github.io/research/diter_plus/" },
      { label: "Video", url: "https://www.youtube.com/watch?v=RJ_netgAOT8" },
      { label: "Code", url: "https://github.com/sparolab/DiTer-plusplus" },
    ],
  },
  {
    year: "2024",
    venue: "IEEE T-ASE",
    venueFull: "IEEE Transactions on Automation Science and Engineering (T-ASE)",
    title: "Object-Aware Impedance Control for Human–Robot Collaborative Task with Online Object Parameter Estimation",
    authors: "J. Park, Y. Shin, S. Kim",
    markedAuthors: "J. Park*, Y. Shin†, S. Kim†",
    links: [
      { label: "Paper", url: "https://ieeexplore.ieee.org/document/10721204" },
      { label: "Video", url: "https://www.youtube.com/watch?v=vO1qul85VN0" },
    ],
  },
  {
    year: "2023",
    venue: "IAS 2023",
    venueFull: "International Conference on Intelligent Autonomous Systems (IAS)",
    title: "Efficient Traversability Mapping Based on Single Camera and 3D LiDAR",
    authors: "C. Youn, W. Youn, S. Kim, J. Park, Y. Shin",
    markedAuthors: "C. Youn*, W. Youn, S. Kim, J. Park, Y. Shin†",
    links: [
      { label: "Paper", url: "https://link.springer.com/chapter/10.1007/978-3-031-44851-5_47" },
    ],
  },
  {
    year: "2022",
    venue: "IEEE T-ITS",
    venueFull: "IEEE Transactions on Intelligent Transportation Systems (T-ITS)",
    title: "Nonparametric Background Model-Based LiDAR SLAM in Highly Dynamic Urban Environments",
    authors: "J. Park, Y. Cho, Y. Shin",
    markedAuthors: "J. Park*, Y. Cho†, Y. Shin†",
    links: [
      { label: "Paper", url: "https://ieeexplore.ieee.org/abstract/document/9899274" },
      { label: "Video", url: "https://www.youtube.com/watch?v=YYkVfaubxJg" },
    ],
  },
  {
    year: "2022",
    venue: "IEEE RA-L",
    venueFull: "IEEE Robotics and Automation Letters (RA-L)",
    title: "Vivid++: Vision for Visibility Dataset",
    authors: "A. Lee, Y. Cho, Y. Shin, A. Kim, H. Myung",
    markedAuthors: "A. Lee*, Y. Cho, Y. Shin, A. Kim, H. Myung†",
    links: [
      { label: "Paper", url: "https://ieeexplore.ieee.org/document/9760091" },
      { label: "Project", url: "https://visibilitydataset.github.io/" },
    ],
  },
  {
    year: "2022",
    venue: "Agronomy",
    venueFull: "Agronomy",
    title: "Work Efficiency Analysis of Multiple Heterogeneous Robots for Harvesting Crops in Smart Greenhouses",
    authors: "T. Choi, J. Park, J. Kim, Y. Shin, H. Seo",
    markedAuthors: "T. Choi*, J. Park, J. Kim, Y. Shin, H. Seo†",
    links: [
      { label: "Paper", url: "https://www.mdpi.com/2073-4395/12/11/2844" },
    ],
  },
  {
    year: "2021",
    venue: "IEEE RA-L",
    venueFull: "IEEE Robotics and Automation Letters (RA-L)",
    title: "3D Ego-Motion Estimation Using Low-Cost mmWave Radars via Radar Velocity Factor for Pose-Graph SLAM",
    authors: "Y. Park, Y. Shin, J. Kim, A. Kim",
    markedAuthors: "Y. Park*, Y. Shin, J. Kim, A. Kim†",
    links: [
      { label: "Paper", url: "https://ieeexplore.ieee.org/document/9495184" },
      { label: "Video", url: "https://www.youtube.com/watch?v=TdKtTZgjMBQ" },
    ],
  },
  {
    year: "2020",
    venue: "Autonomous Robots",
    venueFull: "Autonomous Robots",
    title: "DVL-SLAM: Sparse Depth Enhanced Direct Visual-LiDAR SLAM",
    authors: "Y. Shin, Y. Park, A. Kim",
    markedAuthors: "Y. Shin*, Y. Park, A. Kim†",
    links: [
      { label: "Paper", url: "https://link.springer.com/article/10.1007/s10514-019-09881-0" },
    ],
  },
  {
    year: "2020",
    venue: "ICRA 2020",
    venueFull: "IEEE International Conference on Robotics and Automation (ICRA)",
    title: "Pharao: Direct Radar Odometry Using Phase Correlation",
    authors: "Y. Park, Y. Shin, A. Kim",
    markedAuthors: "Y. Park*, Y. Shin, A. Kim†",
    links: [
      { label: "Paper", url: "https://ieeexplore.ieee.org/document/9197231" },
      { label: "Video", url: "https://www.youtube.com/watch?v=RthIBF1UsJ8" },
    ],
  },
  {
    year: "2019",
    venue: "JAGS",
    venueFull: "Journal of the American Geriatrics Society",
    title: "Validation of a Multi-Sensor-Based Kiosk for Short Physical Performance Battery",
    authors: "H.W. Jung, H. Roh, Y. Cho, J. Jeong, Y. Shin, J.Y. Lim, J.M. Guralnik, J. Park",
    markedAuthors: "H.W. Jung*, H. Roh, Y. Cho, J. Jeong, Y. Shin, J.Y. Lim, J.M. Guralnik, J. Park†",
    links: [
      { label: "Paper", url: "https://agsjournals.onlinelibrary.wiley.com/doi/abs/10.1111/jgs.16135" },
    ],
  },
  {
    year: "2019",
    venue: "IJRR",
    venueFull: "The International Journal of Robotics Research (IJRR)",
    title: "Complex Urban Dataset with Multi-Level Sensors from Highly Diverse Urban Environments",
    authors: "J. Jeong, Y. Cho, Y. Shin, H. Roh, A. Kim",
    markedAuthors: "J. Jeong*, Y. Cho, Y. Shin, H. Roh, A. Kim†",
    links: [
      { label: "Paper", url: "https://journals.sagepub.com/doi/10.1177/0278364919843996" },
      { label: "Project", url: "https://sites.google.com/view/complex-urban-dataset" },
    ],
  },
  {
    year: "2019",
    venue: "IEEE RA-L",
    venueFull: "IEEE Robotics and Automation Letters (RA-L)",
    title: "Sparse Depth Enhanced Direct Thermal-Infrared SLAM Beyond the Visible Spectrum",
    authors: "Y. Shin, A. Kim",
    markedAuthors: "Y. Shin*, A. Kim†",
    links: [
      { label: "Paper", url: "https://ieeexplore.ieee.org/document/8737772" },
      { label: "Video", url: "https://www.youtube.com/watch?v=oO7lT3uAzLc" },
    ],
  },
  {
    year: "2019",
    venue: "IFAC World Congress",
    venueFull: "IFAC World Congress",
    title: "Underwater Object Detection and Pose Estimation Using Deep Learning",
    authors: "M.H. Jeon, Y. Lee, Y. Shin, H. Jang, A. Kim",
    markedAuthors: "M.H. Jeon*, Y. Lee, Y. Shin, H. Jang, A. Kim†",
    links: [
      { label: "Paper", url: "https://www.sciencedirect.com/science/article/pii/S2405896319321718" },
    ],
  },
  {
    year: "2018",
    venue: "ICRA 2018",
    venueFull: "IEEE International Conference on Robotics and Automation (ICRA)",
    title: "Direct Visual SLAM Using Sparse Depth for Camera-LiDAR System",
    authors: "Y. Shin, Y. Park, A. Kim",
    markedAuthors: "Y. Shin*, Y. Park, A. Kim†",
    links: [
      { label: "Paper", url: "https://ieeexplore.ieee.org/document/8461102" },
      { label: "Video", url: "https://www.youtube.com/watch?v=swN3oRj5WEg" },
    ],
  },
  {
    year: "2018",
    venue: "ICRA 2018",
    venueFull: "IEEE International Conference on Robotics and Automation (ICRA)",
    title: "Complex Urban LiDAR Data Set",
    authors: "J. Jeong, Y. Cho, Y. Shin, H. Roh, A. Kim",
    markedAuthors: "J. Jeong*, Y. Cho, Y. Shin, H. Roh, A. Kim†",
    links: [
      { label: "Paper", url: "https://ieeexplore.ieee.org/document/8460834" },
      { label: "Video", url: "https://www.youtube.com/watch?v=IguZjmLf5V0" },
    ],
  },
  {
    year: "2017",
    venue: "URAI 2017",
    venueFull: "14th International Conference on Ubiquitous Robots and Ambient Intelligence (URAI)",
    title: "LiDAR Configuration Comparison for Urban Mapping System",
    authors: "J. Kim, J. Jeong, Y. Shin, Y. Cho, H. Roh, A. Kim",
    markedAuthors: "J. Kim*, J. Jeong, Y. Shin, Y. Cho, H. Roh, A. Kim†",
    links: [
      { label: "Paper", url: "https://ieeexplore.ieee.org/document/7992845" },
    ],
  },
  {
    year: "2016",
    venue: "OCEANS 2016",
    venueFull: "OCEANS 2016 MTS/IEEE Monterey",
    title: "Online Depth Estimation and Application to Underwater Image Dehazing",
    authors: "Y. Cho, Y. Shin, A. Kim",
    markedAuthors: "Y. Cho*, Y. Shin, A. Kim†",
    links: [
      { label: "Paper", url: "https://ieeexplore.ieee.org/document/7761109/" },
    ],
  },
  {
    year: "2016",
    venue: "OCEANS 2016",
    venueFull: "OCEANS 2016 MTS/IEEE Monterey",
    title: "Nontemporal Relative Pose Estimation for Opti-Acoustic Bundle Adjustment",
    authors: "D.H. Gwon, Y. Shin, Y. Kim, A. Kim, Y. Lee, H.T. Choi",
    markedAuthors: "D.H. Gwon*, Y. Shin, Y. Kim, A. Kim, Y. Lee, H.T. Choi†",
    links: [
      { label: "Paper", url: "https://ieeexplore.ieee.org/document/7761110" },
    ],
  },
  {
    year: "2016",
    venue: "OCEANS 2016",
    venueFull: "OCEANS 2016 MTS/IEEE Monterey",
    title: "Estimation of Ambient Light and Transmission Map with Common Convolutional Architecture",
    authors: "Y. Shin, Y. Cho, G. Pandey, A. Kim",
    markedAuthors: "Y. Shin*, Y. Cho, G. Pandey, A. Kim†",
    links: [
      { label: "Paper", url: "https://ieeexplore.ieee.org/document/7761342/" },
    ],
  },
  {
    year: "2015",
    venue: "OCEANS 2015",
    venueFull: "OCEANS 2015 MTS/IEEE Washington",
    title: "Bundle Adjustment from Sonar Images and SLAM Application for Seafloor Mapping",
    authors: "Y. Shin, Y. Lee, H.T. Choi, A. Kim",
    markedAuthors: "Y. Shin*, Y. Lee, H.T. Choi, A. Kim†",
    links: [
      { label: "Paper", url: "https://ieeexplore.ieee.org/abstract/document/7401963" },
    ],
  },
];

export const selectedPublicationIds = [
  "hong2026iesm",
  "lee2026msgloc",
  "kang2025unimapper",
];

export const selectedPublications: Publication[] = selectedPublicationIds.flatMap((id) => {
  const paper = publications.find((publication) => publication.id === id);
  return paper ? [paper] : [];
});

export const domesticPublications = [
  {
    year: "2025",
    venueFull: "ICROS 2025 · 제어·로봇·시스템학회 학술대회",
    title: "Comparison of Reinforcement Learning-Based Locomotion Control for Quadruped and Humanoid Robots",
    titleKo: "4족보행 및 휴머노이드 로봇의 강화학습 기반 보행성능 비교",
    markedAuthors: "D.H. Kim*, J.D. Jung, Y. Shin†",
  },
  {
    year: "2024",
    venueFull: "ICROS 2024 · 제어·로봇·시스템학회 학술대회",
    title: "Plane Factor-Based Graph SLAM and Semantic Object Representation Method in Indoor Environment",
    titleKo: "실내 환경에서의 평면 팩터 기반 그래프 SLAM 및 의미론적 물체 표현 방법",
    markedAuthors: "K. Lee*, D. Cho, G. Kang, Y. Shin†",
  },
  {
    year: "2024",
    venueFull: "ICROS 2024 · 제어·로봇·시스템학회 학술대회",
    title: "Implementation of multi-sensor based SLAM for collaborative scientific exploration of multiple robots",
    titleKo: "다수 로봇의 협력적 탐사 작업을 위한 다중 센서 기반의 SLAM 구현",
    markedAuthors: "C. Youn*, Y. Park, J. Park, Y. Shin†",
  },
  {
    year: "2023",
    venueFull: "ICROS 2023 · 제어·로봇·시스템학회 학술대회",
    title: "사람-로봇 협업 작업을 위한 이송 중 물체 파라미터 추정",
    markedAuthors: "J. Park, S. Kim, Y. Shin†",
  },
  {
    year: "2023",
    venueFull: "KSME Conference · 대한기계학회 춘추학술대회",
    title: "Open-source Robot Framework for Mobile Manipulator in ROS2",
    titleKo: "ROS2 기반 모바일 메니퓰레이터 자율 작업을 위한 오픈 플랫폼",
    markedAuthors: "S. Kim*, J. Park, Y. Shin†",
  },
  {
    year: "2022",
    venueFull: "The Journal of Korean Institute of Communications and Information Sciences · 한국통신학회논문지",
    title: "Analysis of Work Efficiency of Multiple Heterogeneous Robots for Harvesting Crops in the Green House",
    titleKo: "시설원예 작물수확을 위한 이종 복수 로봇의 작업효율 분석",
    markedAuthors: "T. Choi*, J. Park, J. Kim, Y. Shin, D. Kim†",
  },
  {
    year: "2022",
    venueFull: "Journal of the KSME · 대한기계학회 기계저널",
    title: "농업용 그리퍼의 연구 동향",
    markedAuthors: "T. Choi*, J. Park, J. Kim, Y. Shin",
  },
  {
    year: "2022",
    venueFull: "ICROS 2022 · 제어·로봇·시스템학회 학술대회",
    title: "Development of harvesting robot and transfer robot for greenhouse environment",
    titleKo: "시설환경용 수확로봇 및 이송로봇 시스템 개발",
    markedAuthors: "T. Choi*†, J. Kim, J. Park, Y. Shin",
  },
  {
    year: "2022",
    venueFull: "ICROS 2022 · 제어·로봇·시스템학회 학술대회",
    title: "Moving Object Tracking and Following Mobile Robot using RGB-D Sensor-based Recognition",
    titleKo: "RGB-D 센서를 활용한 동적 객체 추적 및 추종 로봇 개발",
    markedAuthors: "C. Youn*, Y. Shin†",
  },
  {
    year: "2021",
    venueFull: "Journal of the Korean Society of Hazard Mitigation · 한국방재학회논문집",
    title: "Development of a Cloud-Based Real-Time Building Health Monitoring and Prediction System Using AI and IoT Sensors",
    titleKo: "AI와 IoT 센서를 이용한 클라우드 기반 건축물 실시간 상태감시 및 예측시스템 개발",
    markedAuthors: "C.W. Ha*, B. Ahn, Y. Shin, J. Park, J.K. Lee, J. Kim†",
  },
  {
    year: "2019",
    venueFull: "Journal of Korea Robotics Society · 한국로봇학회논문지",
    title: "Synthesizing Image and Automated Annotation Tool for CNN based Under Water Object Detection",
    titleKo: "강건한 CNN기반 수중 물체 인식을 위한 이미지 합성과 자동화된 Annotation Tool",
    markedAuthors: "M.H. Jeon*, Y. Lee, Y. Shin, H. Jang, T. Yeu, A. Kim†",
  },
  {
    year: "2016",
    venueFull: "Journal of Ocean Engineering and Technology · 해양공학회지",
    title: "Comparative Study of Sonar Image Processing for Underwater Navigation",
    titleKo: "항법 적용을 위한 수중 소나 영상 처리 요소 기법 비교 분석",
    markedAuthors: "Y. Shin*, Y. Cho, Y. Lee, H. Choi, A. Kim†",
  },
  {
    year: "2016",
    venueFull: "Journal of Korea Robotics Society · 한국로봇학회논문지",
    title: "Bundle Adjustment and 3D Reconstruction Method for Underwater Sonar Image",
    titleKo: "수중 영상 소나의 번들 조정과 3차원 복원을 위한 운동 추정의 모호성에 관한 연구",
    markedAuthors: "Y. Shin*, Y. Lee, H.T. Choi, A. Kim†",
  },
];

export const workshopPublications = [
  {
    year: "2025",
    venueFull: "IROS Workshop on Open World Navigation in Human-Centric Environments",
    title: "MUST-Loc: Multi-View Uncertainty-Aware Semantic Token Association for Object-Level Global Localization",
    markedAuthors: "G. Lee*, Y. Shin†, Y. Cho†",
    links: [
      { label: "Project", url: "https://sparolab.github.io/research/must-loc/" },
    ],
  },
  {
    year: "2019",
    venueFull: "ICRA Workshop on Dataset Generation and Benchmarking of SLAM Algorithms",
    title: "Radar Dataset for Robust Localization and Mapping in Urban Environments",
    markedAuthors: "Y. Park*, J. Jeong, Y. Shin, A. Kim†",
  },
  {
    year: "2019",
    venueFull: "ICRA Workshop on Dataset Generation and Benchmarking of SLAM Algorithms",
    title: "ViViD: Vision for Visibility Dataset",
    markedAuthors: "A. Lee*, Y. Cho, S. Yoon, Y. Shin, A. Kim†",
  },
  {
    year: "2018",
    venueFull: "IEEE International Conference on Robotics and Automation (ICRA) Workshop",
    title: "DejavuGAN: Multi-Temporal Image Translation Toward Long-Term Robot Autonomy",
    markedAuthors: "Y. Cho*, J. Jeong, Y. Shin, A. Kim†",
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
  { date: "2026.08", category: "Member", text: "Juhyun Kim joined RoMA Lab. Welcome!", korean: "김주현 학생이 학부연구생으로 합류했습니다. 환영합니다!" },
  { date: "2026.07", category: "Paper", text: "IESM for VLN was accepted to EAAI in collaboration with KHU RCI Lab.", korean: "IESM for VLN 논문이 경희대학교 RCI Lab과의 공동 연구를 통해 EAAI에 게재 승인되었습니다.", link: { label: "RCI Lab", url: "https://rcilab.khu.ac.kr/" } },
  { date: "2026.07", category: "Member", text: "Soobin Lee and Taegyu Jang joined RoMA Lab.", korean: "이수빈, 장태규 학생이 학부연구생으로 합류했습니다. 환영합니다!" },
  { date: "2026.07", category: "Event", text: "RoMA Lab organized a special session on spatial intelligence-based mobile robots at ICROS 2026.", korean: "2026 제어로봇시스템학회, 공간지능 기반 이동 로봇의 자율이동 및 상호작용 특별세션 개최" },
  { date: "2026.07", category: "Member", text: "Sihyeong Lee joined RoMA Lab. Welcome!", korean: "이시형 학생이 학부연구생으로 합류했습니다. 환영합니다!" },
  { date: "2026.06", category: "Member", text: "Jinwoo Bae, Jihwan Jeon, and Ian Kim joined RoMA Lab.", korean: "배진우, 전지환, 김이언 학생이 학부연구생으로 합류했습니다. 환영합니다!" },
  { date: "2026.05", category: "Event", text: "Outstanding Early-Career Researcher Presentation at KSAE 2026 Spring Conference.", korean: "2026 한국자동차공학회 춘계학술대회, 신진과학자 세션 발표" },
  { date: "2026.03", category: "Paper", text: "TherA was accepted to CVPR 2026 in collaboration with SNU RPM Lab.", korean: "TherA 논문이 서울대학교 RPM Lab과의 공동 연구를 통해 CVPR 2026에 게재 승인되었습니다.", link: { label: "RPM Lab", url: "https://rpm.snu.ac.kr/" } },
  { date: "2026.03", category: "Lab", text: "Robotics, Mobility and AI Lab opened at Kyungpook National University.", korean: "경북대학교에서 AI 로봇 모빌리티 연구실(RoMA Lab)이 새롭게 오픈했습니다." },
];
