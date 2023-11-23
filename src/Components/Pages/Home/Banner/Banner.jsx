import banner from '../../../../assets/Banner/banner.jpg';

const Banner = () => {
    return (
        <div>
           <img className='w-full h-screen object-cover' src={banner} alt="" />
            <div className='absolute top-0 bg-black bg-opacity-50 w-full h-full'>
                <div className='flex justify-center items-center h-full'>
                    <div className='text-white'>
                        <div className='px-3 lg:px-0 space-y-5'>
                        <h1 className='text-4xl lg:text-7xl font-extrabold leading-snug md:leading-normal'>Give <span className='text-red-700'>Blood</span> Save Lives.</h1>
                        <p className='text-xl lg:text-3xl'>Donate Blood Today! Your generosity can save lives. Join us in making a difference – one drop at a time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;