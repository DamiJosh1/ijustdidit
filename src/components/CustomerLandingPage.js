import { useEffect } from "react";
import BackgroundImage from "./BackgroundImage";
import FrameComponent3 from "./FrameComponent3";
import FAQSection from "./FAQSection";
import FrameComponent2 from "./FrameComponent2";
import FrameComponent from "./FrameComponent";
import Header from "./Header";

const CustomerLandingPage = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <a
      className="[text-decoration:none] w-full relative bg-gray-300 h-[5484px] overflow-y-auto text-left text-21xl text-black font-text-paragraph-p1 [&.animate]:sm:animate-[1s_ease_0s_1_normal_forwards_fade-in] sm:opacity-[0] sm:invisible"
      data-animate-on-scroll
    >
      <BackgroundImage />
      <FrameComponent3 />
      <div className="absolute top-[2211px] left-[calc(50%_-_720px)] bg-gray-100 w-[1360px] hidden flex-col items-center justify-start py-20 px-16 box-border gap-[80px]">
        <div className="relative tracking-[-0.02em] leading-[120%] font-semibold text-center">{`Local stores you might like. `}</div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[48px] text-base text-black1">
          <div className="rounded-lg bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.05)] flex flex-row items-center justify-start p-4 gap-[21px]">
            <div className="w-14 relative rounded-lg bg-gainsboro h-14" />
            <div className="w-[114px] flex flex-col items-start justify-start">
              <div className="relative">Yakoyo</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[32px]">
            <div className="rounded-lg bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.05)] flex flex-row items-center justify-start p-4 gap-[21px]">
              <div className="w-14 relative rounded-lg bg-gainsboro h-14" />
              <div className="w-[114px] flex flex-col items-start justify-start">
                <div className="relative">Amala Sky</div>
              </div>
            </div>
            <div className="rounded-lg bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.05)] flex flex-row items-center justify-start p-4 gap-[21px]">
              <div className="w-14 relative rounded-lg bg-gainsboro h-14" />
              <div className="w-[114px] flex flex-col items-start justify-start">
                <div className="relative">Foodies</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[32px]">
            <div className="rounded-lg bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.05)] flex flex-row items-center justify-start p-4 gap-[21px]">
              <div className="w-14 relative rounded-lg bg-gainsboro h-14" />
              <div className="w-[114px] flex flex-col items-start justify-start">
                <div className="relative">Delis Cafe</div>
              </div>
            </div>
            <div className="rounded-lg bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.05)] flex flex-row items-center justify-start p-4 gap-[21px]">
              <div className="w-14 relative rounded-lg bg-gainsboro h-14" />
              <div className="w-[114px] flex flex-col items-start justify-start">
                <div className="relative">Liquor ETC</div>
              </div>
            </div>
            <div className="rounded-lg bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.05)] flex flex-row items-center justify-start p-4 gap-[21px]">
              <div className="w-14 relative rounded-lg bg-gainsboro h-14" />
              <div className="w-[114px] flex flex-col items-start justify-start">
                <div className="relative">Gourmet Twist</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[32px]">
            <div className="rounded-lg bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.05)] flex flex-row items-center justify-start p-4 gap-[21px]">
              <div className="w-14 relative rounded-lg bg-gainsboro h-14" />
              <div className="w-[114px] flex flex-col items-start justify-start">
                <div className="relative">Popsicles</div>
              </div>
            </div>
            <div className="rounded-lg bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.05)] flex flex-row items-center justify-start p-4 gap-[21px]">
              <div className="w-14 relative rounded-lg bg-gainsboro h-14" />
              <div className="w-[114px] flex flex-col items-start justify-start">
                <div className="relative">BPS Pharmacy</div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.05)] flex flex-row items-center justify-start p-4 gap-[21px]">
            <div className="w-14 relative rounded-lg bg-gainsboro h-14" />
            <div className="relative">Infused Flavors</div>
          </div>
        </div>
        <div className="w-[206px] rounded-radius-big bg-accent-orange h-14 flex flex-row items-center justify-center p-2.5 box-border text-lg">
          <div className="relative leading-[120%]">Explore more stores</div>
        </div>
      </div>
      <div className="absolute top-[2943px] left-[100px] bg-whitesmoke w-[1312px] hidden flex-col items-center justify-start pt-20 px-28 pb-28 box-border gap-[80px] text-black1 font-text-heading-h2">
        <div className="relative font-medium">Top Stores on Shoppr</div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[77px] text-xl">
          <div className="self-stretch flex flex-row items-start justify-start gap-[32px]">
            <div className="flex-1 rounded-lg flex flex-row items-center justify-start p-4 gap-[21px] border-[1px] border-solid border-color-grey-grey-300">
              <div className="w-20 relative rounded-lg bg-gainsboro h-20" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="relative font-medium">Yakoyo</div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-xs font-text-paragraph-p1">
                  <div className="relative">African</div>
                  <div className="w-1 relative rounded-[50%] bg-gainsboro h-1" />
                  <div className="relative">Delivery by 3:00 pm</div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-lg flex flex-row items-center justify-start p-4 gap-[21px] border-[1px] border-solid border-color-grey-grey-300">
              <div className="w-20 relative rounded-lg bg-gainsboro h-20" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="relative font-medium">Foodies</div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-xs font-text-paragraph-p1">
                  <div className="relative">African</div>
                  <div className="w-1 relative rounded-[50%] bg-gainsboro h-1" />
                  <div className="relative">Delivery by 3:00 pm</div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-lg flex flex-row items-center justify-start p-4 gap-[21px] border-[1px] border-solid border-color-grey-grey-300">
              <div className="w-20 relative rounded-lg bg-gainsboro h-20" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="relative font-medium">Gourmet Twist</div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-xs font-text-paragraph-p1">
                  <div className="relative">African</div>
                  <div className="w-1 relative rounded-[50%] bg-gainsboro h-1" />
                  <div className="relative">Delivery by 3:00 pm</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[32px]">
            <div className="flex-1 rounded-lg flex flex-row items-center justify-start p-4 gap-[21px] border-[1px] border-solid border-color-grey-grey-300">
              <div className="w-20 relative rounded-lg bg-gainsboro h-20" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="relative font-medium">Popsicles</div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-xs font-text-paragraph-p1">
                  <div className="relative">African</div>
                  <div className="w-1 relative rounded-[50%] bg-gainsboro h-1" />
                  <div className="relative">Delivery by 3:00 pm</div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-lg flex flex-row items-center justify-start p-4 gap-[21px] border-[1px] border-solid border-color-grey-grey-300">
              <div className="w-20 relative rounded-lg bg-gainsboro h-20" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="relative font-medium">Liquor ETC</div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-xs font-text-paragraph-p1">
                  <div className="relative">African</div>
                  <div className="w-1 relative rounded-[50%] bg-gainsboro h-1" />
                  <div className="relative">Delivery by 3:00 pm</div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-lg flex flex-row items-center justify-start p-4 gap-[21px] border-[1px] border-solid border-color-grey-grey-300">
              <div className="w-20 relative rounded-lg bg-gainsboro h-20" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="relative font-medium">Infused Flavours</div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-xs font-text-paragraph-p1">
                  <div className="relative">African</div>
                  <div className="w-1 relative rounded-[50%] bg-gainsboro h-1" />
                  <div className="relative">Delivery by 3:00 pm</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[32px]">
            <div className="flex-1 rounded-lg flex flex-row items-center justify-start p-4 gap-[21px] border-[1px] border-solid border-color-grey-grey-300">
              <div className="w-20 relative rounded-lg bg-gainsboro h-20" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="relative font-medium">Delis Cafe</div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-xs font-text-paragraph-p1">
                  <div className="relative">African</div>
                  <div className="w-1 relative rounded-[50%] bg-gainsboro h-1" />
                  <div className="relative">Delivery by 3:00 pm</div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-lg flex flex-row items-center justify-start p-4 gap-[21px] border-[1px] border-solid border-color-grey-grey-300">
              <div className="w-20 relative rounded-lg bg-gainsboro h-20" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="relative font-medium">BPS Phamarcy</div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-xs font-text-paragraph-p1">
                  <div className="relative">African</div>
                  <div className="w-1 relative rounded-[50%] bg-gainsboro h-1" />
                  <div className="relative">Delivery by 3:00 pm</div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-lg flex flex-row items-center justify-start p-4 gap-[21px] border-[1px] border-solid border-color-grey-grey-300">
              <div className="w-20 relative rounded-lg bg-gainsboro h-20" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="relative font-medium">Infused Flavours</div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-xs font-text-paragraph-p1">
                  <div className="relative">African</div>
                  <div className="w-1 relative rounded-[50%] bg-gainsboro h-1" />
                  <div className="relative">Delivery by 3:00 pm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQSection />
      <FrameComponent2 />
      <FrameComponent />
      <Header />
    </a>
  );
};

export default CustomerLandingPage;
