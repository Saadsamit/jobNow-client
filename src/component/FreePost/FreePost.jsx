import postImg from "../../assets/jobPost.jpg"
import { Link } from 'react-router-dom';
const FreePost = () => {
    return (
        <div className="flex md:flex-row flex-col justify-between items-center max-w-[1200px] mx-auto my-10 rounded-xl overflow-hidden bg-[#FFF6F6]">
            <div className="p-10 md:w-1/2">
                <h3 className="sm:text-5xl text-4xl font-semibold text-[#071952]">post your job <span className="text-[#0B666A]">free!</span></h3>
                <p className="pt-6 text-[#071952]">Unlock your career potential today! {"Don't"} miss out on this incredible opportunity to connect with the perfect employer and make your career aspirations a reality.</p>
                <Link to="/add-job" className="mt-5 btn font-semibold bg-[#0B666A] text-white hover:bg-[#35A29F]">post job</Link>
            </div>
            <div className="md:w-1/2 h-full">
            <img src={postImg} alt="" className="w-full h-full" />
            </div>
        </div>
    );
};

export default FreePost;