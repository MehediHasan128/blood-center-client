import CountUp from 'react-countup';
import { FaAward } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { IoTrophy } from "react-icons/io5";
import { FaUserMd } from "react-icons/fa";
import './Achivment.css'

const Achivment = () => {

    return (
        <div className='backgroundImage bg-fixed'>
            <div className='container mx-auto py-36'>
            <div className='flex flex-col md:flex-row lg:justify-between'>
            <div className='w-fit mx-auto mb-10 lg:mb-0 text-center text-white'>
                <FaAward className='text-5xl lg:text-7xl text-red-600 w-fit mx-auto mb-5'  />
                <CountUp className='text-3xl lg:text-5xl font-bold' end={50} duration={10} />
                <p className='text-xl lg:text-3xl uppercase mt-5'>Years Experience</p>
            </div>
            <div className='w-fit mx-auto mb-10 lg:mb-0 text-center text-white'>
                <FaUserMd className='text-5xl lg:text-7xl text-red-600 w-fit mx-auto mb-5'  />
                <CountUp className='text-3xl lg:text-5xl font-bold' end={4658} duration={10} />
                <p className='text-xl lg:text-3xl uppercase mt-5'>Happy Donors</p>
            </div>
            <div className='w-fit mx-auto mb-10 lg:mb-0 text-center text-white'>
                <IoTrophy className='text-5xl lg:text-7xl text-red-600 w-fit mx-auto mb-5'  />
                <CountUp className='text-5xl font-bold' end={38} duration={10} />
                <p className='text-xl lg:text-3xl uppercase mt-5'>Total Awards</p>
            </div>
            <div className='w-fit mx-auto mb-10 lg:mb-0 text-center text-white'>
                <IoIosPeople className='text-5xl lg:text-7xl text-red-600 w-fit mx-auto mb-5'  />
                <CountUp className='text-3xl lg:text-5xl font-bold' end={5600} duration={10} />
                <p className='text-xl lg:text-3xl uppercase mt-5'>Happy Client</p>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Achivment;