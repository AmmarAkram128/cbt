export const FloatingButtons = () => {
  return (
    <div className="fixed bg-[linear-gradient(90deg,rgb(255,119,76),rgb(130,119,255))] box-border caret-transparent hidden w-[290px] z-[999] rounded-lg left-[5px] bottom-2 md:flex">
      <div className="relative bg-neutral-950 box-border caret-transparent min-h-0 min-w-0 m-0.5 px-3 py-2.5 rounded-lg md:min-h-[auto] md:min-w-[auto] md:px-2.5">
        <p className="text-white text-xs box-border caret-transparent leading-[15.6px] mb-[7px] md:leading-[18px] md:mb-2.5">
          Connect with a Webflow Expert to create a website using this template.
          <a
            href="https://www.victorflow.com/webflow-experts"
            className="font-medium box-border caret-transparent leading-[15.6px] underline ml-0.5 md:leading-[18px]"
          >
            Learn More
          </a>
        </p>
        <div className="box-border caret-transparent gap-x-2.5 flex gap-y-2.5">
          <a
            href="https://calendly.com/victorflow/30min"
            className="text-black text-xs font-medium bg-orange-400 box-border caret-transparent block leading-[18px] min-h-0 min-w-0 pt-1.5 pb-[5px] px-2 rounded-[3px] md:min-h-[auto] md:min-w-[auto]"
          >
            Schedule A Meeting
            <br className="box-border caret-transparent" />
          </a>
          <a
            href="https://www.victorflow.com/get-a-quote"
            className="text-blue-700 bg-[linear-gradient(90deg,rgb(255,119,76),rgb(130,119,255))] box-border caret-transparent block max-w-full min-h-0 min-w-0 rounded-[3px] md:min-h-[auto] md:min-w-[auto]"
          >
            <div className="text-white text-xs font-medium bg-neutral-950 box-border caret-transparent leading-[18px] m-px pt-1.5 pb-[5px] px-2 rounded-[3px]">
              <div className="box-border caret-transparent">Get Your Quote</div>
            </div>
          </a>
        </div>
        <div className="absolute items-center box-border caret-transparent flex h-[30px] justify-center w-[30px] right-[0%] top-[0%]">
          <img
            src="https://c.animaapp.com/mjfry2ymwAc4IX/assets/6864b795396bb6fadb1cbb73_hireus-close-badge.svg"
            alt="Hireus Close Image"
            className="box-border caret-transparent max-w-full min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
          />
        </div>
      </div>
    </div>
  );
};
