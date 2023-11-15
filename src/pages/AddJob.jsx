import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { contextProvider } from "../Authprovider";
import useAxios from "./../hooks/useAxios";
import toast from "react-hot-toast";
const AddJob = () => {
  const [deadline, setDeadline] = useState(new Date());
  const { user, myTheme } = useContext(contextProvider);
  const axios = useAxios();
  const handleSumiit = (e) => {
    e.preventDefault();
    const form = e.target;
    const imgUrl = form.imgUrl.value;
    const title = form.title.value;
    const userName = user.displayName || "no name found";
    const category = form.category.value;
    const salary =
      form.salary.value + " " + "per" + " " + form.salaryTime.value;
    const description = form.description.value;
    const date = new Date(Date.now());
    const postDate = date.toISOString();
    const jobDeadline = deadline.toISOString();
    const apply = 0;
    const email = user.email || "no email found";
    const addJobData = {
      imgUrl,
      title,
      userName,
      category,
      salary,
      description,
      jobDeadline,
      postDate,
      apply,
      email,
    };
    const toastLoading = toast.loading("add is processing", myTheme);
    axios
      .post("/add-job", addJobData)
      .then((data) => {
        if (data?.data?.acknowledged) {
          return toast.success("add job Successfull", {
            ...myTheme,
            id: toastLoading,
          });
        }
        form.reset();
      })
      .catch((err) => {
        toast.error(err.message, { ...myTheme, id: toastLoading });
      });
    
  };
  return (
    <div className="min-h-screen max-w-[1200px] mx-auto flex flex-col justify-center pb-10">
      <h3 className="text-[#0B666A] text-center capitalize py-6 font-bold text-4xl">
        add job
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
            className="input input-bordered border-[#0B666A] focus:outline-[#0B666A] w-full"
          />
        </div>
        <div className="form-control w-full">
          <h4 className="capitalize ps-2 text-[#0B666A]">job type</h4>
          <select
            className="select select-bordered border-[#0B666A] focus:outline-[#0B666A]"
            name="category"
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
            className="input input-bordered border-[#0B666A] focus:outline-[#0B666A] w-full"
          />
        </div>
        <div className="form-control w-full">
          <h4 className="capitalize ps-2 text-[#0B666A]">Salary Time</h4>
          <select
            className="select select-bordered border-[#0B666A] focus:outline-[#0B666A]"
            name="salaryTime"
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
            selected={deadline}
            onChange={(date) => setDeadline(date)}
          />
        </div>
        <div className="sm:col-span-2">
          <h4 className="capitalize ps-2 text-[#0B666A]">Job Description</h4>
          <textarea
            name="description"
            placeholder="Job Description"
            className="input min-h-[100px] input-bordered placeholder:pt-2 border-[#0B666A] focus:outline-[#0B666A] w-full"
          ></textarea>
        </div>
        <div className="flex justify-center sm:col-span-2">
          <input
            type="submit"
            value="add job"
            className="btn font-semibold bg-[#0B666A] text-white hover:bg-[#35A29F]"
          />
        </div>
      </form>
    </div>
  );
};

export default AddJob;
// const asd = (e) => {
//     const date = new Date(e.target.value);
//     const now = Date.now();
//     const mydate = new Intl.DateTimeFormat("es").format(date);
//     const myNowDate = new Intl.DateTimeFormat("es").format(now)
//     console.log("mydate=",mydate);
//     console.log("myNowDate=",myNowDate);

//   };
