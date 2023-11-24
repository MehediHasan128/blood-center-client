import Achivment from "../Achivment/Achivment";
import Banner from "../Banner/Banner";
import Organization from "../Organization/Organization";

const Home = () => {

    return (
        <div>
            <Banner />
            <div>
                <Organization />
            </div>
            <Achivment />
        </div>
    );
};

export default Home;