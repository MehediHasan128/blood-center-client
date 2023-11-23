import logo from "../../../../assets/logo/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-black dark:bg-zinc-700 p-8 text-white">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-black dark:bg-zinc-700 text-center md:justify-between">
          <div className="flex items-center">
            <img src={logo} alt="logo-ct" className="w-14 md:w-16 lg:w-24" />
            <h1 className="text-xl md:text-3xl">
              <span className="font-bold text-red-700">Blood</span> <br />{" "}
              <span>Center</span>
            </h1>
          </div>
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <a
                href="#"
                className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
              >
                License
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
              >
                Contribute
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <p className="block text-center font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
          © 2023 Blood Center
        </p>
      </footer>
    </div>
  );
};

export default Footer;
