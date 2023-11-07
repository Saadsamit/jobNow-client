import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import LoadingText from "../component/LoadingText/LoadingText";

const Alljobs = () => {
    const axios = useAxios();
    const getData = async () => {
        const res = await axios.get("/allJobs");
        return res;
      };
      const { data, isLoading } = useQuery({
        queryKey: ["allJobs"],
        queryFn: getData,
      });
      console.log(data);
      if(isLoading){
        return <div className="min-h-screen max-w-[1200px] mx-auto">
        <LoadingText/>
    </div>
      }
    return (
        <div className="min-h-screen max-w-[1200px] mx-auto">
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Job Title</th>
        <th>Post date</th>
        <th>Job Title</th>
        <th>Salary range</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div className="font-bold">Hart Hagerty</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
        </td>
        <td>Purple</td>
        <td>Purple</td>
        <td>Purple</td>
        
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </tbody>
    {/* foot */}
    <tfoot>
    <tr>
        <th>Name</th>
        <th>Job Title</th>
        <th>Post date</th>
        <th>Job Title</th>
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