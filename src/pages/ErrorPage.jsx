import { Link } from "react-router-dom";
import errorPageImg from "../assets/errorPageImg.png"
import { AiOutlineHome } from 'react-icons/ai';
const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <img src={errorPageImg} alt="" />
            <Link className="flex items-center gap-2 text-xl capitalize btn mt-4 bg-[#0B666A] text-white hover:text-white hover:bg-[#0B666A]"><AiOutlineHome/> go home</Link>
        </div>
    );
};

export default ErrorPage;