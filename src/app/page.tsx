
"use client";
import React from "react";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { useRouter } from "next/navigation";
import { Timeline } from "@/components/ui/timeline";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
export function HeroHighlightDemo() {
  const words = [
    {
      text: "powered",
      className: "text-blue-500 dark:text-blue-500",
    },
      {
      text: " by ",
      className: "text-blue-500 dark:text-blue-500",
    },
      {
      text: "AI,",
      className: "text-blue-500 dark:text-blue-500",
    },

    {
      text: "communicate",
    },
    {
      text: "instantly",
    },
    {
      text: "with",
    },
        {
      text: "email",
    },
        {
      text: "notifications",
    },
  ];
return (
  <HeroHighlight>
    <motion.h1
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [20, -5, 0],
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
    >
      Manage your  Cloud Integration with ease. Access{" "}
      <br />
      <Highlight className="text-black dark:text-white">
        Odata API's for Cloud Integration
      </Highlight>
      <br />
      <span className="text-neutral-500 dark:text-neutral-400 text-sm">
        <TypewriterEffect words={words} />
        
      </span>
    </motion.h1>
  </HeroHighlight>
);
}
export function NavbarDemo() {
  const navItems = [
    {
      name: "Integration Platform",
      link: "/",
    },
   
  ];
 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary" href="/login">Login</NavbarButton>
            <NavbarButton variant="primary" href="/login">Register</NavbarButton>
          </div>
        </NavBody>
 
        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
 
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}

                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <DummyContent />
 
      {/* Navbar */}
    </div>
  );
}
export function TimelineDemo() {
  const data = [
    {
      title: "Integration Content",
      content: (
        <div>
          <p  className="mb-8 text-base font-normal text-black md:text-lg dark:text-neutral-200">
            Access Integration Artifacts . Deploy and Undeploy Integration artifacts
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Message Processing Logs",
      content: (
        <div>
          <p className="mb-8 text-base font-normal text-black md:text-lg dark:text-neutral-200">
        Message processing logs enable you to store data about the messages processed on a tenant and - for each processed message - information about the individual processing steps.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Security Content",
      content: (
        <div>
          <p className="mb-4 text-base font-normal text-black md:text-lg dark:text-neutral-200">
            Security content enables you to get, write or delete various security content. Depending on the kind of connection, the applied authorization and authentication options, and the direction of the request (either inbound or outbound), different kind of security content needs to be created and deployed on the tenant. You can manage the user credentials as follows:
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
const DummyContent = () => {
  return (
    <div className="container mx-auto p-4 pt-8">
      <HeroHighlightDemo />
      <div className=" h-px w-full bg-neutral-200 dark:bg-neutral-800" />
      <TimelineDemo />
      <div className="flex flex-col items-center justify-center mt-16 mb-16">
        <img 
        src='/logo.svg'
        width={500}
        height={400}
        alt="Logo"
      />
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">
          Contact me At
        </h2>
          <p  className="text-black dark:text-neutral-400 mb-8 text-2xl">
            Shivam1705of@gmail.com
          </p>

          <a href="mailto:Shivam1705of@gmail.com" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
            Get in Touch
          </a>
          <p className="text-black dark:text-neutral-400 mb-8 text-xl m-3">
            Mobile number : 8224966690
          </p>
        </div>

      </div>
    </div>
  );
};
export default function SparklesPreview() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login');
  };

  const projects = [
    {
      title: "Integration Content",
      description:
        "Operating an integration scenario requires certain integration artifacts. Using the OData API you can access integration artifacts. Integration artifacts contain the information required for the runtime components to process messages. ",
      link: "https://api.sap.com/api/IntegrationContent/overview",
    },
    {
      title: "Runtime Artifacts",
      description:
        "The Integration Runtime Artifacts API lets you query information about all runtime artifacts that are deployed in your tenant.",
      link: "https://api.sap.com/api/IntegrationContent/resource/Runtime_Artifacts",
    },
    {
      title: "Integration flow",
      description:
        "An integration flow is a graphical representation of the data flow between different systems in an integration scenario. It defines the sequence of steps and the data transformations that occur as data is processed and transferred between systems.",
      link: "https://api.sap.com/api/IntegrationContent/resource/Integration_Flow",
    },
    {
      title: "Value mapping",
        description:
          "A value mapping allows you to transform one representation of an object to another representation. In most situations when data is exchanged between two systems, two ways of representing the same data need to be translated.",
      link: "https://api.sap.com/api/IntegrationContent/resource/Value_Mapping",
    },
    {
      title: "OData API",
      description:
        "You can use an OData API to expose data sources as OData endpoints. You can design an OData in the Web UI Design section. The system generates from an OData API an integration flow that contains by default an OData sender adapter.",
      link: "https://api.sap.com/api/IntegrationContent/documents",
    },
    {
      title: "Integration Packages - Design",
      description:
        "Represents an integration package in the Cloud Integration Design section.You can use resource IntegrationPackages to access (create, update, delete, read) integration packages.",
      link: "https://api.sap.com/api/IntegrationContent/document",
    },
  ];

  return (  
    <div>
      <NavbarDemo />
      
    </div>
  );
}
