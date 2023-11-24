import Achivment from "../Achivment/Achivment";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import Organization from "../Organization/Organization";

const Home = () => {

    return (
        <div>
            <Banner />
            <div>
                <Organization />
            </div>
            <Achivment />
            <Featured />
        </div>
    );
};

export default Home;