import { Helmet } from "react-helmet-async";
import Achivment from "../Achivment/Achivment";
import Banner from "../Banner/Banner";
import ClientReview from "../ClientReview/ClientReview";
import ContactUs from "../ContactUs/ContactUs";
import Featured from "../Featured/Featured";
import Organization from "../Organization/Organization";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <Organization />
      <Achivment />
      <Featured />
      <ClientReview />
      <ContactUs />
    </div>
  );
};

export default Home;
