import linkedIn from '../assets/linkedin-icon.svg';
import github from '../assets/github-icon.svg'
import Profile from '../assets/profileGif.gif'

const Hero = () => {
    return (
        <div className="pb-20 pt-16 flex items-center justify-between gap-10 max-md:flex-col max-md:text-center">
            {/* Avatar with gradient border */}
            <div className="relative w-44 h-44 min-w-44 min-h-44 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 rounded-full p-1">
                    <div className="w-full h-full bg-dark-bg rounded-full">
                        <img
                            src={Profile}
                            alt="Avatar"
                            className="w-full h-full object-cover rounded-full border-white border-4"
                            width="170"
                            height="170"
                        />
                    </div>
                </div>
            </div>

            {/* Text Section */}
            <div className="flex flex-col items-start gap-6 max-md:items-center">
                <h1 className="text-[#A8ADB2] font-bold text-[28px] tracking-[0.03em] relative">
                    <span className="text-white">Hey, I'm Amit.</span> I'm a Full Stack <br />
                    Software Developer.
                    <div className="bg-green-600/20 absolute max-md:relative right-0 bottom-1.5 whitespace-nowrap text-green-600 hover:bg-green-500/20 text-sm px-3 py-1 rounded-full inline-block hover:text-green-500">
                        <span className="p-1 mb-px mr-1.5 inline-block bg-green-600 rounded-full"></span>
                        Open to work
                    </div>
                </h1>

                {/* Location & Socials */}
                <div className="w-full flex items-center justify-between max-md:flex-col max-md:gap-3">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light-gray whitespace-nowrap hover:text-white"
                        href="https://www.google.com/maps/place/Vadodara"
                    >
                        🏠 Vapi, India.
                    </a>

                    <div className="w-full flex items-center justify-end max-md:justify-center gap-5 text-base text-light-gray">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-1 items-center hover:text-white"
                            href="https://www.linkedin.com/in/amit-gupta-76966926a/"
                        >
                            <img
                                src={linkedIn}
                                alt="LinkedIn icon"
                                width="24"
                                height="24"
                                className="inline"
                            />
                            LinkedIn
                        </a>

                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-1 items-center hover:text-white"
                            href="https://github.com/itsAmitgupta"
                        >
                            <img
                                src={github}
                                alt="GitHub icon"
                                width="20"
                                height="20"
                                className="inline"
                            />
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
