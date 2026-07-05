export type ExperienceEntry = {
  company: string;
  role: string;
  dateRange: string;
  bullets: string[];
  skills: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Ranovus Inc.",
    role: "Systems Verification Engineer (Intern)",
    dateRange: "May 2026 – Present, Kanata, ON",
    bullets: [
      "Developed Python-based test scripts and validation infrastructure for I2C and SPI communication protocols on MCU-based hardware",
      "Collaborated with the firmware team, working in C#, to implement and debug embedded firmware supporting protocol validation",
      "Diagnosed and resolved issues across the hardware/firmware boundary, combining hardware configuration, signal analysis, and low-level debugging"
    ],
    skills: [
      "Hardware Engineering",
      "Embedded Systems",
      "Python",
      "C#",
      "Linux",
      "Circuit Design and Analysis"
    ]
  },
  {
    company: "Seets Inc",
    role: "CEO & Co-Founder",
    dateRange: "May 2026 – Present, Ottawa, ON",
    bullets: [
      "Co-founded an IoT smart seating startup focused on real-time occupancy tracking for institutions",
      "Driving product vision, engineering strategy, system architecture, and technical execution",
      "Building a scalable solution at the intersection of hardware, software, and real-world analytics",
      "Led first pilot deployment at the University of Ottawa Heart Institute"
    ],
    skills: [
      "FastAPI",
      "Hardware Engineering",
      "C++",
      "C",
      "Leadership",
      "PostgreSQL",
      "Embedded Systems",
      "Python",
      "C#",
      "TypeScript",
      "Docker"
    ]
  },
  {
    company: "APRIQuOt",
    role: "Quantum AI Researcher (Intern)",
    dateRange: "Sep 2025 – Apr 2026, Ottawa, ON",
    bullets: [
      "Developed neural networks to reconstruct multi-qubit quantum states",
      "Used Qiskit for quantum computing to study quantum chaos in complex multi-qubit systems",
      "Implemented and optimized algorithms to improve accuracy"
    ],
    skills: [
      "PyTorch",
      "Quantum Computing",
      "Python",
      "Physics",
      "Data Analysis",
      "Machine Learning"
    ]
  },
  {
    company: "Huawei",
    role: "Systems Engineer, Optical Communications (Intern)",
    dateRange: "May 2025 – Aug 2025, Ottawa, ON",
    bullets: [
      "Conducted R&D on high-speed optical data transmission, designing communication links using EDFA, WSS, optical transceivers, OSA",
      "Implemented Python automation for link control and data acquisition, boosting throughput and enhancing results",
      "Employed mathematical models and statistical analysis to extract and interpret critical performance metrics"
    ],
    skills: [
      "Hardware Engineering",
      "MATLAB",
      "Python",
      "Data Analysis",
      "Machine Learning"
    ]
  },
  {
    company: "Thin-Film Electronics Laboratory",
    role: "Semiconductor Engineer (Intern)",
    dateRange: "Jan 2025 – Apr 2025, Ottawa, ON",
    bullets: [
      "Conducted research on non-linear charge injection in n-type organic transistors",
      "Simulated device behavior using Atlas TCAD software to model thin-film transistor parameters",
      "Used Python and MATLAB to analyze transistor performance and efficiency"
    ],
    skills: [
      "Hardware Engineering",
      "MATLAB",
      "Python",
      "Electrical Engineering",
      "Data Analysis"
    ]
  },
  {
    company: "Hydro Ottawa",
    role: "Data Engineering Intern",
    dateRange: "May 2024 – Aug 2024, Ottawa, ON",
    bullets: [
      "Analyzed and leveraged GIS data for the city's Electrical Distribution Network to optimize performance and infrastructure development",
      "Developed a Java program to transfer data between software applications, improving workflow efficiency",
      "Embedded simple machine-learning models to automate deliverables, project tracking, and budget forecasting"
    ],
    skills: ["FastAPI", "Python", "JavaScript", "Data Analysis"]
  },
  {
    company: "Festival House",
    role: "Design Engineer",
    dateRange: "Jun 2022 – Jul 2024, Ottawa, ON",
    bullets: [
      "Designed detailed plans and layouts for major events including Bluesfest and Canada Day, supporting large-scale infrastructure deployment",
      "Applied engineering principles and analytical methods to ensure structural safety, regulatory compliance, and efficient site utilization",
      "Collaborated with contractors, engineers, and event coordinators to optimize logistics, setup procedures, and resource allocation"
    ],
    skills: ["Leadership", "Circuit Design and Analysis"]
  },
  {
    company: "CECCE",
    role: "Software Engineer",
    dateRange: "May 2020 – Sep 2020, Ottawa, ON",
    bullets: [
      "Created software allowing students to do school work virtually",
      "Used strong analytical and problem-solving skills to develop effective solutions for challenging situations",
      "Participated in team projects, demonstrating an ability to work collaboratively and effectively"
    ],
    skills: ["FastAPI", "PostgreSQL", "TypeScript"]
  }
];
