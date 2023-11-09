import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { useState } from "react";
import JobCart from "../JobCart";
import LoadingCard from "../LoadingCard/LoadingCard";
const TabOutlet = () => {
  const axios = useAxios();
  const category = [];
  const [selectCategory, setSelectCategory] = useState([]);
  const getData = async () => {
    const res = await axios.get("/allJobs");
    return res;
  };
  const { data, isLoading, isError } = useQuery({
    queryKey: ["allJobs"],
    queryFn: getData,
  });
  if (!isError && !isLoading) {
    data?.data?.forEach((jobs) => {
      if (!category.includes(jobs.category)) category.push(jobs.category);
    });
  }
  const handleClick = (item) => {
    axios.get(`/allJobs?category=${item}`).then((data) => {
      setSelectCategory(data.data);
    });
  };
  return (
    <div className="max-w-[1200px] mx-auto py-10">
      {isLoading ? (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4" >
            <LoadingCard/>
            <LoadingCard/>
            <LoadingCard/>
        </div>

      ) : (
        <Tabs>
          <TabList className="flex flex-wrap justify-center gap-2 py-4">
            <Tab
              onClick={getData}
              className="border border-[#0B666A] text-[#0B666A] font-Poppins font-semibold p-2 rounded-lg cursor-pointer hover:bg-[#0B666A] hover:text-white"
            >
              all jobs
            </Tab>
            {category.map((item, idx) => (
              <Tab
                className="border border-[#0B666A] text-[#0B666A] font-Poppins font-semibold p-2 rounded-lg cursor-pointer hover:bg-[#0B666A] hover:text-white"
                key={idx}
                onClick={() => handleClick(item)}
              >
                {item}
              </Tab>
            ))}
          </TabList>
          <TabPanel className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
            {data?.data.map((job, idx) => (
              <JobCart key={idx} data={job} />
            ))}
          </TabPanel>
          {category.map((data, idx) => (
            <TabPanel
              key={idx}
              className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4"
            >
              {selectCategory.map((job, id) => (
                <JobCart key={id} data={job} />
              ))}
            </TabPanel>
          ))}
        </Tabs>
      )}
    </div>
  );
};

export default TabOutlet;
