
import { Link } from 'react-router-dom';
import errorImg from '../../assets/logo/th.jpg'

const Error = () => {
    return (
        <div className='container mx-auto h-[90vh] flex flex-col justify-center items-center'>
            <img src={errorImg} className='w-[40%] mt-12' alt="" />
            <Link to='/'><button className='btn mt-5 font-bold'>back to Home</button></Link>
        </div>
    );
};

export default Error;