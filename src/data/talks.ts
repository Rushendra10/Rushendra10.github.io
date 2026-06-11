export type Talk = {
  title: string;
  date: string;
  venue: string;
  location: string;
  summary: string;
  image: string;
  imageAlt: string;
};

export const talks: Talk[] = [
  {
    title: "AI/ML Talk for Freshmen Students",
    date: "August 2024",
    venue: "IIIT Sri City",
    location: "Andhra Pradesh, India",
    summary:
      "Introduced freshmen to AI/ML and later mentored 20 students beginning their machine learning journey.",
    image: "/images/talk-ai-ml-freshmen.svg",
    imageAlt: "Abstract AI lecture visual with connected nodes and a laptop.",
  },
  {
    title: "Workshop on Advances of Deep Learning and Applications 3.0",
    date: "December 2023",
    venue: "IIIT Sri City",
    location: "Chittoor, India",
    summary:
      "Helped host a four-day deep learning workshop featuring speakers from IIT Delhi, Nvidia, Samsung, Google, Adobe Research, and other organizations.",
    image: "/images/talk-deep-learning-workshop.svg",
    imageAlt: "Abstract deep learning workshop visual with layered network panels.",
  },
  {
    title: "Research Summary Presentation",
    date: "July 2023",
    venue: "Trustworthy AI Lab, Toronto Metropolitan University",
    location: "Toronto, Canada",
    summary:
      "Presented research progress from a 12-week assistantship on certified robustness for multilayer neural networks.",
    image: "/images/talk-robustness-presentation.svg",
    imageAlt: "Abstract trustworthy AI visual with verification paths and a shield motif.",
  },
];
