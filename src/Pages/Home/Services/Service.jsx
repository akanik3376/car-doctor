/* eslint-disable react/prop-types */
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const Service = ({ service }) => {

    const { title, img, price, } = service || {}
    return (
        <div className="card p-5 border mt-12 flex flex-col">
            <figure><img src={img} alt="" /></figure>
            <div className="flex-grow">
                <h2 className="card-title my-4">{title}</h2>
                <div className="flex justify-between items-center ">
                    <p className="text-red-600 font-semibold">Price: ${price}</p>
                    <p className="text-red-600 text-3xl "><BsFillArrowRightCircleFill></BsFillArrowRightCircleFill></p>
                </div>
            </div>
        </div>
    );
};

export default Service;