import './ContactUs.css'
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div className='contactBackground bg-fixed py-20 mt-36 mb-48'>
            <div className='container mx-auto flex justify-center items-center h-full'>
                <div>
                <h1 className='text-5xl text-white font-semibold text-center'>Contact Us</h1>
                <div className='mt-20 border-8 lg:border-[18px] rounded-2xl border-red-700 px-10 lg:px-32 py-24'>
                    <div className='flex flex-col md:flex-row gap-24'>
                        <div className='space-y-3 text-white text-center'>
                            <div className='flex justify-center items-center gap-4  text-3xl font-bold'>
                            <FaPhoneAlt className='text-red-700' />
                            <p>Call Us</p>
                            </div>
                            <p className='text-lg font-semibold'>1(234)5689, 1(234)5689</p>
                        </div>
                        <div className='space-y-3 text-white text-center'>
                            <div className='flex justify-center items-center gap-4 md:text-2xl text-3xl font-bold'>
                            <FaMapMarkerAlt className='text-red-700' />
                            <p>Loction</p>
                            </div>
                            <p className='text-lg font-semibold'>Gulshan, Dhaka</p>
                        </div>
                        <div className='space-y-3 text-white text-center'>
                            <div className='flex justify-center items-center gap-4 md:text-2xl text-3xl font-bold'>
                            <FaClock className='text-red-700' />
                            <p>Opening Hours</p>
                            </div>
                            <p className='text-lg font-semibold'>24 Hours</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;