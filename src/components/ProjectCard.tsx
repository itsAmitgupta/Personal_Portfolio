import {
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
} from 'react-icons/si';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SkillBridge from '../assets/skillbridge/home.png'

export const techTags = [
    {
        name: 'React',
        icon: <SiReact className="text-blue-300" />,
        bg: 'bg-blue-600/20',
    },
    {
        name: 'TypeScript',
        icon: <SiTypescript className="text-blue-300" />,
        bg: 'bg-blue-500/20',
    },
    {
        name: 'Tailwind',
        icon: <SiTailwindcss className="text-blue-300" />,
        bg: 'bg-blue-400/20',
    },
    {
        name: 'Node.js',
        icon: <SiNodedotjs className="text-green-400" />,
        bg: 'bg-green-600/20',
    },
    {
        name: 'Express.js',
        icon: <SiExpress className="text-gray-300" />,
        bg: 'bg-gray-600/20',
    },
    {
        name: 'MongoDB',
        icon: <SiMongodb className="text-green-300" />,
        bg: 'bg-green-700/20',
    },
];

const ProjectCard = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex items-start gap-8 max-md:flex-col">
                {/* Left Card */}
                <div className="rounded-lg w-[640px] max-md:w-full border border-[#A8ADB2] p-5 flex flex-col gap-5">
                    <Link
                        aria-label="See more about the skill app"
                        to="/projects/skill-bridge"
                        className="w-full"
                    >
                        <img
                            alt="project-screenshot"
                            loading="lazy"
                            width="600"
                            height="380"
                            decoding="async"
                            className="rounded-md object-cover w-full"
                            src={SkillBridge}
                        />
                    </Link>

                    {/* Project Info */}
                    <div className="flex flex-col">
                        <p className="font-semibold text-white text-xl tracking-widest">
                            SKILL BRIDGE
                        </p>
                        <p className="text-light-gray mt-3">
                            Skill Bridge is your gateway to seamless learning and skill development. Manage courses, track progress, and engage effortlessly—all in one powerful platform.
                        </p>

                        {/* Tech Stack Badges */}
                        <div className="grid grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2 items-center gap-2 mt-5">
                            {techTags.map((tech) => (
                                <div
                                    key={tech.name}
                                    className={`flex h-6 items-center justify-center gap-1.5 px-4 rounded-full ${tech.bg}`}
                                >
                                    {tech.icon}
                                    <p className="text-xs whitespace-nowrap">{tech.name}</p>
                                </div>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2 w-full mt-8 max-md:flex-col">
                            <a
                                href="https://skill-bridge-nz7e.onrender.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="w-1/3 max-md:w-full bg-light-gray/10 hover:bg-light-gray/20 rounded-full text-white font-bold uppercase text-xs px-4 py-2 flex items-center justify-center gap-2 transition-all"
                            >
                                <FaExternalLinkAlt size={18} /> Live demo
                            </a>
                            <a
                                href="https://github.com/itsAmitgupta/lms-project"
                                target="_blank"
                                rel="noreferrer"
                                className="w-1/3 max-md:w-full bg-light-gray/10 hover:bg-light-gray/20 rounded-full text-white font-bold uppercase text-xs px-4 py-2 flex items-center justify-center gap-2 transition-all"
                            >
                                <FaGithub size={18} /> Source code
                            </a>
                        </div>
                    </div>
                </div>

                {/* External Link Icon */}
                <Link
                    aria-label="See more about the Skill Bridge app"
                    to="https://skill-bridge-nz7e.onrender.com/"
                    className="flex flex-col p-2 max-sm:hidden rounded-full bg-light-gray/20 text-white font-medium text-sm h-fit"
                >
                    <FaExternalLinkAlt />
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
