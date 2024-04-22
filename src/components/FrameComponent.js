import { useMemo } from "react";

const FrameComponent1 = ({
  sellOnShoppr,
  joinShopprAndReachMoreCus,
  learnMore,
  propBackgroundImage,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div
      className="flex-1 rounded-2xl top-[2500px] w-[500px] left-20 h-[763px] flex flex-col items-start justify-end pt-20 px-big pb-large box-border gap-[16px] bg-[url('/public/frame-5914@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-17xl text-white font-text-heading-h2 relative sm:top-[3000px] sm:w-[330px] sm:left-[13px]"
      style={frameDivStyle}
    >
      <div className="absolute  text-black bottom-[800px] font-bold">
      Join Us. Let’s grow together
    </div>
      <div className="self-stretch relative leading-[120%] font-medium">
      Sell on Shoppr
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[32px] text-lg font-text-paragraph-p1">
        <div className="self-stretch relative leading-[150%]">
        Join Shoppr and reach more customers. We do all the hard work so you can focus on your business and boost your sales
        </div>
        <button className="cursor-pointer [border:none] p-2.5 bg-shopprgreen w-[206px] rounded-radius-big h-14 flex flex-row items-center justify-center box-border">
          <div className="relative text-lg leading-[120%] font-text-paragraph-p1 text-white text-left">
            learn More
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent1;
