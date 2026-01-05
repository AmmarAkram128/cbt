export const ContactForm = () => {
  return (
    <div className="box-border caret-transparent basis-[0%] grow">
      <div className="backdrop-blur-[25px] bg-blue-800/80 shadow-[rgba(0,0,0,0.15)_0px_5px_15px_0px] box-border caret-transparent min-w-0 w-full mt-0 px-5 py-[30px] md:mt-[-340px] md:min-w-[400px] md:pt-[50px] md:pb-10 md:px-10">
        <div className="box-border caret-transparent mb-5 md:mb-[25px]">
          <h3 className="text-white text-[22px] font-semibold box-border caret-transparent leading-[26.4px] font-urbanist md:text-[25px] md:leading-[30px]">
            Your Solution Starts Here!
          </h3>
        </div>
        <form
          name="wf-form-Home-Intro-Email-Form"
          aria-label="Home Intro Email Form"
          className="box-border caret-transparent"
        >
          <div className="box-border caret-transparent mb-5">
            <label className="text-white text-base font-medium box-border caret-transparent block leading-6 mb-[5px] font-urbanist">
              Full Name *
            </label>
            <input
              name="Full-Name"
              placeholder="Your name"
              type="text"
              className="text-white text-base bg-white/10 box-border caret-transparent block h-[38px] tracking-[normal] leading-[22.8571px] max-w-none min-h-[45px] align-middle w-full border mb-2.5 pl-[15px] pr-3 py-2 border-solid border-white/60 md:max-w-[350px] md:min-h-[50px] md:pl-5"
            />
          </div>
          <div className="box-border caret-transparent mb-5">
            <label className="text-white text-base font-medium box-border caret-transparent block leading-6 mb-[5px] font-urbanist">
              Phone *
            </label>
            <input
              name="Phone"
              placeholder="Your phone number"
              type="tel"
              className="text-white text-base bg-white/10 box-border caret-transparent block h-[38px] tracking-[normal] leading-[22.8571px] max-w-none min-h-[45px] align-middle w-full border mb-2.5 pl-[15px] pr-3 py-2 border-solid border-white/60 md:max-w-[350px] md:min-h-[50px] md:pl-5"
            />
          </div>
          <div className="box-border caret-transparent">
            <label className="text-white text-base font-medium box-border caret-transparent block leading-6 mb-[5px] font-urbanist">
              Service Type:
            </label>
            <select
              name="Service-Type"
              className="text-white text-base bg-white/10 caret-transparent block h-[38px] tracking-[normal] leading-[normal] max-w-none min-h-[45px] align-middle w-full mb-2.5 pl-[15px] pr-3 py-2 border-white/60 md:max-w-[350px] md:min-h-[50px] md:pl-5"
            >
              <option
                value=""
                className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
              >
                Select your service
              </option>
              <option
                value="Smart Home Integration"
                className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
              >
                Smart Home Integration
              </option>
              <option
                value="Energy-Efficient Solutions"
                className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
              >
                Energy-Efficient Solutions
              </option>
              <option
                value="Data and Network Cabling"
                className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
              >
                Data and Network Cabling
              </option>
            </select>
          </div>
          <div className="box-border caret-transparent flex flex-col mt-5 md:mt-[30px]">
            <input
              type="submit"
              value="Submit"
              className="text-neutral-900 text-base font-semibold bg-orange-500 box-border caret-transparent block tracking-[normal] leading-4 text-center text-nowrap border border-orange-500 px-[22px] py-4 border-solid font-urbanist md:text-lg md:leading-[18px] md:px-[27px] md:py-5 hover:text-white hover:bg-neutral-900 hover:border-neutral-900"
            />
          </div>
        </form>
        <div
          role="region"
          aria-label="Home Intro Email Form success"
          className="text-white text-base bg-black box-border caret-transparent hidden leading-6 text-center p-[15px] md:text-[17px] md:leading-[25.5px] md:p-5"
        >
          <div className="text-base box-border caret-transparent leading-6 md:text-[17px] md:leading-[25.5px]">
            Thank you! Your submission has been received!
          </div>
        </div>
        <div
          role="region"
          aria-label="Home Intro Email Form failure"
          className="text-black text-base bg-red-100 box-border caret-transparent hidden leading-6 text-center mt-[15px] p-[15px] md:text-[17px] md:leading-[25.5px] md:mt-5 md:p-5"
        >
          <div className="text-base box-border caret-transparent leading-6 md:text-[17px] md:leading-[25.5px]">
            Oops! Something went wrong while submitting the form.
          </div>
        </div>
      </div>
    </div>
  );
};
