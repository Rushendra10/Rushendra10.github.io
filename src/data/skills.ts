export type SkillGroup = {
  title: string;
  skills: Array<{
    name: string;
    icon?: string;
  }>;
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: "python" },
      { name: "Go", icon: "go" },
      { name: "SQL", icon: "sql" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Java", icon: "java" },
      { name: "Bash", icon: "terminal" },
    ],
  },
  {
    title: "LLMs / Document AI",
    skills: [
      { name: "OCR", icon: "scan" },
      { name: "Structured Extraction", icon: "braces" },
      { name: "Document AI", icon: "file-search" },
      { name: "Vision-Language Models", icon: "eye" },
      { name: "RAG", icon: "database-search" },
      { name: "LLM Evaluation", icon: "check-circle" },
      { name: "Agent Orchestration", icon: "workflow" },
      { name: "Tool Use", icon: "wrench" },
    ],
  },
  {
    title: "ML / AI",
    skills: [
      { name: "PyTorch", icon: "pytorch" },
      { name: "Transformers", icon: "transformers" },
      { name: "Hugging Face", icon: "huggingface" },
      { name: "Scikit-Learn", icon: "scikitlearn" },
      { name: "RAPIDS", icon: "gpu" },
      { name: "MLOps", icon: "boxes" },
      { name: "Computer Vision", icon: "eye" },
      { name: "Fine-tuning", icon: "sliders" },
      { name: "LoRA", icon: "layers" },
    ],
  },
  {
    title: "Backend / APIs",
    skills: [
      { name: "Django", icon: "django" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Node.js", icon: "nodejs" },
      { name: "REST APIs", icon: "api" },
      { name: "API Design", icon: "route" },
      { name: "Async Workers", icon: "timer" },
      { name: "Microservices", icon: "blocks" },
    ],
  },
  {
    title: "Databases / Infrastructure",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Redis", icon: "redis" },
      { name: "AWS", icon: "aws" },
      { name: "Azure", icon: "azure" },
      { name: "Docker", icon: "docker" },
      { name: "CI/CD", icon: "git-branch" },
      { name: "Linux", icon: "linux" },
      { name: "Git", icon: "git" },
    ],
  },
];
