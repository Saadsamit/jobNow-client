import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const JobCart = ({data}) => {

  const { _id,imgUrl, title, userName, category, salary, description, jobDeadline, postDate, apply} = data;
//    console.log(imgUrl, title, userName, category, salary, description, jobDeadline, postDate, apply);

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src={imgUrl}
          alt={title}
          className='w-full max-h-[230px]'
        />
      </figure>
      <div className="card-body">
        <div className='flex gap-2 justify-between'>
        <p className='text-[#071952]'><span className='font-semibold text-[#0B666A]'>Category:</span> {category}</p>
        <p className='text-[#071952] text-right'><span className='font-semibold text-[#0B666A]'>Post Date:</span> {postDate}</p>
        </div>
        <h2 className="card-title block text-[#071952]"><span className='text-[#0B666A]'>Job:</span> {title}</h2>
        <p className='text-[#071952]'><span className='font-semibold text-[#0B666A]'>Description:</span> {description.length > 100 ? description.slice(0,100) +"..." : description}</p>
        <p className='text-[#071952]'><span className='font-semibold text-[#0B666A]'>Salary:</span> {salary}</p>
        <p className='text-[#071952]'><span className='font-semibold text-[#0B666A]'>Post by</span> {userName}</p>
        <div className='flex gap-2 justify-between'>
        <p className='text-[#071952]'><span className='font-semibold text-[#0B666A]'>Last Date:</span> {jobDeadline}</p>
        <p className='text-[#071952] text-right'><span className='font-semibold text-[#0B666A]'>Apply:</span> {apply}</p>
        </div>
        <Link to={`job-detail/${_id}`} className="btn font-semibold bg-[#0B666A] text-white hover:bg-[#35A29F]">Details</Link>
      </div>
    </div>
  );
};
JobCart.propTypes ={
    data: PropTypes.object.isRequired
}
export default JobCart;
