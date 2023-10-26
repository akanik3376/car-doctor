
import Team from '../../../assets/icons/group.svg'
import Delivery from '../../../assets/icons/deliveryt.svg'
import check from '../../../assets/icons/check.svg'

import Support from '../../../assets/icons/person.svg'
import time from '../../../assets/icons/Group 38729.svg'
import Wrench from '../../../assets/icons/Wrench.svg'


const ChooseUs = () => {
    return (
        <div className="my-12">
            <div className="flex flex-col justify-center items-center space-y-3">
                <p className="text-[#FF3811]">Core Features</p>
                <h1 className="font-bold text-3xl">Why Choose Us</h1>
                <p className="text-center">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don`t look even slightly believable. </p>
            </div>

            <div className='my-12 grid grid-cols-2 md:grid-cols-6 gap-4 '>
                <div className='flex flex-col items-center mb-5 p-5 hover:text-white hover:bg-[#FF3811] border'>
                    <img src={Team} alt="" />
                    <p>Expert Team</p>
                </div>
                <div className='flex flex-col items-center mb-5 p-5 hover:text-white hover:bg-[#FF3811] border'>
                    <img src={time} className='bg-black' alt="" />
                    <p>Timely Delivery</p>
                </div>

                <div className='flex flex-col items-center mb-5 p-5 hover:text-white hover:bg-[#FF3811] border'>
                    <img src={Support} alt="" />
                    <p>24/7 Support</p>
                </div>

                <div className='flex flex-col items-center mb-5 p-5 hover:text-white hover:bg-[#FF3811] border'>
                    <img src={Wrench} alt="" />
                    <p>Best Equipment</p>
                </div>

                <div className='flex flex-col items-center mb-5 p-5 hover:text-white hover:bg-[#FF3811] border'>
                    <img src={check} alt="" />
                    <p>100% Guaranty</p>
                </div>



                <div className='flex flex-col items-center mb-5 p-5 hover:text-white hover:bg-[#FF3811] border'>
                    <img src={Delivery} alt="" />
                    <p>Timely Delivery</p>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;