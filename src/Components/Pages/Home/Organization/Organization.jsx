import donate from "../../../../assets/homeImg/donate.jpg";
import doctor from "../../../../assets/homeImg/doctor.jpg";
import { FaRegHandPointRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Organization = () => {

    useEffect(() =>{
        AOS.init({
            duration: 1000
        })
    })

  return (
    <div className="bg-slate-200 dark:bg-zinc-600">
      <div className="container mx-auto py-24 lg:py-48 flex flex-col lg:flex-row items-center gap-20">
        <div data-aos="fade-right" className="lg:w-[60%] relative">
          <img
            className="w-full rounde brightness-75 rounded-xl"
            src={donate}
            alt=""
          />
          <img
            className="w-64 h-64 object-cover rounded-full absolute top-32 md:top-96 lg:top-48 -right-1 md:right-2 lg:-right-12 border-8"
            src={doctor}
            alt=""
          />
        </div>
        <div data-aos="fade-left" className="space-y-5 mt-10 lg:mt-0 px-5 lg:px-0">
          <p className="text-red-700 lg:text-xl font-medium">
            Help the people to donate blood
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold dark:text-white">
            Welcome to <span className="text-red-700">Blood</span> <br />
            Donors Organization
          </h1>
          <p className="md:w-[90%] lg:w-[70%] text-justify lg:text-left leading-relaxed dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
            tempor incididunt ut labore et dolore magna aliqua. suspendisse the
            gravida. Risus commodo viverra maecenas
          </p>

          <div className="flex gap-20 items-center font-medium dark:text-white leading-relaxed">
            <div>
              <p className="flex items-center gap-2">
                <FaRegHandPointRight className="text-red-700" />
                Good Service
              </p>
              <p className="flex items-center gap-2">
                <FaRegHandPointRight className="text-red-700" />
                Help People
              </p>
              <p className="flex items-center gap-2">
                <FaRegHandPointRight className="text-red-700" />
                Hugine Tools
              </p>
            </div>
            <div>
              <p className="flex items-center gap-2">
                <FaRegHandPointRight className="text-red-700" />
                24h Service
              </p>
              <p className="flex items-center gap-2">
                <FaRegHandPointRight className="text-red-700" />
                Health Check
              </p>
              <p className="flex items-center gap-2">
                <FaRegHandPointRight className="text-red-700" />
                Blood Bank
              </p>
            </div>
          </div>
          <div>
            <button className="bg-red-700 px-5 py-2 text-white rounded-md">Explore Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organization;
