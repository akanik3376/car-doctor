
import { useLoaderData } from 'react-router-dom';
import backgroundImage from '../../assets/images/checkout/checkout.png'
import { useContext } from 'react';
import { AuthContext } from '../../Provoidor/AuthProvidor';
import swal from 'sweetalert';

const CheckOut = () => {

    const data = useLoaderData()
    const { title, _id, price, img } = data
    const { user } = useContext(AuthContext)

    const HanselOrderForm = event => {
        event.preventDefault()

        const form = event.target;

        const name = form.name.value
        const phone = form.phone.value
        const email = user?.email
        const date = form.date.value
        const message = form.message.value

        const orderInfo = {
            customerName: name,
            phone,
            email,
            date,
            message,
            service: title,
            service_img: img,
            service_id: _id,
            price: price

        }
        console.log(orderInfo)
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal("Good job!", "Your order added successfully", "success");

                }
            })

        form.reset()
    }

    return (
        <div className='mb-16'>
            <div className="my-16 h-[280px]  relative 
                " style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <h3 className='absolute -mt-40 mb-0 ml-20 text-white font-bold text-2xl'>Check Out</h3>

                <div className="flex justify-center relative -mt-10 ">
                    <div className='bg-[#FF3811] w-[296px] h-10 flex justify-center rounded-t-full items-center text-white font-bold'>
                        <p >Home/</p>
                        <p >Checkout</p>
                    </div>
                </div>
            </div>



            <div className="flex-shrink-0 w-4/5 mx-auto bg-[#F3F3F3]">
                <h1 className="text-3xl font-bold text-center pt-5">You Book Services:
                    <span className='border-b-2 border-green-800 ml-2'>{title}</span></h1>
                <form onSubmit={HanselOrderForm}
                    className=' mx-12 pb-7 pt-4'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' defaultValue={user?.displayName} placeholder=" Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Phone</span>
                            </label>
                            <input type="phone" name='phone' defaultValue={user?.phoneNumber} placeholder="Your Phone" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="Date" name='date' placeholder="Date" className="input input-bordered" required />

                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text mt-5">Your Message</span>
                        </label>
                        <input type="text" name='message' placeholder=" Your Message" className="input input-bordered min-h-[96px]" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-white font-bold bg-[#FF3811]">Order Confirm</button>
                    </div>
                </form>
            </div>




        </div>
    );
};

export default CheckOut;