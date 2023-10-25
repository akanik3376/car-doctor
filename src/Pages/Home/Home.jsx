import About from "./About/About";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="my-12">
                <About></About>
            </div>
        </div>
    );
};

export default Home;