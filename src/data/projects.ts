export type Project = {
  title: string;
  status: "Placeholder" | "Active" | "Archived";
  summary: string;
  highlights: string[];
  tags: string[];
  links?: Array<{
    label: string;
    href: string;
  }>;
};

export const projects: Project[] = [
  {
    title: "Applied AI Project",
    status: "Placeholder",
    summary:
      "Placeholder for a selected AI/ML project. Replace this with the problem, method, stack, and outcome.",
    highlights: [
      "Describe the user or research problem.",
      "Mention the model, system design, or evaluation approach.",
      "Add a measurable result or impact when available.",
    ],
    tags: ["Machine Learning", "Python", "Research"],
  },
  {
    title: "Backend / Data System",
    status: "Placeholder",
    summary:
      "Placeholder for an engineering project showing backend, data, or deployment depth.",
    highlights: [
      "Describe the system architecture.",
      "Mention API, database, cloud, or automation work.",
      "Add a demo, repository, or write-up link later.",
    ],
    tags: ["Backend", "Data", "APIs"],
  },
  {
    title: "Research Prototype",
    status: "Placeholder",
    summary:
      "Placeholder for a research-oriented prototype connected to robustness, NLP, or computer vision.",
    highlights: [
      "Describe the hypothesis or research objective.",
      "Mention experiments, datasets, and baselines.",
      "Add links to code, paper, or slides when ready.",
    ],
    tags: ["Robust ML", "Experimentation", "Evaluation"],
  },
];
