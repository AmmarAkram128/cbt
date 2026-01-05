import { AboutContent } from "./sections/Aboutsection/components/AboutContent";

export const AboutSection = () => {
  return (
    <section className="box-border caret-transparent py-20 md:pt-[150px] md:pb-[135px]">
      <div className="box-border caret-transparent max-w-full mx-auto px-5 md:max-w-[1200px] md:px-0">
        <div className="box-border caret-transparent gap-x-[30px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-[30px] md:gap-x-[60px] md:grid-cols-[0.88fr_1fr] md:gap-y-[60px]">
          <div className="box-border caret-transparent w-full">
            <img
              src="https://c.animaapp.com/mjfry2ymwAc4IX/assets/685b8f781bda6c4dab11f5c2_feature-image.jpg"
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
              alt="Feature Image"
              className="inline-block max-w-full box-border caret-transparent"
            />
          </div>

          <AboutContent />
        </div>
      </div>
    </section>
  );
};
