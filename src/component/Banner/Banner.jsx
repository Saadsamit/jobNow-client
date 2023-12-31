import bannerImg from "../../assets/banner_img.jpg"
const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          `url(${bannerImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="sm:mb-5 text-5xl font-bold sm:leading-none leading-snug">Apply for </h1><span className="text-[#97FEED] text-5xl font-Poppins font-bold">Success</span>
          <p className="mb-5 pt-2">
          Discover exciting career opportunities and seamlessly apply for your dream job on our platform. Your future starts here!
          </p>
          <form className="flex sm:flex-row flex-col text-[#071952] rounded-lg items-center sm:gap-0 gap-4" onSubmit={e=> e.preventDefault()}>
            <input type="text" className="sm:w-9/12 w-full py-3 px-2 sm:rounded-s-lg rounded-lg sm:rounded-none outline-none sm:border-none border-2 border-[#0B666A]" placeholder="Our Newspaper"/>
            <button type="submit" className="sm:w-3/12 w-1/2 inline-block btn sm:rounded-r-lg sm:rounded-s-none font-semibold bg-[#0B666A] text-white hover:bg-[#35A29F]">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
