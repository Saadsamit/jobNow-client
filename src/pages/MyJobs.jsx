import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import LoadingText from "../component/LoadingText/LoadingText";
import TableRow from "../component/TableRow/TableRow";
import { useContext } from "react";
import { contextProvider } from './../Authprovider';

const MyJobs = () => {
  const axios = useAxios();
  const {user} = useContext(contextProvider)
  const getData = async () => {
    const res = await axios.get(`/allJobs/${user?.email}`);
    return res;
  };
  const { data, isLoading } = useQuery({
    queryKey: ["MyJobs"],
    queryFn: getData,
  });
  if (isLoading) {
    return (
      <div className="min-h-screen max-w-[1200px] mx-auto">
        <LoadingText />
      </div>
    );
  }
  return (
    <div className="min-h-screen max-w-[1200px] mx-auto">
      {
            data?.data ? (
                <div className="overflow-x-auto">
      <table className="table my-10">
          {/* head */}
          <thead className="border-b-2 border-[#0B666A]">
            <tr>
              <th>Name</th>
              <th>Job Title</th>
              <th>Apply</th>
              <th>Post date</th>
              <th>Job Deadline</th>
              <th>Salary range</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((job) => (
              <TableRow key={job._id} isTrue={true} data={job} />
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th>Name</th>
              <th>Job Title</th>
              <th>Apply</th>
              <th>Post date</th>
              <th>Job Deadline</th>
              <th>Salary range</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
            ) : <div className="flex justify-center items-center h-full">
                <h5 className="capitalize h-full">no data found</h5>
            </div>
        }
    </div>
  );
};

export default MyJobs;