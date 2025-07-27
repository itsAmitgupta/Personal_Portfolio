const Footer = () => {
    return (
        <footer
            id="contact"
            className="w-full flex justify-start pt-6 pb-1 border-t border-[#A8ADB2] mt-10"
        >
            <div className="flex items-center gap-2 text-[#A8ADB2] hover:text-white transition-colors">
                {/* Email Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                    className="tabler-icon tabler-icon-mail-filled"
                >
                    <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
                    <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
                </svg>

                {/* Email Link */}
                <a
                    href="mailto:amitgupta.ag2002@gmail.com"
                >
                    amitgupta.ag2002@gmail.com
                </a>
            </div>
        </footer>
    );
};

export default Footer;
