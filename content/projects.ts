export type Project = {
  title: string;
  description: string;
  techStack: string[];
  metrics: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  dateRange: string;
};

export const projects: Project[] = [
  {
    title: "Mini Tensor Engine",
    dateRange: "Jan 2026 – May 2026",
    description:
      "C++ inference runtime built to study how tensor layout, matmul kernel design, SIMD, cache locality, threading, and int8 quantization affect CPU inference latency — with every performance claim backed by measured benchmarks, not intuition.",
    metrics: [
      "3.37x speedup over naive baseline at 1024³ matmul via cache-friendly transpose",
      "3.44x additional speedup via int8 quantization at 1024³",
      "Validated against Python/NumPy reference outputs with a full correctness-testing suite"
    ],
    techStack: ["C++", "Python", "CMake", "AVX2 SIMD", "Multithreading"],
    githubUrl: "https://github.com/Zachary-Levesque/Mini-Tensor-Engine",
    liveUrl: null
  },
  {
    title: "Adaptive Market Regime Framework",
    dateRange: "Aug 2025 – Dec 2025",
    description:
      "Research-grade quantitative trading system detecting market regimes via Hidden Markov Models, blending alpha signals with SPY through a regime-aware allocation policy, backed by a reinforcement learning position-sizing agent and a full React product dashboard.",
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
      "Recharts"
    ],
    githubUrl:
      "https://github.com/Zachary-Levesque/Adaptive-Market-Regime-Framework",
    liveUrl: null
  },
  {
    title: "Knovara",
    dateRange: "May 2026 – Present",
    description:
      "AI-powered technical ramp-up copilot that maps a company's code, docs, projects, decisions, and people so new engineers can become productive faster — turning scattered organizational knowledge into personalized technical mentorship.",
    metrics: [],
    techStack: [
      "Python",
      "TypeScript",
      "FastAPI",
      "ChromaDB",
      "OpenAI",
      "Next.js",
      "Docker"
    ],
    githubUrl: "https://github.com/Zachary-Levesque/Knovara",
    liveUrl: null
  },
  {
    title: "Smart Sensing Seating System (Seets)",
    dateRange: "Sep 2025 – Present",
    description:
      "IoT smart seating startup product for real-time occupancy tracking and space utilization insights. Piloted at the University of Ottawa Heart Institute — the first live institutional deployment.",
    metrics: ["Live pilot deployment at the University of Ottawa Heart Institute"],
    techStack: ["FastAPI", "React", "IoT/Embedded Hardware", "PostgreSQL", "Docker"],
    githubUrl: null,
    liveUrl: "https://seets.live"
  },
  {
    title: "Sports Strategy Engine",
    dateRange: "May 2025 – Sep 2025",
    description:
      "Full-stack golf decision-analysis platform modeling shot strategy under uncertainty with a Monte Carlo simulation engine and a visual SVG hole editor for defining players, hole geometry, and hazards.",
    metrics: [
      "Risk-adjusted strategy ranking with probability breakdowns and expected-stroke comparisons"
    ],
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "FastAPI",
      "Pydantic",
      "SQLAlchemy",
      "SQLite",
      "NumPy"
    ],
    githubUrl: "https://github.com/Zachary-Levesque/Sports-Strategy-Engine",
    liveUrl: null
  },
  {
    title: "Real-Time Trading System",
    dateRange: "Jan 2025 – May 2025",
    description:
      "Full-stack trading platform ingesting live market data and generating explainable BUY/HOLD/SELL recommendations through a signal-processing layer computing momentum, trend, volatility, and volume indicators.",
    metrics: [],
    techStack: [
      "Python",
      "FastAPI",
      "React",
      "PostgreSQL",
      "Redis",
      "Docker",
      "yfinance"
    ],
    githubUrl: "https://github.com/Zachary-Levesque/Real-Time-Trading-System",
    liveUrl: null
  },
  {
    title: "CircuitFlow",
    dateRange: "2025",
    description:
      "Browser-based circuit simulation platform combining a SPICE-like netlist workflow with an interactive schematic editor, running DC, AC, and transient analysis directly in the browser via matrix-based nodal analysis.",
    metrics: [],
    techStack: ["TypeScript", "React", "Vite", "math.js", "Recharts"],
    githubUrl: "https://github.com/Zachary-Levesque/CircuitFlow",
    liveUrl: null
  },
  {
    title: "Quantum Math Quest",
    dateRange: "Nov 2025",
    description:
      "Python desktop quiz game combining adaptive math practice with quantum-random question selection using Qiskit — an Elo-style rating system adjusts difficulty while quantum circuits drive category and question randomness. Built for the 2025 Qiskit Hackathon.",
    metrics: [],
    techStack: ["Python", "Qiskit", "Tkinter"],
    githubUrl: "https://github.com/Zachary-Levesque/Quantum-Math-Quest",
    liveUrl: null
  },
  {
    title: "AI Games and Logic Solvers",
    dateRange: "Sep 2024 – Dec 2024",
    description:
      "Collection of classical AI systems built from first principles — including a minimax Checkers AI, a Q-learning Nim agent, a constraint-satisfaction Crossword solver, a Minesweeper inference engine, and a PageRank simulation — emphasizing algorithmic thinking over high-level library abstraction.",
    metrics: [],
    techStack: ["Python", "PyTorch"],
    githubUrl: "https://github.com/Zachary-Levesque/AI-Games-and-Logic-Solvers",
    liveUrl: null
  },
  {
    title: "AI Agents and Workflows",
    dateRange: "Apr 2024 – Jun 2024",
    description:
      "Collection of AI agent automations built in n8n connecting LLMs to real business tools — appointment scheduling, lead research, LinkedIn content drafting, RAG-based document Q&A, and weather alerts — bridging AI from chat to real action.",
    metrics: [],
    techStack: ["n8n", "Python", "RAG", "Pinecone", "Google Workspace APIs"],
    githubUrl: "https://github.com/Zachary-Levesque/AI-agents-workflows",
    liveUrl: null
  },
  {
    title: "1Chat4You",
    dateRange: "Jan 2023 – Apr 2023",
    description:
      "Application streamlining communication between landlords and tenants, providing a secure environment for real-time messaging, document sharing, and essential updates.",
    metrics: [],
    techStack: ["TypeScript"],
    githubUrl: null,
    liveUrl: "https://makerepo.com/yumba075/1594.-1chat4you-"
  },
  {
    title: "ParaPicture Solutions",
    dateRange: "Sep 2023 – Dec 2023",
    description:
      "Flexible arm system enabling individuals with limited mobility to independently capture photographs using a diverse range of photographic tools.",
    metrics: [],
    techStack: ["Hardware Prototyping"],
    githubUrl: null,
    liveUrl: "https://makerepo.com/ZacharyLevesque/1715"
  }
];
