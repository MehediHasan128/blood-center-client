import img1 from '../../../../assets/homeImg/bg.jpg';
import img2 from '../../../../assets/homeImg/health.jpg';
import img3 from '../../../../assets/homeImg/blood.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Featured = () => {

    useEffect(() =>{
        AOS.init({
            duration: 1000
        })
    })

    return (
        <div className="container mx-auto my-20 dark:text-white">
            <h1 className="text-center text-5xl font-bold">Our Service</h1>
            <div className='lg:w-[80%] mx-auto mt-20'>
                <div data-aos="fade-right" className='flex flex-col md:flex-row items-center'>
                    <div className='md:w-[50%]'>
                        <img className='brightness-75 dark:brightness-100' src={img1} alt="" />
                    </div>
                    <div className='md:w-[50%]'>
                        <div className='ml-10 my-5 md:my-0 space-y-3 md:space-y-3 lg:space-y-6'>
                        <p className='text-3xl md:text-3xl lg:text-7xl font-bold text-gray-200 dark:text-zinc-700'>01</p>
                        <h1 className='text-2xl md:text-2xl lg:text-4xl font-semibold'>Blood Donation</h1>
                        <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorpe matti pulvinar dapibus leo.</p>
                        <button className='bg-red-700 px-5 py-1 lg:py-2 rounded-md text-white'>Read More</button>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" className='flex flex-col-reverse md:flex-row items-center'>
                    <div className='md:w-[50%]'>
                    <div className='ml-10 md:mr-10 my-5 md:my-0 space-y-3 md:space-y-3 lg:space-y-6 md:text-right'>
                        <p className='text-3xl md:text-3xl lg:text-7xl font-bold text-gray-200 dark:text-zinc-700'>02</p>
                        <h1 className='text-2xl md:text-2xl lg:text-4xl font-semibold'>Health Checkup</h1>
                        <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorpe matti pulvinar dapibus leo.</p>
                        <button className='bg-red-700 px-5 py-1 lg:py-2 rounded-md text-white'>Read More</button>
                    </div>
                    </div>
                    <div className='md:w-[50%]'>
                        <img className='brightness-75 dark:brightness-100' src={img2} alt="" />
                    </div>
                </div>
                <div data-aos="fade-right" className='flex flex-col md:flex-row items-center'>
                    <div className='md:w-[50%]'>
                        <img className='brightness-75 dark:brightness-100' src={img3} alt="" />
                    </div>
                    <div className='md:w-[50%]'>
                    <div className='ml-10 my-3 md:my-0 space-y-3 md:space-y-3 lg:space-y-6'>
                        <p className='text-3xl md:text-3xl lg:text-7xl font-bold text-gray-200 dark:text-zinc-700'>03</p>
                        <h1 className='text-2xl md:text-2xl lg:text-4xl font-semibold'>Blood Text</h1>
                        <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorpe matti pulvinar dapibus leo.</p>
                        <button className='bg-red-700 px-5 py-1 lg:py-2 rounded-md text-white'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;