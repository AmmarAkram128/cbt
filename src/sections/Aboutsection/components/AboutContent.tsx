import { FeatureList } from "./FeatureList";
import { RatingCard } from "./RatingCard";


export const AboutContent = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="text-blue-800 text-lg items-center box-border caret-transparent gap-x-2.5 flex justify-start leading-[19.8px] gap-y-2.5">
        <div className="items-center box-border caret-transparent flex justify-center">
          <img
            src="https://c.animaapp.com/mjfry2ymwAc4IX/assets/6863afb35ceb5736f73b7298_intro-volt-icon-dark.svg"
            alt="Intro Volt Icon Dark"
            className="box-border caret-transparent max-w-full"
          />
        </div>
        <div className="box-border caret-transparent">About Us</div>
      </div>
      <div className="box-border caret-transparent max-w-none md:max-w-[500px]">
        <h2 className="text-neutral-900 text-3xl font-bold box-border caret-transparent leading-9 mt-[15px] font-urbanist md:text-[40px] md:leading-[48px]">
          Dependable and Safe Electrical Services
        </h2>
      </div>
      <div className="box-border caret-transparent mt-5 mb-[30px]">
        <p className="text-base box-border caret-transparent leading-6 md:text-xl md:leading-[30px]">
          Expert electricians ensuring safe, reliable solutions for your home
          and business.
        </p>
      </div>
      <div className="items-center box-border caret-transparent gap-x-[50px] flex flex-wrap justify-start gap-y-[30px] md:gap-x-[15px] md:flex-nowrap md:justify-between">
        <div className="box-border caret-transparent">
          <FeatureList />
          <a
            href="/about-us"
            className="text-white text-base font-semibold bg-neutral-900 box-border caret-transparent inline-block leading-4 text-center border border-neutral-900 px-[22px] py-4 border-solid font-urbanist md:text-lg md:leading-[18px] md:px-[27px] md:py-5 hover:bg-blue-800 hover:border-blue-800"
          >
            Explore More
          </a>
        </div>
        <RatingCard />
      </div>
    </div>
  );
};
