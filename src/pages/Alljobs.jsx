import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import LoadingText from "../component/LoadingText/LoadingText";
import TableRow from "../component/TableRow/TableRow";
import { useState } from "react";
import InputForm from "../component/InputForm/InputForm";

const Alljobs = () => {
  const axios = useAxios();
  const [search, setSearch] = useState("");
  let isTrue =  true
  const handleSearch = (e) => {
    e.preventDefault();
    isTrue = false
    e.target.reset()
   refetch()
  }
  const getData = async () => {
    const res = await axios.get(`/allJobs?search=${search}`);
    setSearch("")
    return res;
  };
  const { data, isLoading,refetch,isRefetching } = useQuery({
    queryKey: ["allJobs"],
    queryFn: getData,
    enabled: isTrue,
  });
  if (isLoading || isRefetching) {
    return (
      <div className="min-h-screen max-w-[1200px] mx-auto">
        <InputForm handleSearch={handleSearch} setSearch={setSearch}/>
        <LoadingText />
      </div>
    );
  }
  return (
    <div className="min-h-screen max-w-[1200px] mx-auto">
        <InputForm handleSearch={handleSearch} setSearch={setSearch}/>
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
              <TableRow key={job._id} isTrue={false} data={job} />
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
    </div>
  );
};

export default Alljobs;
