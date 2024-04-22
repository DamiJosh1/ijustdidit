const FAQSection = () => {
  return (
    <div className="absolute top-[4170px] left-[calc(50%_-_720px)] bg-white w-[1360px] flex flex-row items-start justify-center pt-[100px] px-[100px] pb-[120px] box-border gap-[80px] text-left text-21xl text-black font-text-paragraph-p1">
      <div className="w-[380px] relative tracking-[-0.02em] leading-[120%] font-semibold inline-block shrink-0 sm: sm:right-[430px] sm:top-10">
        Frequently Asked Questions
      </div>
      <div className="flex-1 flex flex-col items-start justify-start py-0 px-large gap-[32px] text-center text-xl sm:relative sm:top-9 sm:right-[65px] sm:font-bold sm:text-[15px]">
        <div className="self-stretch flex flex-col items-start justify-center pt-4 px-4 pb-8 gap-[16px] border-b-[1px] border-solid border-color-grey-grey-200 sm:w-[330px]">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="relative leading-[120%]">What is Shoppr?</div>
            <img className="w-8 relative h-8 sm:w-10 sm:left-[35px]" alt="" src="/iconminus.svg" />
          </div>
          <img
            className="w-[684px] relative max-w-full overflow-hidden h-0 shrink-0 hidden "
            alt=""
            src="/vector-4.svg"
          />
          <div className="self-stretch relative text-base leading-[200%] text-dimgray text-left sm:w-[359px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </div>
        </div>
        <div className="self-stretch box-border h-14 flex flex-col items-start justify-center pt-4 px-4 pb-8 border-b-[1px] border-solid border-color-grey-grey-200 sm:w-[360px]">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="relative leading-[120%]">
              How do i make a delivery?
            </div>
            <img className="w-8 relative h-8" alt="" src="/icon.svg" />
          </div>
        </div>
        <div className="self-stretch box-border h-14 flex flex-col items-start justify-center pt-4 px-4 pb-8 border-b-[1px] border-solid border-color-grey-grey-200 sm:w-[360px]">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="relative leading-[120%]">
              What kind of items can i deliver on shoppr?
            </div>
            <img className="w-8 relative h-8" alt="" src="/icon.svg" />
          </div>
        </div>
        <div className="self-stretch box-border h-14 flex flex-col items-start justify-center pt-4 px-4 pb-8 border-b-[1px] border-solid border-color-grey-grey-200 sm:w-[360px]">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="relative leading-[120%]">
              What times does shoppr work during the day?
            </div>
            <img className="w-8  h-8 relative text-black" alt="" src="/icon.svg" />
          </div>
        </div>
        <div className="self-stretch box-border h-14 flex flex-col items-start justify-center pt-4 px-4 pb-8 border-b-[1px] border-solid border-color-grey-grey-200 sm:w-[360px]">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="relative leading-[120%]">
              How do i make a complaint about a delivery?
            </div>
            <img className="w-8 relative h-8" alt="" src="/icon.svg" />
          </div>
        </div>
        <div className="self-stretch box-border h-14 flex flex-col items-start justify-center pt-4 px-4 pb-8 border-b-[1px] border-solid border-color-grey-grey-200 sm:w-[360px]">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="relative leading-[120%]">
              Why should i use Shoppr?
            </div>
            <img className="w-8 relative h-8" alt="" src="/icon.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
