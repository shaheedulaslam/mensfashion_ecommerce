import { DesignCard, DevelopmentCard, DistributionCard, IdeateCard } from "@/components/SvgComponents";

export const cardData = [
    {
      title: "Ideate",
      description:
        "Validate the problem and the path. Discovery, user stories, scope, estimates, and clickable prototypes..",
        logo:<IdeateCard/>
    },
    {
      title: "Design",
      description: "Interfaces that delight and convert. UX flows, design systems, accessibility, and interaction polish.",
      logo:<DesignCard/>
    },
    {
      title: "Build & AI",
      description: "Production-grade apps in Laravel/PHP, React, Next.js, React Native/Expo + AI features (LLM copilots, RAG, fine-tuning, agents).",
      logo:<DevelopmentCard/>
    },
    {
      title: "Launch & Grow",
      description: "CI/CD, store submission, SEO/ASO, analytics, performance tuning, MLOps & iteration",
      logo:<DistributionCard/>
    }
    // Add more card data as needed
  ];