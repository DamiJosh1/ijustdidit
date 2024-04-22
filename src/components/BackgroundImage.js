import ItemsAnimationIcon from "./ItemsAnimationIcon";

const BackgroundImage = () => {
  return (
    <div className="absolute top-[0px] left-[0px] bg-white w-[1360px] h-[900px] overflow-hidden text-center text-45xl text-black font-text-heading-h2 sm:w-[745px] sm:text-lg ">
      <ItemsAnimationIcon />
      <div className="absolute top-[157px] left-[calc(50%_-_375px)] w-[751px] flex flex-col items-center justify-start gap-[32px]  ">
        <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-medium font-inherit sm:w-[350px]">
          <p className="m-0">{`Simplifying Deliveries,`}</p>
          <p className="m-0">{`Every Order. `}</p>
        </h1>
        <div className="w-[509px] relative text-lg leading-[150%] font-text-paragraph-p1 inline-block sm:text-xs sm:w-[300px] sm:right-[200px]">{`What you need, when you need it. Your food, grocery, everyday essentials and your packages delivered to your door.`}</div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start gap-[16px] sm:w-[700px]">
          <button className="cursor-pointer [border:none] py-med px-big bg-shopprgreen rounded-radius-med flex flex-row items-center justify-center hover:bg-cadetblue">
            <div className="relative text-base font-text-paragraph-p1 text-white text-center sm:w-[100px] text-xs">
              Start Shopping
            </div>
          </button>
          <div className="rounded-radius-med flex flex-row items-center justify-center py-med px-big border-[1px] border-solid border-shopprgreen hover:box-border hover:border-[1px] hover:border-solid hover:border-darkcyan-200">
            <div className=" relative text-base font-text-paragraph-p1 text-darkcyan-100 text-center inline-block hover:text-shopprgreen sm:w-[100px] text-xs ">
              Deliver Package
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default BackgroundImage;
