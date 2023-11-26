import { Link } from 'react-router-dom';
import banner from '../../../../assets/Banner/banner.jpg';
import banner2 from '../../../../assets/homeImg/bg2.jpg';

const Banner = () => {
    return (
        <div className='relative'>
           <img className='w-full h-screen object-cover' src={banner} alt="" />
            <div className='absolute top-0 bg-black bg-opacity-50 w-full h-full'>
                <div className='flex flex-col md:flex-row justify-center items-center h-full gap-20'>
                    <div className='text-white md:w-[50%]'>
                        <div className='px-3 lg:px-0 space-y-5'>
                        <h1 className='text-4xl lg:text-7xl font-extrabold leading-snug md:leading-normal'>Give <span className='text-red-700'>Blood</span> and Save Lives.</h1>
                        <p className='text-xl lg:text-3xl'>Donate Blood Today! Your generosity can save lives. Join us in making a difference – one drop at a time.</p>
                        <div className='space-x-3'>
                            <Link to='/registration'>
                            <button className='border-2 border-red-700 hover:border-red-400 hover:bg-red-400 duration-700 px-5 py-3 rounded-md'>
                                Join as a doner
                            </button>
                            </Link>
                            <button className='border-2 border-red-700 hover:border-red-900 bg-red-700 hover:bg-red-900 duration-700 px-5 py-3 rounded-md'>
                                Search doner
                            </button>
                        </div>
                        </div>
                    </div>
                    <div className='hidden md:flex md:w-[30%] lg:w-[20%]'>
                        <img className='rounded-2xl brightness-90' src={banner2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;