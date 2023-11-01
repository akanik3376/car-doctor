import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SingUpPic from '../../assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../../Provoidor/AuthProvidor";

const SignUp = () => {

    const { createUser } = useContext(AuthContext)
    const location = useLocation();
    // console.log(location)
    const navigate = useNavigate()


    const HandelLogin = e => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value

        console.log(name, email, password)
        createUser(email, password)
            .then((result) => {
                const user = result.user;

                console.log(user)
                navigate(location?.state ? location.state : '/')
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <div className=" my-12">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={SingUpPic} alt="" />
                </div>
                <div className=" w-full max-w-sm border-2">
                    <h1 className="text-3xl text-center mt-5 font-bold">Sign Up</h1>
                    <form onSubmit={HandelLogin} className="p-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name='name'
                                placeholder="Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email'
                                placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password'
                                placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] text-white">Sign Up</button>
                        </div>

                        <div className='flex flex-col text-center'>
                            <p className=' text-[#444] my-3'>Or Sign In with</p>
                            <div className='flex justify-center gap-5'>
                                <button className='text-3xl'><FcGoogle></FcGoogle></button>
                                <button className='text-3xl'><AiFillFacebook></AiFillFacebook></button>
                                <button className='text-3xl'><AiFillLinkedin></AiFillLinkedin></button>
                            </div>
                        </div>
                        <Link>
                            <p className='text-center text-[#444] my-3'>Have an account? <Link to='/signUp' className='text-[#FF3811]'>Sign In</Link></p>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;