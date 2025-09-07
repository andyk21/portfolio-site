// import Link from "next/link";

// export const Header = () => {
//   return (
//     <div className="flex justify-center items-center fixed top-3 w-full z-10">
//       <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
//         <a href="#hero" className="nav-item">Home</a>
//         <a href="#projects" className="nav-item">Projects</a>
//         <a href="#about" className="nav-item">About</a>
//         <a href="#" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
//       </nav>
//     </div>
//   );
// };

"use client";
import { useEffect, useState } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id], div[id]");
    console.log("Found sections:", Array.from(sections).map(s => s.id));
    
    // Define the order of sections
    const sectionOrder = ["hero", "projects", "about", "contact"];
    
    const updateActiveSection = () => {
      // Check all sections to see which ones are visible
      const visibleSections = new Set();
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          visibleSections.add(section.id);
        }
      });
      
      // Find the first visible section in order
      let activeId = "hero"; // Default to hero
      
      for (const sectionId of sectionOrder) {
        if (visibleSections.has(sectionId)) {
          activeId = sectionId;
          break;
        }
      }
      
      console.log(`Setting active section to: ${activeId} (visible sections: ${Array.from(visibleSections).join(', ')})`);
      setActiveSection(activeId);
    };
    
    // Initial check
    updateActiveSection();
    
    // Listen for scroll events
    const handleScroll = () => {
      updateActiveSection();
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItemClass = (id: string) => {
    const isActive = activeSection === id;
    console.log(`Nav item ${id}: isActive=${isActive}, activeSection=${activeSection}`);
    return `nav-item transition-all duration-300 ease-in-out ${
      isActive
        ? "bg-white text-gray-900 shadow-md scale-105"
        : "hover:bg-white/20 hover:text-white"
    }`;
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#hero" className={navItemClass("hero")}>
          Home
        </a>
        <a href="#projects" className={navItemClass("projects")}>
          Projects
        </a>
        <a href="#about" className={navItemClass("about")}>
          About
        </a>
        <a href="#contact" className={navItemClass("contact")}>
          Contact
        </a>
      </nav>
    </div>
  );
};
