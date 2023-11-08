import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { contextProvider } from "../Authprovider";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
const UpdateJob = () => {
  const { myTheme } = useContext(contextProvider);
  const axios = useAxios();
  const { id } = useParams();
  const getData = async () => {
    const {data} = await axios.get(`/Job-detail/${id}`);
    // setDeadline(new Date(data?.data?.jobDeadline))
    return data;
  };
  const { data, isLoading } = useQuery({
    queryKey: ["detail"],
    queryFn: getData,
  });
  const MyDate = new Date(data?.jobDeadline)
  const [deadline, setDeadline] = useState(null);
  if (isLoading) {
    return <div className="min-h-screen flex justify-center items-center"><span className="loading loading-infinity loading-lg"></span></div>
  }
  const handleSumiit = (e) => {
    e.preventDefault();
    const form = e.target;
    const imgUrl = form.imgUrl.value;
    const title = form.title.value;
    const category = form.category.value;
    const salary =
      form.salary.value + " " + "per" + " " + form.salaryTime.value;
    const description = form.description.value;
    const jobDeadline = deadline === null ? MyDate == 'Invalid Date' ? "" : MyDate : new Intl.DateTimeFormat("es").format(deadline);
    const toastLoading = toast.loading("update is processing", myTheme);
    const UpdateJobData = {
      imgUrl,
      title,
      category,
      salary,
      description,
      jobDeadline,
    };
    axios.patch(`/update-job/${id}`,UpdateJobData)
    .then(data=>{
      console.log(data.data);
      if(data?.data?.modifiedCount > 0){
        return toast.success("update Successfull", { ...myTheme, id: toastLoading });
      }
      return toast.error("you need to change data", { ...myTheme, id: toastLoading })
    }).catch(err=>{
      toast.error(err.message, { ...myTheme, id: toastLoading })
    })
  };
  return (
    <div className="min-h-screen max-w-[1200px] mx-auto flex flex-col justify-center pb-10">
      <h3 className="text-[#0B666A] text-center capitalize py-6 font-bold text-4xl">
        update job
      </h3>
      <form
        className="p-10 shadow-xl border border-[#0B666A] rounded-3xl w-full grid sm:grid-cols-2 grid-cols-1 gap-4 justify-center"
        onSubmit={handleSumiit}
      >
        <div>
          <h4 className="capitalize ps-2 text-[#0B666A]">Image Url</h4>
          <input
            type="text"
            name="imgUrl"
            placeholder="Image Url"
            required
            defaultValue={data?.imgUrl}
            className="input input-bordered border-[#0B666A] focus:outline-[#0B666A] w-full"
          />
        </div>
        <div>
          <h4 className="capitalize ps-2 text-[#0B666A]">job Title</h4>
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            required
            defaultValue={data?.title}
            className="input input-bordered border-[#0B666A] focus:outline-[#0B666A] w-full"
          />
        </div>
        <div className="form-control w-full">
          <h4 className="capitalize ps-2 text-[#0B666A]">job type</h4>
          <select
            className="select select-bordered border-[#0B666A] focus:outline-[#0B666A]"
            name="category"
            defaultValue={data?.category}
            required
          >
            <option disabled selected>
              job type
            </option>
            <option value="On Site">On Site</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Part Time">Part Time</option>
          </select>
        </div>
        <div>
          <h4 className="capitalize ps-2 text-[#0B666A]">Salary range</h4>
          <input
            type="number"
            name="salary"
            placeholder="Salary range"
            required
            defaultValue={parseInt(data?.salary)}
            className="input input-bordered border-[#0B666A] focus:outline-[#0B666A] w-full"
          />
        </div>
        <div className="form-control w-full">
          <h4 className="capitalize ps-2 text-[#0B666A]">Salary Time</h4>
          <select
            className="select select-bordered border-[#0B666A] focus:outline-[#0B666A]"
            name="salaryTime"
            defaultValue={data?.salary.split(" ")[2]}
            required
          >
            <option disabled selected>
              Salary Time
            </option>
            <option value="hour">hour</option>
            <option value="year">year</option>
          </select>
        </div>
        <div className="flex flex-col">
          <h4 className="capitalize ps-2 text-[#0B666A]">job deadline</h4>
          <DatePicker
            dateFormat="dd/MM/yyyy"
            className="input input-bordered border-[#0B666A] focus:outline-[#0B666A] w-full"
            selected={deadline === null ? MyDate == 'Invalid Date' ? "" : MyDate : deadline}
            onChange={(date) => setDeadline(date)}
          />
        </div>
        <div className="sm:col-span-2">
          <h4 className="capitalize ps-2 text-[#0B666A]">Job Description</h4>
          <textarea
            name="description"
            placeholder="Job Description"
            defaultValue={data?.description }
            className="input min-h-[100px] input-bordered placeholder:pt-2 border-[#0B666A] focus:outline-[#0B666A] w-full"
          ></textarea>
        </div>
        <div className="flex justify-center sm:col-span-2">
          <input
            type="submit"
            value="update job"
            className="btn font-semibold bg-[#0B666A] text-white hover:bg-[#35A29F]"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateJob;
