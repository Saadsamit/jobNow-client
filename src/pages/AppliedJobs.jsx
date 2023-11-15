import { useContext } from "react";
import useAxios from "../hooks/useAxios";
import { contextProvider } from "../Authprovider";
import { useQuery } from "@tanstack/react-query";
import LoadingCard from "../component/LoadingCard/LoadingCard";
import JobCart from "../component/JobCart";

const AppliedJobs = () => {
  const axios = useAxios();
  const { user } = useContext(contextProvider);
  const getData = () => {
    const res = axios.get(`/applied-job?email=${user?.email}`);
    return res;
  };
  const { data = [], isLoading } = useQuery({
    queryKey: ["addliedJobs"],
    queryFn: getData,
  });
  if (isLoading) {
    return (
      <div className="max-w-[1200px] mx-auto min-h-screen grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </div>
    );
    
  }
  console.log(data);
  return <div>
    {data.data.length > 0 ? (<div className="py-10 min-h-screen max-w-[1200px] mx-auto grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
  {data?.data.map((job, idx) => (
            <JobCart key={idx} data={job} />
          ))}
</div>) : (<div className="flex justify-center items-center min-h-screen">
    no data found
</div>)}
  </div>;
};

export default AppliedJobs;
