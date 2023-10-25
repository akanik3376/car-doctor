
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'


const About = () => {
    return (
        <div className="  ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 lg:h-[60vh] relative mb-8 lg:mb-0">
                    <img src={person} className=" w-3/4  rounded-lg shadow-2xl" />
                    <img src={parts} className="  absolute right-7  border-8 border-white top-1/2  w-1/2 rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2'>
                    <h3 className="text-xl text-[#FF3811] font-semibold">About Us</h3>
                    <h1 className="text-3xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or ransomed words which don`t look even slightly believable.</p>
                    <p className="pb-6">the majority have suffered alteration in some form, by injected humour, or randomize words which don`t look even slightly believable. </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;