import { useState } from "react";
import { IoIosMoon, IoMdSunny } from "react-icons/io";

const Home = () => {

    const [mode, setMode] = useState(false);

    return (
        <div className="w-96 mx-auto text-center mt-36">
            <h1 className="text-5xl font-bold dark:text-white">Hello World</h1>
            <div className="w-[90%] mx-auto mt-10 text-justify bg-zinc-100 dark:bg-zinc-700 p-10">
                <p className="dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eaque sed in unde esse nam minima placeat quisquam ipsa ratione.</p>
            </div>
            <div className="w-fit mx-auto mt-10 text-4xl">
            {
                    mode ? <IoMdSunny className="cursor-pointer dark:text-white" onClick={() => setMode(!mode)} /> : <IoIosMoon className="cursor-pointer" onClick={() => setMode(!mode)} />
            }
            </div>
        </div>
    );
};

export default Home;