import About from "./About/About";
import Banner from "./Banner/Banner";
import ChooseUs from "./ChooseUs/ChooseUs";
import Services from "./Services/Services";

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="my-12">
                <About></About>
            </div>
            <div className="my-12">
                <Services></Services>
            </div>
            <div>
                <ChooseUs></ChooseUs>
            </div>
        </div>
    );
};

export default Home;