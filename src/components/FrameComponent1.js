import FrameComponent1 from "./FrameComponent";

const FrameComponent = () => {
  return (
    <div className="absolute top-[2963px] left-[calc(50%_-_720px)] bg-white w-[1360px] flex flex-col items-start justify-start py-[120px] px-[100px] box-border gap-[80px] text-left text-33xl text-black font-text-paragraph-p1">
      <div className="w-[537px] absolute leading-[120%] font-semibold inline-block">
        <p className="m-0">{`Join Us. `}</p>
        <p className="m-0">Let’s grow together</p>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-17xl text-white font-text-heading-h2">
        
        <div className="flex-1 rounded-2xl top-[2500px] w-[500px] left-20 h-[763px] flex flex-col items-start justify-end pt-20 px-big pb-large box-border gap-[16px] bg-[url('/public/frame-5916@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-17xl text-white font-text-heading-h2 ">
          </div>
      </div>
    </div>
  );
};

export default FrameComponent;
