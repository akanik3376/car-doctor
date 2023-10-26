import { useEffect, useState } from "react";
import Service from "./Service";
import timeImg from '../../../assets/logo/001-timetable.svg'
import phoneImg from '../../../assets/logo/Group 34.svg'
import locationImg from '../../../assets/logo/Group 35.svg'
// import contactImg from '../../../assets/logo/Group.svg'
const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="text-center space-y-4">
                <p className="text-red-600 font-medium">Service</p>
                <h3 className="font-bold text-2xl">Our Service Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomize <br /> words which don`t look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services?.map(service => <Service key={service.service_id} service={service}></Service>)
                }
            </div>

            <div className="my-12 bg-[#151515] h-[200px] flex justify-around items-center text-white">
                <div className="flex items-center gap-4">
                    <img src={timeImg} alt="" />
                    <div>
                        <p>We are open monday-friday</p>
                        <h4 className="text-xl">7:00 am - 9:00 pm</h4>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <img src={phoneImg} alt="" />
                    <div>
                        <p>We are open monday-friday</p>
                        <h4 className="text-xl">7:00 am - 9:00 pm</h4>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <img src={locationImg} alt="" />
                    <div>
                        <p>We are open monday-friday</p>
                        <h4 className="text-xl">7:00 am - 9:00 pm</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;