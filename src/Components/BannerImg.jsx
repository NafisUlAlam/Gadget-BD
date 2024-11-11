import banner from "../assets/banner.jpg";
const BannerImg = () => {
  return (
    <div className="p-4 border-2 rounded-xl relative mt-[-60px] md:mt-[-100px] lg:mt-[-150px] ml-[14%] w-3/4 ">
      <figure className=" rounded-xl border-2 ">
        <img src={banner} alt="" className="w-full rounded-xl" />
      </figure>
    </div>
  );
};

export default BannerImg;
