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
    title: "Distributed Rate Limiter Gateway",
    status: "Active",
    summary:
      "Production-style API gateway with Redis-backed distributed rate limiting, tenant policies, observability, and load-testing hooks.",
    highlights: [
      "Implements gateway-level traffic control for multi-tenant API workloads.",
      "Uses Redis for shared rate-limit state and PostgreSQL for tenant policy storage.",
      "Designed around reliability signals: observability, load tests, and explicit failure modes.",
    ],
    tags: ["Go", "Redis", "PostgreSQL", "API Gateway"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/Rushendra10/distributed-rate-limiter-gateway",
      },
    ],
  },
  {
    title: "AfterVisit AI Voice Assistant",
    status: "Active",
    summary:
      "Voice-first post-visit care assistant that explains clinical records, answers grounded questions, and triggers consent-first follow-up actions.",
    highlights: [
      "Combines realtime voice, grounded record retrieval, and live transcript/state updates.",
      "Spawns visible sub-agents for pharmacy, scheduling, records, and community tasks after user consent.",
      "Includes synthetic EHR generation and scripted fallback paths for robust demos.",
    ],
    tags: ["Next.js", "TypeScript", "WebSockets", "Grok Voice", "Claude"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/Rushendra10/AfterVisit--Your-Friendly-AI-voice-assistant",
      },
    ],
  },
  {
    title: "Referral Intake & Schedule Automation",
    status: "Active",
    summary:
      "Agentic intake workflow for home-health referrals that turns messy discharge PDFs into validated, scheduling-ready referral records.",
    highlights: [
      "Ingests referral PDFs, classifies document type, extracts text, and falls back to OCR when needed.",
      "Runs LLM extraction plus deterministic validation for demographics, contact details, ZIP format, and services.",
      "Uses browser agents to check payer acceptance, service-area coverage, placement, and scheduling targets.",
    ],
    tags: ["React", "FastAPI", "Pydantic", "PDF/OCR", "Browser Agents"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/Rushendra10/Referral-Intake-and-Schedule-Automation",
      },
    ],
  },
  {
    title: "CartScout",
    status: "Active",
    summary:
      "RL-oriented browser shopping environment that gathers purchase-critical context, cites evidence, and stops before checkout.",
    highlights: [
      "Defines a safe shopping-agent boundary: search, compare, extract evidence, recommend, and stop for approval.",
      "Produces a structured PurchasePacket JSON with constraints, evidence, price, seller, and recommendation.",
      "Includes task generation, reward scoring, HUD evaluation, and remote rollout paths for browser-agent training.",
    ],
    tags: ["Python", "Browser Agents", "RL", "HUD", "Evaluation"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/Rushendra10/CartScout",
      },
    ],
  },
  {
    title: "Clinical RL Environments",
    status: "Active",
    summary:
      "Custom Gymnasium environments for clinical evidence-gathering agents that learn to inspect notes under a reading budget.",
    highlights: [
      "Converts raw clinical text notes into structured note, section, event, action, and outcome tables.",
      "Implements budgeted evidence gathering for care-escalation detection as an RL task.",
      "Includes task cards, reward configuration, baseline runners, smoke tests, and trajectory generation.",
    ],
    tags: ["Python", "Gymnasium", "Clinical NLP", "RL", "Evaluation"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/Rushendra10/Reinforcement-Learning-Environments-for-Clinical-Agents",
      },
    ],
  },
];
