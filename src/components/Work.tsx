const Work = () => {
    return (
        <div className="flex flex-col w-full mt-24">
            <h2
                id="work-experience"
                className="font-bold text-lg tracking-widest text-white uppercase mb-10"
            >
                Work Experience
            </h2>

            <div className="flex flex-col w-full gap-14">
                <div className="flex w-full gap-10 max-sm:flex-col">
                    {/* Date on large screens */}
                    <p className="text-light-gray whitespace-nowrap max-sm:hidden">
                        Jul'24 – Present
                    </p>

                    <div className="flex flex-col">
                        <p className="text-white text-lg font-semibold">
                            Full Stack Developer
                        </p>

                        <p className="text-light-gray mb-4">
                            Tapect Inc • Full-time
                            <span className="text-light-gray whitespace-nowrap hidden max-sm:inline-block ml-2">
                                • (2024 – Present)
                            </span>
                        </p>

                        <p className="text-white mb-4">For the past 1+ years, I have primarily worked with startup, developing products from the ground up.</p>
                        <p className="text-[#A8ADB2]">Key Contributions: </p>
                        <ul className="list-disc text-[#A8ADB2] space-y-2">
                            <li>
                                Integrated <strong>Zoho CRM</strong> and <strong>Pipedrive CRM</strong> using <strong>OAuth2.0</strong>, enabling seamless lead capture on form submissions.
                            </li>
                            <li>
                                Built a <strong>Slack OAuth2.0 integration</strong> to instantly post form submissions as messages into user-selected Slack channel.
                            </li>
                            <li>
                                Engineered a <strong>Refresh Token Mechanism</strong> to maintain secure sessions without repeated logins.
                            </li>
                            <li>
                                Implemented <strong>Google SSO</strong> for unified and simplified authentication.
                            </li>
                            <li>
                                Developed a <strong>Contact Sharing Module</strong> — connect, edit, and manage contacts effectively.
                            </li>
                            <li>
                                Built complete <strong>Team Management</strong> and <strong>Organization-Level User Controls</strong> for scalable enterprise use.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Work;
