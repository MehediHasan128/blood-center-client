import { Avatar } from "keep-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ClientReview = () => {

    useEffect(() =>{
        AOS.init({
            duration: 1000
        })
    })

    return (
        <div className="container mx-auto overflow-y-hidden mb-20">
            <div>
                <h1 className="text-center text-5xl font-bold dark:text-white">Our <span className="text-red-700">Client Say</span></h1>
                <div className="mt-20 flex flex-col md:flex-row justify-center gap-8">
                    <div data-aos="fade-right" className="w-[70%] mx-auto lg:mx-0 lg:w-[20%] dark:text-white bg-gray-50 dark:bg-zinc-700 p-5 border rounded-lg">
                        <div>
                            <p className=" bg-slate-100 dark:bg-zinc-800 p-5 font-medium text-gray-600 dark:text-white rounded-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur magnam dignissimos porro ipsam nostrum eveniet accusantium fugit debitis!</p>
                        </div>
                        <div className="flex items-center gap-5 mt-5">
                            <div>
                            <Avatar className="object-cover" shape="circle" size="xl"  img="https://i.ibb.co/HFC82fW/rahad.jpg" /> 
                            </div>
                            <div>
                                <h1 className="text-xl font-bold">Araf Khan</h1>
                                <p className="font-medium">Doner</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="w-[70%] mx-auto lg:mx-0 lg:w-[20%] dark:text-white bg-gray-50 dark:bg-zinc-700 p-5 border rounded-lg">
                        <div>
                            <p className=" bg-slate-100 dark:bg-zinc-800 p-5 font-medium text-gray-600 dark:text-white rounded-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur magnam dignissimos porro ipsam nostrum eveniet accusantium fugit debitis!</p>
                        </div>
                        <div className="flex items-center gap-5 mt-5">
                            <div>
                            <Avatar className="object-cover" shape="circle" size="xl"  img="https://www.wikihow.com/images/9/90/What_type_of_person_are_you_quiz_pic.png" /> 
                            </div>
                            <div>
                                <h1 className="text-xl font-bold">Foysal Ahmed</h1>
                                <p className="font-medium">Recipient</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="w-[70%] mx-auto lg:mx-0 lg:w-[20%] dark:text-white bg-gray-50 dark:bg-zinc-700 p-5 border rounded-lg">
                        <div>
                            <p className=" bg-slate-100 dark:bg-zinc-800 p-5 font-medium text-gray-600 dark:text-white rounded-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur magnam dignissimos porro ipsam nostrum eveniet accusantium fugit debitis!</p>
                        </div>
                        <div className="flex items-center gap-5 mt-5">
                            <div>
                            <Avatar className="object-cover" shape="circle" size="xl"  img="https://tinyurl.com/57pk4hy4" /> 
                            </div>
                            <div>
                                <h1 className="text-xl font-bold">Sima</h1>
                                <p className="font-medium">Doner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientReview;