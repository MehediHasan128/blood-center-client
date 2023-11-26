import Achivment from "../Achivment/Achivment";
import Banner from "../Banner/Banner";
import ClientReview from "../ClientReview/ClientReview";
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
            <ClientReview />
        </div>
    );
};

export default Home;