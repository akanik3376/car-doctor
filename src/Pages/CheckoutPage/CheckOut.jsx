
import backgroundImage from '../../assets/images/checkout/checkout.png'

const CheckOut = () => {
    return (
        <div>
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


        </div>
    );
};

export default CheckOut;