import { useNavigate } from "react-router-dom";
import { techTags } from "./ProjectCard";
import home from '../assets/skillbridge/home.png';
import courseDesc from '../assets/skillbridge/course-desc.png';
import searchCourse from '../assets/skillbridge/course-search.png';
import courseCreate from '../assets/skillbridge/course-creation.png';
import lectureUpload from '../assets/skillbridge/upload-lecture.png';
import payment from '../assets/skillbridge/stripe-payment.png';
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const SkillBridge = () => {
    const navigate = useNavigate();
    return (
        <div className="h-full w-full mx-auto max-w-[47.5rem]">
            <main className="flex flex-col w-full min-h-screen h-full pt-10 text-white">
                <p className="cursor-pointer" onClick={() => navigate('/')}>Back</p>
                <div className="w-full flex items-center justify-between gap-5 mb-10 max-md:flex-col">
                    <h1 className="font-bold text-xl tracking-widest max-sm:mb-4">
                        Skill Bridge - Learning Management System
                    </h1>

                    <div className="flex items-center gap-3 text-sm max-sm:flex-col max-sm:w-full">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 bg-light-gray/10 max-sm:w-full max-sm:justify-center rounded-full py-1 px-3 hover:bg-light-gray/20 transition-all"
                            href="https://github.com/itsAmitgupta/lms-project"
                        >
                            <FaGithub size={18} />
                            GitHub
                        </a>

                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 bg-light-gray/10 max-sm:w-full max-sm:justify-center rounded-full py-1 px-3 hover:bg-light-gray/20 transition-all"
                            href="https://skill-bridge-nz7e.onrender.com/"
                        >
                            <FaGlobe size={18} />
                            Visit
                        </a>
                    </div>
                </div>

                {/* Description */}
                <p className="text-[#A8ADB2]">
                    Skill Bridge is more than just a Learning Management System—it’s a bridge to endless possibilities. We believe in accessible, high-quality education that transforms careers and unlocks potential. Our platform fosters collaborative learning, hands-on experiences, and expert-led courses, ensuring every learner is equipped for success in today's fast-evolving world.
                </p>

                {/* Tech Stack */}
                <h2 className="font-bold text-base mt-16 tracking-widest text-white mb-5 uppercase">
                    Tech stack
                </h2>
                <div className="grid grid-cols-4 items-center gap-3 max-sm:grid-cols-3 max-[500px]:grid-cols-2">
                    {techTags.map(({ name, bg, icon }, index) => (
                        <div
                            key={index}
                            className={`flex h-7 items-center justify-center gap-2 px-4 rounded-full ${bg}`}
                        >
                            {icon}
                            <p className="text-sm whitespace-nowrap">{name}</p>
                        </div>
                    ))}

                </div>

                {/* Features */}
                <h2 className="font-bold text-base mt-16 tracking-widest text-white mb-5 uppercase">
                    Key features
                </h2>
                <ul className="text-[#A8ADB2] w-full space-y-2">
                    <li>🔐 <span className="text-white font-medium">JWT Authentication</span> — Secure sign-up and login with token-based authentication.</li>
                    <li>🎭 <span className="text-white font-medium">Role-Based Access</span> — Separate access for <span className="italic">students</span> and <span className="italic">instructors</span> throughout the platform.</li>
                    <li>🎓 <span className="text-white font-medium">Course & Chapter Creation</span> — Instructors can create full courses structured into chapters and upload multiple video lectures.</li>
                    <li>💳 <span className="text-white font-medium">Stripe Payments</span> — Students can enroll in premium courses through a secure checkout flow.</li>
                    <li>🧠 <span className="text-white font-medium">Interactive Quizzes</span> — Each course can include quizzes created by instructors to test student understanding.</li>
                    <li>👤 <span className="text-white font-medium">Profile Management</span> — Users can update their avatar and personal details from their account settings.</li>

                </ul>

                {/* Overview */}
                <h2 className="font-bold text-base mt-16 tracking-widest text-white mb-5 uppercase">
                    Project overview
                </h2>
                <div className="flex flex-col w-full gap-4">


                    {/* Project images */}
                    {[
                        home,
                        courseDesc,
                        searchCourse,
                        courseCreate,
                        lectureUpload,
                        payment,
                    ].map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt="project screenshot"
                            width={700}
                            height={700}
                            className="border border-white rounded-xl"
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default SkillBridge;
