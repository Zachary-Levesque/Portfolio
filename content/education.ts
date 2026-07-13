export type EducationEntry = {
  school: string;
  credential: string;
  dateRange: string;
  grade?: string;
  bullets: string[];
  skills: string[];
};

export const education: EducationEntry[] = [
  {
    school: "University of Ottawa",
    credential:
      "Bachelor of Science (B.Sc.) / Bachelor of Applied Science (B.A.Sc.), Physics and Electrical Engineering",
    dateRange: "Sep 2022 to Apr 2027",
    grade: "9.91 CGPA",
    bullets: [
      "8x Dean's List, 2022 to 2026",
      "Multiple Recognitions of Excellence in the Faculty of Engineering and Faculty of Science"
    ],
    skills: [
      "C",
      "Data Analysis",
      "Electrical Engineering",
      "Physics",
      "Python",
      "Circuit Design",
      "Signal Processing",
      "Embedded Systems"
    ]
  },
  {
    school: "National Cheng Kung University",
    credential: "Master's Course, Digital IC Design & Synthesis",
    dateRange: "Jul 2025 to Aug 2025",
    grade: "4.0",
    bullets: [
      "Completed an intensive VLSI course covering system design flow, EDA tools, Verilog HDL, synthesis, and verification",
      "Implemented HDL lab assignments and performed synthesis and verification workflows using industry EDA tools",
      "Achieved the best class grade with a final mark of 98%"
    ],
    skills: ["Verilog", "Digital IC Design", "VLSI", "EDA Tools"]
  },
  {
    school: "Ecole secondaire publique Louis-Riel",
    credential: "Ontario Secondary School Diploma (OSSD)",
    dateRange: "Aug 2016 to Jun 2022",
    bullets: [
      "Graduated high school with an academic average of 98%",
      "Student-athlete of the year",
      "Representative of excellence of the exploratory sports program",
      "7 merits of excellence for the highest average",
      "6x captain of the soccer team for consecutive years",
      "Academic excellence with an average over 90%"
    ],
    skills: ["Leadership", "Academics", "Athletics", "Bilingualism"]
  }
];
