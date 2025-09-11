import React, { useState } from "react";
import { ShowMoreArrow } from "./SvgComponents";


export default function ServiceBenefitCard() {
  const [showAll, setShowAll] = useState(false);
  
  // Service items data
  const serviceItems = [
    {
      title: "Product Strategy & Discovery — /services/strategy",
      description: "Workshops, scoping, roadmaps, and prototypes.",
      color: "#24ABF5",
      aosDelay: "0"
    },
    {
      title: "UI/UX Design — /services/ui-ux-design",
      description: "Research, flows, wireframes, and design systems.",
      color: "#33DB9F",
      aosDelay: "50"
    },
    {
      title: "Web App Development — /services/web-development",
      description: "Laravel/PHP, React, Next.js, Node.js — SaaS, portals, dashboards.",
      color: "#24ABF5",
      aosDelay: "100"
    },
    {
      title: "Mobile App Development — /services/mobile-app-development",
      description: "React Native/Expo (iOS & Android) + native iOS when needed.",
      color: "#33DB9F",
      aosDelay: "150"
    },
    {
      title: "AI & Data Solutions — /services/ai",
      description: "LLM copilots, RAG search, chatbots, analytics, MLOps.",
      color: "#24ABF5",
      aosDelay: "200"
    },
    {
      title: "E-commerce Development — /services/ecommerce",
      description: "Magento, WooCommerce, OpenCart — catalogs, checkout, payments.",
      color: "#33DB9F",
      aosDelay: "220"
    },
    {
      title: "CMS Development — /services/cms",
      description: "WordPress, Drupal, Joomla, Umbraco, Typo3; headless & migrations.",
      color: "#24ABF5",
      aosDelay: "0",
      isAdditional: true
    },
    {
      title: "Cloud & DevOps — /services/cloud-devops",
      description: "AWS/Azure/GCP, Docker/K8s, CI/CD, monitoring, cost control.",
      color: "#33DB9F",
      aosDelay: "50",
      isAdditional: true
    },
    {
      title: "Team Augmentation (PHP Outsourcing) — /services/team-augmentation",
      description: "On-demand Laravel/PHP, React/Next.js, RN engineers (India).",
      color: "#24ABF5",
      aosDelay: "100",
      isAdditional: true
    }
  ];

  // Determine which items to display
  const displayedItems = showAll ? serviceItems : serviceItems.slice(0, 6);
  const totalItems = displayedItems.length;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {displayedItems.map((item, index) => {
          // Calculate row and position for border logic
          const isLastRow = index >= Math.floor(totalItems / 3) * 3;
          const isLastInRow = (index + 1) % 3 === 0;
          
          return (
            <div
              key={index}
              data-aos="fade-down"
              data-aos-delay={item.aosDelay}
              className={`
                border-[#C7B9FF] border-dashed hover:bg-[#C7B9FF10] duration-500 bg-white px-8
                ${index < 3 ? 'pt-0' : 'pt-10'}
                ${index % 3 !== 2 ? 'md:border-r' : ''}
                ${!isLastRow ? 'border-b pb-10' : 'pb-10'}
                ${isLastInRow ? 'pr-0' : 'pr-10'}
              `}
            >
              <h1 
                className="text-2xl font-bold"
                style={{ color: item.color }}
              >
                {item.title}
              </h1>
              <p className="text-[#333759] opacity-80 font-normal leading-loose text-sbase py-4">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Show more button - only show if there are more items to display */}
      {serviceItems.length > 6 && !showAll && (
        <div className="flex justify-center items-center my-12">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="text-[#415CA7] gap-2 bg-[#F2F5F8] hover:text-white hover:bg-[#762AFF] font-medium rounded-full text-sm px-5 py-3 text-center inline-flex items-center mr-2 mb-2 transition-colors duration-200"
          >
            Show more
            <ShowMoreArrow />
          </button>
        </div>
      )}
    </>
  );
}