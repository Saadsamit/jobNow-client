import { BsFillChatLeftDotsFill } from 'react-icons/bs';
import { MdFindInPage } from 'react-icons/md';
import { FaComputer } from 'react-icons/fa6';

const HowWeHelp = () => {
    return (
        <div className='max-w-[1200px] mx-auto py-10'>
            <h4 className='text-center text-4xl font-bold text-[#0B666A]'>How we can help</h4>
            <p className='text-center font-Poppins font-semibold text-[#071952]'>Making your job search easy</p>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-4 mt-10'>
            <div className='flex flex-col items-center'>
            <FaComputer className='text-7xl text-[#0B666A]'/>
                <h5 className='text-2xl font-semibold text-[#0B666A] mb-5'>Free Job Posting</h5>
                <p className='text-center text-lg text-[#071952]'>Post an unlimited number of your open vacancies absolutely for free.</p>
            </div>
            <div className='flex flex-col items-center'>
                <MdFindInPage className='text-7xl text-[#0B666A]'/>
                <h5 className='text-2xl font-semibold text-[#0B666A] mb-5'>All Types of Jobs</h5>
                <p className='text-center text-lg text-[#071952]'>Post an unlimited number of your open vacancies absolutely for free.</p>
            </div>
            <div className='flex flex-col items-center'>
                <BsFillChatLeftDotsFill className='text-7xl text-[#0B666A]'/>
                <h5 className='text-2xl font-semibold text-[#0B666A] mb-5'>Power of Networking</h5>
                <p className='text-center text-lg text-[#071952]'>Post an unlimited number of your open vacancies absolutely for free.</p>
            </div>
            </div>
        </div>
    );
};

export default HowWeHelp;