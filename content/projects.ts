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
      "High-performance ML inference engine in C++ with a custom tensor implementation and optimized matrix multiplication, multithreading, and benchmarking against Python baselines.",
    metrics: [
      "3.37x speedup over naive baseline at 1024³ matmul",
      "3.44x further gain via int8 quantization",
      "Validated against Python/NumPy baselines with full correctness-testing suite"
    ],
    techStack: ["C++", "Python"],
    githubUrl: "https://github.com/Zachary-Levesque/Mini-Tensor-Engine",
    liveUrl: null
  },
  {
    title: "Knovara",
    dateRange: "May 2026 – Present",
    description:
      "AI-powered technical ramp-up copilot that maps a company's code, docs, projects, decisions, and people to help new engineers become productive faster.",
    metrics: [],
    techStack: ["Python", "PyTorch", "TypeScript", "FastAPI", "Next.js"],
    githubUrl: "https://github.com/Zachary-Levesque/Knovara",
    liveUrl: null
  },
  {
    title: "Adaptive Market Regime Framework",
    dateRange: "Aug 2025 – Dec 2025",
    description:
      "Research-grade quantitative trading system detecting market regimes via Hidden Markov Models, with a regime-aware allocation policy and reinforcement learning position sizing agent.",
    metrics: [
      "1.09 Sharpe ratio vs. 0.95 for SPY",
      "Max drawdown reduced to -20.7% vs. -31.2% for SPY"
    ],
    techStack: ["Python", "FastAPI", "React.js"],
    githubUrl:
      "https://github.com/Zachary-Levesque/Adaptive-Market-Regime-Framework",
    liveUrl: null
  },
  {
    title: "Smart Sensing Seating System (Seets)",
    dateRange: "Sep 2025 – Present",
    description:
      "IoT smart seating startup product for real-time occupancy tracking and space utilization insights for institutions. Piloted at the University of Ottawa Heart Institute.",
    metrics: ["Live pilot deployment at a real institution"],
    techStack: ["FastAPI", "React.js", "IoT/Embedded"],
    githubUrl: null,
    liveUrl: "https://seets.live"
  },
  {
    title: "Sports Strategy Engine",
    dateRange: "May 2025 – Sep 2025",
    description:
      "Monte Carlo decision engine for golf strategy optimization under uncertainty, with a full-stack platform and a visual SVG course editor for modeling player tendencies, hole geometry, and risk tolerance.",
    metrics: ["Risk-adjusted strategy ranking implemented across the full stack"],
    techStack: ["TypeScript", "React.js", "FastAPI", "SQLite"],
    githubUrl: "https://github.com/Zachary-Levesque/Sports-Strategy-Engine",
    liveUrl: null
  },
  {
    title: "Real-Time Trading System",
    dateRange: "Jan 2025 – May 2025",
    description:
      "Full-stack trading platform ingesting live market data and generating explainable BUY/HOLD/SELL recommendations via a signal-processing layer computing momentum, trend, volatility, and volume indicators.",
    metrics: [],
    techStack: ["Python", "FastAPI", "React", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/Zachary-Levesque/Real-Time-Trading-System",
    liveUrl: null
  },
  {
    title: "CircuitFlow",
    dateRange: "2025",
    description:
      "Real-time circuit simulation platform for designing and analyzing electrical circuits, using matrix-based nodal analysis to compute voltages, currents, and power with an interactive interface.",
    metrics: [],
    techStack: ["TypeScript"],
    githubUrl: "https://github.com/Zachary-Levesque/CircuitFlow",
    liveUrl: null
  },
  {
    title: "Quantum Math Quest",
    dateRange: "Nov 2025",
    description:
      "Interactive game merging mathematical problem-solving with adaptive learning inspired by quantum computation principles. Difficulty adjusts dynamically via an ELO-style rating system. Built for the 2025 Qiskit Hackathon.",
    metrics: [],
    techStack: ["Python"],
    githubUrl: "https://github.com/Zachary-Levesque/Quantum-Math-Quest",
    liveUrl: null
  },
  {
    title: "AI Games and Logic Solvers",
    dateRange: "Sep 2024 – Dec 2024",
    description:
      "Collection of AI programs solving games and logic problems using search algorithms, constraint satisfaction, inference, and probabilistic modeling — including a Checkers AI, PageRank simulation, Knights and Knaves solver, Minesweeper AI, and a self-taught Nim reinforcement learning agent.",
    metrics: [],
    techStack: ["Python", "PyTorch"],
    githubUrl: "https://github.com/Zachary-Levesque/AI-Games-and-Logic-Solvers",
    liveUrl: null
  },
  {
    title: "AI Agents and Workflows",
    dateRange: "Apr 2024 – Jun 2024",
    description:
      "Suite of AI-driven agents automating scheduling, lead generation, content creation, data retrieval, research assistance, and a RAG-based chatbot pipeline.",
    metrics: [],
    techStack: ["Python", "JSON"],
    githubUrl: "https://github.com/Zachary-Levesque/AI-agents-workflows",
    liveUrl: null
  }
];
