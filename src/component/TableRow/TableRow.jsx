import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TableRow = ({ isTrue, data,handleClick }) => {
  const { _id, title, userName, apply, salary, jobDeadline, postDate } = data;
  const RawJobDeadline = new Date(jobDeadline)
  const RawPostDate = new Date(postDate)
  const Deadline = new Intl.DateTimeFormat("es").format(RawJobDeadline);
  const PostDate = new Intl.DateTimeFormat("es").format(RawPostDate);
  return (
    <tr className="border-b-2 border-[#0B666A]">
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{userName}</div>
          </div>
        </div>
      </td>
      <td>{title}</td>
      <td>{apply}</td>
      <td>{PostDate}</td>
      <td>{Deadline}</td>
      <td>{salary}</td>
      {isTrue ? (
        <>
          <th>
            <Link
              to={`/update-job/${_id}`}
              className="btn bg-transparent border-[#0B666A] font-semibold hover:bg-[#0B666A] hover:text-white btn-xs"
            >
              update
            </Link>
          </th>
          <th>
            <button
              onClick={()=>handleClick(_id)}
              className="btn bg-transparent border-[#0B666A] font-semibold hover:bg-[#0B666A] hover:text-white btn-xs"
            >
              delete
            </button>
          </th>
        </>
      ) : (
        <th>
          <Link
            to={`/job-detail/${_id}`}
            className="btn bg-transparent border-[#0B666A] font-semibold hover:bg-[#0B666A] hover:text-white btn-xs"
          >
            details
          </Link>
        </th>
      )}
    </tr>
  );
};
TableRow.propTypes = {
  isTrue: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  handleClick: PropTypes.func
};
export default TableRow;
