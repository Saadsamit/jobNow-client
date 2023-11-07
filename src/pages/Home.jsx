import Banner from "../component/Banner/Banner";
import FreePost from "../component/FreePost/FreePost";
import HowWeHelp from "../component/HowWeHelp/HowWeHelp";
import TabOutlet from './../component/TabOutlet/TabOutlet';

const Home = () => {
  return (
    <div>
      <Banner />
      <TabOutlet/>
      <FreePost/>
      <HowWeHelp/>
    </div>
  );
};

export default Home;
