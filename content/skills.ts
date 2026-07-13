export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming",
    skills: [
      "Python",
      "C",
      "C++",
      "C#",
      "Java",
      "Assembly",
      "Verilog",
      "TypeScript",
      "JavaScript",
      "HTML",
      "MATLAB"
    ]
  },
  {
    category: "AI & ML",
    skills: [
      "Neural Networks",
      "PyTorch",
      "TensorFlow",
      "Qiskit",
      "Training",
      "Validation & Deployment",
      "Quantum Computing"
    ]
  },
  {
    category: "Simulation",
    skills: [
      "CAD",
      "TCAD",
      "FEM",
      "Simulink",
      "Multisim",
      "Mathematical Modeling"
    ]
  },
  {
    category: "Circuits & IC Design",
    skills: [
      "Digital + Analog Design",
      "Analysis & Synthesis",
      "Verilog",
      "Synopsys",
      "Signal Processing"
    ]
  },
  {
    category: "Hardware & Embedded Systems",
    skills: [
      "Arduino",
      "STM32",
      "ESP",
      "Optical Linecards",
      "Embedded Systems"
    ]
  },
  {
    category: "Software & Tools",
    skills: ["FastAPI", "React.js", "PostgreSQL", "Docker", "Git", "Linux"]
  },
  {
    category: "Professional",
    skills: [
      "Data Analysis",
      "Problem Solving",
      "Leadership",
      "Bilingual: French & English"
    ]
  }
];
