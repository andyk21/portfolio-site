import habitimeImg from "@/assets/images/habitime.png";
import rmtaImg from "@/assets/images/ratemyta.png";
import portfolioImg from "@/assets/images/portfolio.png";
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import GitHubIcon from '@/assets/icons/github.svg';
import grainImage from '@/assets/images/grain.jpg';
import Image from 'next/image';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    techstack: "React • Node.js • Express.js • Firebase",
    year: "",
    title: "HABITime",
    results: [
      { title: "Developed full-stack wellness app using <strong>React</strong> in a team of four for LA Hacks 2025" },
      { title: "Combined <strong>Google Calendar</strong> and <strong>Gemini AI API</strong> to deliver personalized activity recommendations targeting individual health concerns" },
      { title: "Built <strong>Express.js</strong> backend and <strong>Firebase</strong> data layer to support real-time scheduling with concurrent multi-user updates" },
    ],
    link: "https://github.com/amyzh3/HABITime/tree/main",
    image: habitimeImg,
  },
  {
    techstack: "Java • TypeScript • MySQL • HTML/CSS",
    year: "",
    title: "RateMyTA",
    results: [
      { title: "Created a <strong>Java</strong>-based web application for rating and reviewing teaching assistants" },
      { title: "Implemented a <strong>MySQL</strong> database and <strong>Java Servlets</strong> for backend functionality capable of supporting up to 200 concurrent users" },
      { title: "Developed responsive, cross-browser UI with <strong>HTML</strong>, <strong>CSS</strong>, <strong>AJAX</strong>, and <strong>TypeScript</strong>" },
    ],
    link: "",
    image: rmtaImg,
  },
  {
    techstack: "Next.js • TypeScript • Tailwind CSS • Framer Motion",
    year: "",
    title: "Portfolio Website",
    results: [
      { title: "Built a modern portfolio website using <strong>Next.js</strong> and <strong>TypeScript</strong>" },
      { title: "Designed custom components with <strong>Tailwind CSS</strong> and <strong>Framer Motion</strong> for smooth animations" },
      { title: "Created modular architecture with reusable components and interactive sections" },
    ],
    link: "",
    image: portfolioImg,
  },
];

export const ProjectsSection = () => {
  return (
    <section id='projects' className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader title="My Projects" eyebrow="From the ground-up" description="Here are some of the projects I've worked on:" />
        <div className="flex flex-col mt-10 md:mt-20 gap-16">
          {portfolioProjects.map((project, projectIndex) => (

            <Card key={project.title}
              className="pl-8 pr-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20">
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 gap-2 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.techstack}</span>
                    {/* <span>&bull;</span> */}
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5 ">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6 flex-shrink-0" />
                        <span dangerouslySetInnerHTML={{ __html: result.title }} />
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl 
                font-semibold inline-flex items-center justify-center gap-2 mt-8 
                md:w-auto px-6
                ">
                      <span>View Project</span>
                      <GitHubIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image src={project.image} alt={project.title} className="mt-8 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
