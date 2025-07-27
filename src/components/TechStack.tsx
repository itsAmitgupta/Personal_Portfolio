import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPrisma,
    SiAmazon,
    SiDocker,
    SiTailwindcss,
    SiHtml5,
    SiCss3,
} from 'react-icons/si';

const techStack = [
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'React', icon: SiReact, color: '#61DBFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
    { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
];

const TechStack = () => {
    return (
        <div className="flex flex-col mt-7">
            <h2 className="font-bold text-lg tracking-widest text-white uppercase mb-10">
                Tech stack
            </h2>
            <div className="text-white grid grid-cols-5 gap-5 max-md:grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2">
                {techStack.map(({ name, icon: Icon, color }) => (
                    <div
                        key={name}
                        className="border-[#A8ADB2] hover:bg-light-gray/10 gap-1.5 h-24 text-[#A8ADB2] border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group"
                    >
                        <Icon
                            size={32}
                            color={color}
                            className="transition-transform duration-300 group-hover:-translate-y-1"
                        />
                        <p>{name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;
