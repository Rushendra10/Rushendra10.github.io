export type SkillGroup = {
  title: string;
  skills: Array<{
    name: string;
    icon?: string;
  }>;
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages & AI Coding Tools",
    skills: [
      { name: "Python", icon: "python" },
      { name: "Go", icon: "go" },
      { name: "C/C++", icon: "cplusplus" },
      { name: "SQL" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Java", icon: "java" },
      { name: "Bash", icon: "bash" },
      { name: "Codex" },
      { name: "Claude Code", icon: "claudecode" },
    ],
  },
  {
    title: "LLMs & Agents",
    skills: [
      { name: "Structured Extraction" },
      { name: "Document AI" },
      { name: "Vision-Language Models" },
      { name: "RAG" },
      { name: "LLM Evaluation" },
      { name: "Agent Orchestration" },
      { name: "Tool Use" },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "PyTorch", icon: "pytorch" },
      { name: "Transformers" },
      { name: "Scikit-Learn", icon: "scikitlearn" },
      { name: "MLOps" },
      { name: "Computer Vision" },
      { name: "RLHF/RLVR" },
      { name: "Fine-tuning" },
      { name: "LoRA" },
      { name: "Numerical Methods" },
    ],
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "Django", icon: "django" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Node.js", icon: "nodejs" },
      { name: "REST APIs" },
      { name: "Concurrency" },
      { name: "Distributed Systems" },
      { name: "Microservices" },
      { name: "Grafana", icon: "grafana" },
      { name: "Prometheus", icon: "prometheus" },
      { name: "Telemetry" },
    ],
  },
  {
    title: "Databases & Infrastructure",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Redis", icon: "redis" },
      { name: "Elasticsearch", icon: "elasticsearch" },
      { name: "AWS", icon: "aws" },
      { name: "Azure", icon: "azure" },
      { name: "Docker", icon: "docker" },
      { name: "CI/CD" },
      { name: "Linux", icon: "linux" },
      { name: "Git", icon: "git" },
      { name: "HPC" },
    ],
  },
];
