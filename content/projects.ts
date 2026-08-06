export type Project = {
  title: string;
  description: string;
  techStack: string[];
  metrics: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  logoPath?: string;
  dateRange: string;
};

export const projects: Project[] = [
  {
    title: "Knovara",
    dateRange: "May 2026 to Present",
    description:
      "AI-powered technical ramp-up copilot that maps a company's code, docs, projects, decisions, and people so new engineers can become productive faster. It turns scattered organizational knowledge into personalized technical mentorship.",
    metrics: ["Currently in development, coming soon!"],
    techStack: [
      "TypeScript",
      "Python",
      "FastAPI",
      "Next.js",
      "ChromaDB",
      "OpenAI API",
      "SQLite",
      "Docker"
    ],
    githubUrl: null,
    liveUrl: null
  },
  {
    title: "Smart Sensing Seating System (Seets)",
    dateRange: "Sep 2025 to Present",
    logoPath: "/images/projects/seets.png",
    description:
      "IoT smart seating startup product for real-time occupancy tracking and space utilization insights. Piloted at the University of Ottawa Heart Institute as the first live institutional deployment.",
    metrics: ["Live pilot deployment at the University of Ottawa Heart Institute"],
    techStack: [
      "FastAPI",
      "React",
      "TypeScript",
      "IoT",
      "Embedded Hardware",
      "PostgreSQL",
      "Docker",
      "Real-Time Analytics"
    ],
    githubUrl: null,
    liveUrl: "https://seets.live"
  },
  {
    title: "Smart Flood Detection System",
    dateRange: "Jul 2026 to Present",
    logoPath: "/images/projects/smart-flood-detection-system.png",
    description:
      "ESP32 C3 Mini based IoT flood detection system built after repeated basement flooding. It monitors water level in real time, triggers an independent local buzzer and LED alarm, sends Telegram alerts over WiFi, and logs recent events for serial review.",
    metrics: [
      "Completed prototype deployed live in a basement for early flood detection"
    ],
    techStack: [
      "C",
      "ESP-IDF",
      "ESP32 C3 Mini",
      "I2C",
      "IoT",
      "Embedded Hardware",
      "WiFi",
      "Telegram Bot API",
      "PCB Design"
    ],
    githubUrl:
      "https://github.com/Zachary-Levesque/Smart-Flood-Detection-System",
    liveUrl: null
  },
  {
    title: "Mini Tensor Engine",
    dateRange: "Jan 2026 to May 2026",
    logoPath: "/images/projects/mini-tensor-engine.png",
    description:
      "C++ machine learning inference engine built to understand how low-level performance choices affect model speed on a CPU. The project compares different optimization strategies and backs each performance claim with measured benchmarks.",
    metrics: [
      "Made large matrix multiplication 3.37x faster through CPU-focused optimization",
      "3.44x additional speedup via int8 quantization at 1024³",
      "Validated against Python/NumPy reference outputs with a full correctness-testing suite"
    ],
    techStack: [
      "C++",
      "Python",
      "CMake",
      "AVX2 SIMD",
      "Multithreading",
      "Int8 Quantization"
    ],
    githubUrl: "https://github.com/Zachary-Levesque/Mini-Tensor-Engine",
    liveUrl: null
  },
  {
    title: "Adaptive Market Regime Framework",
    dateRange: "Aug 2025 to Dec 2025",
    logoPath: "/images/projects/adaptive-market-regime-framework.png",
    description:
      "Quantitative trading research platform built to study how market conditions change over time and how strategies can adapt to them. It combines market signal analysis, portfolio allocation logic, automated position sizing, and a React dashboard for exploring results.",
    metrics: [
      "1.09 Sharpe ratio vs. 0.95 for SPY",
      "Max drawdown reduced to -20.7% vs. -31.2% for SPY",
      "98 automated tests passing across data, regime, alpha, and risk modules"
    ],
    techStack: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "Hidden Markov Models",
      "Reinforcement Learning (PPO)",
      "Quantitative Research",
      "Streamlit",
      "Recharts"
    ],
    githubUrl:
      "https://github.com/Zachary-Levesque/Adaptive-Market-Regime-Framework",
    liveUrl: null
  },
  {
    title: "Quantum Math Quest",
    dateRange: "Nov 2025 to Nov 2025",
    description:
      "Python desktop quiz game combining adaptive math practice with quantum-random question selection using Qiskit. An Elo-style rating system adjusts difficulty while quantum circuits drive category and question randomness. Built for the 2025 Qiskit Hackathon.",
    metrics: [
      "Leverages the power of quantum computers in ways classical computers cannot"
    ],
    techStack: ["Python", "Qiskit", "Tkinter", "Elo Rating"],
    githubUrl: "https://github.com/Zachary-Levesque/Quantum-Math-Quest",
    liveUrl: null
  },
  {
    title: "Sports Strategy Engine",
    dateRange: "May 2025 to Sep 2025",
    logoPath: "/images/projects/sports-strategy-engine.png",
    description:
      "Full-stack golf decision-analysis platform modeling shot strategy under uncertainty with a Monte Carlo simulation engine and a visual SVG hole editor for defining players, hole geometry, and hazards.",
    metrics: [
      "Risk-adjusted strategy ranking with probability breakdowns and expected-stroke comparisons"
    ],
    techStack: [
      "React",
      "TypeScript",
      "FastAPI",
      "Pydantic",
      "SQLAlchemy",
      "SQLite",
      "NumPy",
      "Monte Carlo Simulation",
      "SVG"
    ],
    githubUrl: "https://github.com/Zachary-Levesque/Sports-Strategy-Engine",
    liveUrl: null
  },
  {
    title: "Real-Time Trading System",
    dateRange: "Jan 2025 to May 2025",
    logoPath: "/images/projects/real-time-trading-system.png",
    description:
      "Full-stack trading platform ingesting live market data and generating explainable BUY/HOLD/SELL recommendations through a signal-processing layer computing momentum, trend, volatility, and volume indicators.",
    metrics: [
      "Analyze S&P 500 stocks and get recommended trades on demand"
    ],
    techStack: [
      "Python",
      "FastAPI",
      "React",
      "PostgreSQL",
      "Redis",
      "Docker",
      "yfinance",
      "Signal Processing"
    ],
    githubUrl: "https://github.com/Zachary-Levesque/Real-Time-Trading-System",
    liveUrl: null
  },
  {
    title: "AI Games and Logic Solvers",
    dateRange: "Sep 2024 to Dec 2024",
    description:
      "Collection of classical AI systems built from first principles, including a minimax Checkers AI, a Q-learning Nim agent, a constraint-satisfaction Crossword solver, a Minesweeper inference engine, and a PageRank simulation. The collection emphasizes algorithmic thinking over high-level library abstraction.",
    metrics: [
      "Used AI to solve the little games we all love"
    ],
    techStack: [
      "Python",
      "Machine Learning",
      "Search Algorithms",
      "Reinforcement Learning",
      "Constraint Satisfaction",
      "Probabilistic Modeling"
    ],
    githubUrl: "https://github.com/Zachary-Levesque/AI-Games-and-Logic-Solvers",
    liveUrl: null
  },
  {
    title: "AI Agents and Workflows",
    dateRange: "Apr 2024 to Jun 2024",
    description:
      "Collection of AI agent automations built in n8n connecting LLMs to real business tools, including appointment scheduling, lead research, LinkedIn content drafting, RAG-based document Q&A, and weather alerts. The project bridges AI from chat to real action.",
    metrics: [
      "Built usable AI automations that connect to real tools and make everyday tasks easier"
    ],
    techStack: [
      "n8n",
      "Python",
      "RAG",
      "Pinecone",
      "Google Workspace APIs",
      "LLM Workflows",
      "JSON"
    ],
    githubUrl: "https://github.com/Zachary-Levesque/AI-agents-workflows",
    liveUrl: null
  },
  {
    title: "ParaPicture Solutions",
    dateRange: "Sep 2023 to Dec 2023",
    logoPath: "/images/projects/parapicture-solutions.png",
    description:
      "Flexible arm system enabling individuals with limited mobility to independently capture photographs using a diverse range of photographic tools.",
    metrics: [
      "Accessibility-focused hardware prototype for independent photography"
    ],
    techStack: ["Hardware Prototyping", "Accessibility Design", "Leadership"],
    githubUrl: null,
    liveUrl: "https://makerepo.com/ZacharyLevesque/1715"
  },
  {
    title: "1Chat4You",
    dateRange: "Jan 2023 to Apr 2023",
    logoPath: "/images/projects/1chat4you.png",
    description:
      "Application streamlining communication between landlords and tenants, providing a secure environment for real-time messaging, document sharing, and essential updates.",
    metrics: [
      "Tenant-landlord communication product built for secure updates, chat, and document sharing"
    ],
    techStack: ["TypeScript", "Leadership"],
    githubUrl: null,
    liveUrl: "https://makerepo.com/yumba075/1594.-1chat4you-"
  },
  {
    title: "CircuitFlow",
    dateRange: "Sep 2022 to Dec 2022",
    logoPath: "/images/projects/circuitflow.png",
    description:
      "Browser-based circuit simulation platform combining a SPICE-like netlist workflow with an interactive schematic editor, running DC, AC, and transient analysis directly in the browser via matrix-based nodal analysis.",
    metrics: [
      "Runs DC, AC, and transient circuit analysis directly in the browser"
    ],
    techStack: [
      "TypeScript",
      "React",
      "Circuit Design and Analysis",
      "Vite",
      "math.js",
      "Recharts"
    ],
    githubUrl: "https://github.com/Zachary-Levesque/CircuitFlow",
    liveUrl: null
  }
];
