export type AwardEntry = {
  title: string;
  issuer: string;
  date: string;
  associatedWith?: string;
  bullets: string[];
};

export const awards: AwardEntry[] = [
  {
    title: "Honour Roll",
    issuer: "University of Ottawa",
    date: "May 2026",
    associatedWith: "University of Ottawa",
    bullets: ["8x Dean's List, 2022 to 2026, every semester"]
  },
  {
    title: "International Experience Bursary",
    issuer: "University of Ottawa",
    date: "Mar 2025",
    associatedWith: "University of Ottawa",
    bullets: [
      "Awarded the International Experience Bursary Scholarship to attend Course A: Digital IC Design and Synthesis at National Cheng Kung University"
    ]
  },
  {
    title: "ASCOT Recognition of Excellence Scholarship",
    issuer: "Electro Federation Canada",
    date: "Sep 2024",
    associatedWith: "University of Ottawa",
    bullets: [
      "Awarded to an outstanding Canadian university student in engineering for academic achievement and impact on the field"
    ]
  },
  {
    title: "7 Merits of Excellence for the Highest Average",
    issuer: "Conseil des ecoles publiques de l'Est de l'Ontario",
    date: "Jun 2022",
    associatedWith: "Ecole secondaire publique Louis-Riel",
    bullets: [
      "Advanced Functions: 99%",
      "Calculus: 99%",
      "Physics: 98%",
      "Chemistry: 98%",
      "Biology: 95%",
      "French: 97%",
      "Soccer: 95%"
    ]
  },
  {
    title: "Admission Scholarship",
    issuer: "University of Ottawa",
    date: "Jun 2022",
    associatedWith: "University of Ottawa",
    bullets: ["Admission scholarship for a 97.83% average"]
  },
  {
    title: "Certificate of Bilingualism",
    issuer: "Ontario Ministry of Education",
    date: "Jun 2022",
    associatedWith: "University of Ottawa",
    bullets: ["Certificat de bilinguisme / Certificate of Bilingualism"]
  },
  {
    title: "Student-Athlete of the Year",
    issuer: "Conseil des ecoles publiques de l'Est de l'Ontario",
    date: "Jun 2020",
    associatedWith: "Ecole secondaire publique Louis-Riel",
    bullets: ["Recognized for excellence across academics and athletics"]
  },
  {
    title: "Representative of the Exploratory Sports Program",
    issuer: "Ecole secondaire publique Louis-Riel",
    date: "Jun 2018",
    associatedWith: "Ecole secondaire publique Louis-Riel",
    bullets: ["Recognized as a representative of the sport-exploratoire program"]
  }
];
