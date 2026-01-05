export type ContactInfoProps = {
  variant: string;
  phoneNumber?: string;
  phoneHref?: string;
  email?: string;
  emailHref?: string;
  facebookUrl?: string;
  twitterUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  phoneIconSrc?: string;
  emailIconSrc?: string;
  facebookIconSrc?: string;
  twitterIconSrc?: string;
  instagramIconSrc?: string;
  linkedinIconSrc?: string;
};

export const ContactInfo = (props: ContactInfoProps) => {
  if (props.variant === "contact") {
    return (
      <div className="items-center box-border caret-transparent gap-x-2.5 flex justify-start min-h-0 min-w-0 gap-y-2.5 md:min-h-[auto] md:min-w-[auto] md:gap-x-[25px] md:gap-y-[25px]">
        <a
          href={props.phoneHref || "tel://(702)865-4545"}
          className="items-center box-border caret-transparent flex text-neutral-600 text-base font-medium gap-x-2.5 justify-start leading-6 max-w-full min-h-0 min-w-0 gap-y-2.5 font-urbanist md:min-h-[auto] md:min-w-[auto]"
        >
          <div className="relative items-center box-border caret-transparent flex justify-center min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
            <img
              src={
                props.phoneIconSrc ||
                "https://c.animaapp.com/mjfry2ymwAc4IX/assets/6863c5154f378ca91c2cc8b5_phone-icon.svg"
              }
              alt="Phone Icon"
              className="box-border caret-transparent max-w-full min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
            />
          </div>
          <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
            {props.phoneNumber || "(702) 865-4545"}
          </div>
        </a>
        <div className="bg-neutral-600 box-border caret-transparent h-5 min-h-0 min-w-0 w-px md:min-h-[auto] md:min-w-[auto]"></div>
        <a
          href={props.emailHref || "mailto://info@voltsflow.com"}
          className="items-center box-border caret-transparent flex text-neutral-600 text-base font-medium gap-x-2.5 justify-start leading-6 max-w-full min-h-0 min-w-0 gap-y-2.5 font-urbanist md:min-h-[auto] md:min-w-[auto]"
        >
          <div className="relative items-center box-border caret-transparent flex justify-center min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
            <img
              src={
                props.emailIconSrc ||
                "https://c.animaapp.com/mjfry2ymwAc4IX/assets/67a9f4c52c2d5ba8479bcf8c_mail-icon.svg"
              }
              alt="Mail Icon"
              className="box-border caret-transparent max-w-full min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
            />
          </div>
          <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
            {props.email || "info@voltsflow.com"}
          </div>
        </a>
      </div>
    );
  }

  return (
    <div className="items-center box-border caret-transparent gap-x-2.5 flex justify-start min-h-0 min-w-0 gap-y-2.5 md:min-h-[auto] md:min-w-[auto]">
      <a
        href={props.facebookUrl || "https://www.facebook.com/"}
        className="relative text-blue-700 items-center box-border caret-transparent flex justify-center max-h-[30px] max-w-[30px] min-h-[30px] min-w-[30px]"
      >
        <img
          src={
            props.facebookIconSrc ||
            "https://c.animaapp.com/mjfry2ymwAc4IX/assets/685146eebb58549444f8a6ff_top-social-icon-01.svg"
          }
          alt="Top Social Icon 01"
          className="box-border caret-transparent max-w-full min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
        />
      </a>
      <a
        href={props.twitterUrl || "https://x.com/"}
        className="relative text-blue-700 items-center box-border caret-transparent flex justify-center max-h-[30px] max-w-[30px] min-h-[30px] min-w-[30px]"
      >
        <img
          src={
            props.twitterIconSrc ||
            "https://c.animaapp.com/mjfry2ymwAc4IX/assets/685146ee453500298c4a2f11_top-social-icon-02.svg"
          }
          alt="Top Social Icon 02"
          className="box-border caret-transparent max-w-full min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
        />
      </a>
      <a
        href={props.instagramUrl || "https://www.instagram.com/"}
        className="relative text-blue-700 items-center box-border caret-transparent flex justify-center max-h-[30px] max-w-[30px] min-h-[30px] min-w-[30px]"
      >
        <img
          src={
            props.instagramIconSrc ||
            "https://c.animaapp.com/mjfry2ymwAc4IX/assets/685146eec44bc2ac611ed2b7_top-social-icon-03.svg"
          }
          alt="Top Social Icon 03"
          className="box-border caret-transparent max-w-full min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
        />
      </a>
      <a
        href={props.linkedinUrl || "https://www.linkedin.com/"}
        className="relative text-blue-700 items-center box-border caret-transparent flex justify-center max-h-[30px] max-w-[30px] min-h-[30px] min-w-[30px]"
      >
        <img
          src={
            props.linkedinIconSrc ||
            "https://c.animaapp.com/mjfry2ymwAc4IX/assets/685146eea41a70a9f1cbe3f4_top-social-icon-04.svg"
          }
          alt="Top Social Icon 04"
          className="box-border caret-transparent max-w-full min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
        />
      </a>
    </div>
  );
};
