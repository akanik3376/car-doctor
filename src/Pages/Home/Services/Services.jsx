import { useEffect, useState } from "react";
import Service from "./Service";

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
        </div>
    );
};

export default Services;