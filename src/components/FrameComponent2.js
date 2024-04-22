const FrameComponent2 = () => {
  return (
    <div className="absolute top-[4980px] left-[calc(50%_-_676px)] rounded-t-13xl rounded-b-none bg-shopprgreen w-[1350px] h-[464px] overflow-hidden text-center text-29xl text-white font-text-heading-h2 sm:h-[600px] sm:w-[358px] sm:left-[1px] sm:top-[5900px]">
      <div className="absolute top-[101px] left-[calc(50%_-_482px)] flex flex-col items-center justify-start gap-[64px]">
        <div className="w-[965px] relative font-medium inline-block sm:text-[30px]">
          Get started on Shoppr
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start gap-[15.7px]">
          <img
            className="w-[152.2px] relative h-12 overflow-hidden shrink-0"
            alt=""
            src="/playstore-button.svg"
          />
          <img
            className="w-[142.5px] relative h-12 overflow-hidden shrink-0"
            alt=""
            src="/download-on-the-app-store-badge-usuk-rgb-blk-092917-1.svg"
          />
        </button>
      </div>
      <div className="absolute top-[339px] left-[calc(50%_-_520px)] box-border w-[1040.2px] flex flex-row items-center justify-start pt-16 px-0 pb-0 border-t-[1px] border-solid border-white">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 flex flex-row items-center justify-between">
          <img
            className="w-[92.2px] relative h-8 overflow-hidden shrink-0 sm:left-[370px] sm:bottom-8 "
            alt=""
            src="/shopprlogo.svg"
          />
          <div className="flex flex-row items-center justify-start gap-[32px]">
            <div className="relative text-xl leading-[120%] font-text-paragraph-p1 text-white text-center sm:top-20 sm:left-7">
              Terms of use
            </div>
            <div className="relative text-xl leading-[120%] font-text-paragraph-p1 text-white text-center sm:top-20 sm:left-6">
              Privacy Policy
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <div className="rounded-81xl flex flex-row items-start justify-start p-2 sm:left-[500px]">
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0 sm:right-[450px] sm:top-36"
                alt=""
                src="/icons8-twitter (3).svg"
              />
            </div>
            <div className="rounded-81xl right-4 flex flex-row items-start justify-start p-2 sm:right-[500px] ">
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0 sm:right-[380px] sm:top-36"
                alt=""
                src="/icons8-facebook (3).svg"
              />
            </div>
            <div className="rounded-81xl flex flex-row items-start justify-start p-2  sm:right-[500px] ">
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0 sm:right-[500px] sm:top-36 "
                alt=""
                src="/icons8-instagram (2).svg"
              />
            </div>
            <img className="w-6 relative h-6 hidden" alt="" src="/icon4.svg" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent2;
