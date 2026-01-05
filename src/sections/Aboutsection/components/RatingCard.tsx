export const RatingCard = () => {
  return (
    <div className="bg-slate-100 box-border caret-transparent basis-[0%] grow max-w-none min-w-[200px] text-center w-full px-5 py-[25px] md:max-w-[270px] md:min-w-[auto] md:py-[55px]">
      <h3 className="text-blue-800 text-5xl font-bold box-border caret-transparent leading-[48px] font-urbanist md:text-[70px] md:leading-[70px]">
        4.9
      </h3>
      <div className="items-center box-border caret-transparent gap-x-[5px] flex justify-center gap-y-[5px] mt-2.5 mb-5 md:mb-[25px]">
        <img
          src="https://c.animaapp.com/mjfry2ymwAc4IX/assets/685930e4893c7ce275d68b47_feedback-rating-icon.svg"
          alt="Feedback Rating Icon "
          className="box-border caret-transparent max-w-full"
        />
        <img
          src="https://c.animaapp.com/mjfry2ymwAc4IX/assets/685930e4893c7ce275d68b47_feedback-rating-icon.svg"
          alt="Feedback Rating Icon "
          className="box-border caret-transparent max-w-full"
        />
        <img
          src="https://c.animaapp.com/mjfry2ymwAc4IX/assets/685930e4893c7ce275d68b47_feedback-rating-icon.svg"
          alt="Feedback Rating Icon "
          className="box-border caret-transparent max-w-full"
        />
        <img
          src="https://c.animaapp.com/mjfry2ymwAc4IX/assets/685930e4893c7ce275d68b47_feedback-rating-icon.svg"
          alt="Feedback Rating Icon "
          className="box-border caret-transparent max-w-full"
        />
        <img
          src="https://c.animaapp.com/mjfry2ymwAc4IX/assets/685930e4893c7ce275d68b47_feedback-rating-icon.svg"
          alt="Feedback Rating Icon "
          className="box-border caret-transparent max-w-full"
        />
      </div>
      <p className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
        Verified Clients
      </p>
    </div>
  );
};
