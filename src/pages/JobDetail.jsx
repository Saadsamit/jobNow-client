import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import LoadingCard from "../component/LoadingCard/LoadingCard";

const JobDetail = () => {
  const { id } = useParams();
  const axios = useAxios();
  const getData = () => {
    const res = axios.get(`/Job-detail/${id}`);
    return res;
  };
  const { data, isLoading } = useQuery({
    queryKey: ["detail"],
    queryFn: getData,
  });
  if (isLoading) {
    return <LoadingCard />;
  }
  return (
    <div className="flex md:flex-row flex-col gap-5 items-center m-10 p-10 min-h-screen max-w-[1200px] border-2 border-[#0B666A] rounded-xl mx-auto">
      <div className="md:w-1/2">
        <img
          src={data?.data?.imgUrl}
          alt={data?.data?.title}
          className="w-full rounded-xl"
        />
      </div>
      <div className="md:w-1/2">
        <div className="sm:flex justify-between">
          <p className="text-[#071952]">
            <div className="badge text-white bg-[#0B666A]">
              {data?.data?.category}
            </div>{" "}
          </p>
          <p className="text-[#071952]">
            <span className="font-Poppins font-semibold text-[#0B666A] sm:text-xl text-lg capitalize">
              post Date:
            </span>{" "}
            {data?.data?.postDate}
          </p>
        </div>
        <h2 className="text-[#071952] sm:text-2xl text-xl py-4 font-semibold">
          <span className="font-Poppins font-semibold text-[#0B666A] sm:text-3xl text-2xl capitalize">
            title:
          </span>{" "}
          {data?.data?.title}
        </h2>
        <p className="text-[#071952]">
          <span className="font-Poppins font-semibold text-[#0B666A] sm:text-xl text-lg capitalize">
            description:
          </span>{" "}
          {data?.data?.description}
        </p>
        <p className="text-[#071952]">
          <span className="font-Poppins font-semibold text-[#0B666A] sm:text-xl text-lg capitalize">
            salary:
          </span>{" "}
          {data?.data?.salary}
        </p>
        <p className="text-[#071952]">
          <span className="font-Poppins font-semibold text-[#0B666A] capitalize">
            post by
          </span>{" "}
          {data?.data?.userName}
        </p>
        <div className="flex sm:justify-between sm:flex-row-reverse flex-col">
          <p className="text-[#071952]">
            <span className="font-Poppins font-semibold text-[#0B666A] sm:text-xl text-lg capitalize">
              last date:
            </span>{" "}
            {data?.data?.jobDeadline}
          </p>
          <p className="text-[#071952]">
            <span className="font-Poppins font-semibold text-[#0B666A] sm:text-xl text-lg capitalize">
              apply:
            </span>{" "}
            {data?.data?.apply}
          </p>
        </div>
        <button className="btn font-semibold w-full mt-5 bg-[#0B666A] text-white hover:bg-[#35A29F]">
            apply
          </button>
      </div>
    </div>
  );
};

export default JobDetail;
