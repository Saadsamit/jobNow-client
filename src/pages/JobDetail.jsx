import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import LoadingCard from "../component/LoadingCard/LoadingCard";
import { useContext } from "react";
import { contextProvider } from "../Authprovider";
import toast from "react-hot-toast";

const JobDetail = () => {
  const { id } = useParams();
  const axios = useAxios();
  const navigate = useNavigate();
  const { user, myTheme } = useContext(contextProvider);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.userName.value;
    const resume = form.resume.value;
    const myObj = {
      email,
      name,
      resume,
      applyData: data?.data?._id,
    };
    console.log(email, name, resume);
    const toastLoading = toast.loading("apply in processing", myTheme);
    if (data?.data?.email === email) {
      toast.error("you cant apply your oun job", {
        ...myTheme,
        id: toastLoading,
      });
      navigate("/");
      return;
    }
    axios
      .post("/apply-job", myObj)
      .then((data) => {
        if (data?.data?.acknowledged) {
          return toast.success("add job Successfull", {
            ...myTheme,
            id: toastLoading,
          });
        }
      })
      .then(() => {
        const apply ={ apply: parseInt(data?.data?.apply) + 1}
        axios.patch(`/apply/${id}`,apply)
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.message, { ...myTheme, id: toastLoading });
        navigate("/");
      });
  };
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
        <button
          onClick={() => document.getElementById("my_modal_1").showModal()}
          className="btn font-semibold w-full mt-5 bg-[#0B666A] text-white hover:bg-[#35A29F]"
        >
          apply
        </button>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form className="p-4 space-y-3" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              className="input w-full input-bordered border-[#0B666A] focus:outline-[#0B666A]"
              defaultValue={user?.email}
              readOnly
            />
            <input
              type="text"
              name="userName"
              className="input w-full input-bordered border-[#0B666A] focus:outline-[#0B666A]"
              defaultValue={user?.displayName}
              readOnly
            />
            <input
              type="text"
              name="resume"
              className="input w-full input-bordered border-[#0B666A] focus:outline-[#0B666A]"
              placeholder="submit your resume link"
              required
            />
            <div className="text-center">
              <input
                // onClick={}
                type="submit"
                value="submit"
                className="btn font-semibold bg-[#0B666A] text-white hover:bg-[#35A29F]"
              />
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default JobDetail;
