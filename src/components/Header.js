const Header = () => {
  return (
    <div className="absolute top-[0px] left-[5px] bg-white w-[1360px] flex flex-row items-center justify-between py-reg px-16 box-border sm:w-[410px] sm:h-[41px] top-4 ">
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[92.2px] relative h-8 overflow-hidden shrink-0">
        <img
          className="absolute h-[27.5%] w-[8.35%] top-[0%] right-[53.58%] bottom-[72.5%] left-[38.07%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
        <img
          className="absolute h-[86.25%] w-full top-[13.75%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full sm:w-[70px] sm:right-[200px] "
          alt=""
          src="/logotype.svg"
        />
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start gap-[26px]">
        <div className="rounded-radius-s box-border h-8 flex flex-row items-center justify-between py-2.5 px-med border-[1px] border-solid border-color-grey-grey-300">
          <div className="relative text-sm font-text-paragraph-p1 text-shopprgreen text-left">
            Login
          </div>
        </div>
        <div className="rounded-radius-s bg-shopprgreen h-8 flex flex-row items-center justify-between py-2.5 px-med box-border">
          <div className="relative text-sm font-text-paragraph-p1 text-white text-left">
            Sign Up
          </div>
        </div>
      </button>
    </div>
  );
};

export default Header;
