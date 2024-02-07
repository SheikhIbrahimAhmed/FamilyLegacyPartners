import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AboutUsComponent from "./AboutUsComponent";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React, { useState } from "react";
import "../Home/Slider.css";
import Navbar from "../shared/Navbar/Navbar";
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <Navbar bgNavbar={"bg-9d8b6a"} />
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide">
            <AboutUsComponent
              image="https://www.raymondjames.com/-/media/rj/advisor-sites/sites/f/a/familylegacypartners/images/bio-headshot-lindsay-corneille.jpg?h=248&w=206&la=en&hash=2DA200B2FEE7D12B394BFC334B714D80"
              imagetitle="Lindsay Corneille, CFP®"
              list1="Branch Manager"
              list2="Wealth Manager"
              list3="Financial Advisor"
              icon1={<FontAwesomeIcon icon={faEnvelope} />}
              icon2={<FontAwesomeIcon icon={faPhone} />}
              heading1="HOW I CAN HELP YOU"
              paragraph1="Lin dsay is passionate about providing financial education and empowerment to each of her clients—and has a special affinity for working with women and young professionals. She works closely with each to truly understand their attitudes toward money, their hopes, concerns and more. She believes this is critical to helping them avoid emotional decisions so they can stay on track to accomplish their goals."
              heading2="WHAT MAKES ME KNOWLEDGEABLE"
              paragraph2="After spending her childhood weekends in the office alongside her father, Lindsay officially joined Family Legacy Wealth Partners in 2015. She began her career with Franklin Templeton and then moved to Raymond James as a Transition Consultant. In 2012, she joined TIAA-CREF where she worked one-on-one with individuals to ensure they had both the understanding and the proper retirement plans to work toward their goals. Lindsay became a lead facilitator for TIAA-CREFF's Women to Women program, which she carries over to the team's Women in the Know programs. After graduating from Western Michigan University in 2006, Lindsay earned the CERTIFIED FINANCIAL PLANNER™ designation."
              heading3="GETTING TO KNOW ME"
              paragraph3="Outside of work, Lindsay is active with her husband Mike, young sons Henry, Arlo and Isaac. She enjoys her time on the soccer field, coaching her son’s team or rollerblading with them at the skating rink. When Lindsay has time alone, it is often spent walking, reading or listening to a podcast."
            />
          </div>
          <div className="keen-slider__slide">
            {" "}
            <AboutUsComponent
              image="https://www.raymondjames.com/-/media/rj/advisor-sites/sites/f/a/familylegacypartners/images/bio-headshot-bill-hartsock.jpg?h=248&w=206&la=en&hash=103D93990E1449876BDEF794A835E6E7"
              imagetitle="William Hartsock, CFP®"
              list1="Wealth Manager"
              icon1={<FontAwesomeIcon icon={faEnvelope} />}
              icon2={<FontAwesomeIcon icon={faPhone} />}
              heading1="HOW I CAN HELP YOU"
              paragraph1="Lin dsay is passionate about providing financial education and empowerment to each of her clients—and has a special affinity for working with women and young professionals. She works closely with each to truly understand their attitudes toward money, their hopes, concerns and more. She believes this is critical to helping them avoid emotional decisions so they can stay on track to accomplish their goals."
              heading2="WHAT MAKES ME KNOWLEDGEABLE"
              paragraph2="After spending her childhood weekends in the office alongside her father, Lindsay officially joined Family Legacy Wealth Partners in 2015. She began her career with Franklin Templeton and then moved to Raymond James as a Transition Consultant. In 2012, she joined TIAA-CREF where she worked one-on-one with individuals to ensure they had both the understanding and the proper retirement plans to work toward their goals. Lindsay became a lead facilitator for TIAA-CREFF's Women to Women program, which she carries over to the team's Women in the Know programs. After graduating from Western Michigan University in 2006, Lindsay earned the CERTIFIED FINANCIAL PLANNER™ designation."
              heading3="GETTING TO KNOW ME"
              paragraph3="Outside of work, Lindsay is active with her husband Mike, young sons Henry, Arlo and Isaac. She enjoys her time on the soccer field, coaching her son’s team or rollerblading with them at the skating rink. When Lindsay has time alone, it is often spent walking, reading or listening to a podcast."
            />
          </div>
          <div className="keen-slider__slide">
            {" "}
            <AboutUsComponent
              image="https://www.raymondjames.com/-/media/rj/advisor-sites/sites/f/a/familylegacypartners/images/bio-headshot-colin-talbot.jpg?h=248&w=206&la=en&hash=44A67EE29CA5D78287A99058C42309D2"
              imagetitle="Colin Talbot"
              list1="Wealth Advisor"
              icon1={<FontAwesomeIcon icon={faEnvelope} />}
              icon2={<FontAwesomeIcon icon={faPhone} />}
              heading1="HOW I CAN HELP YOU"
              paragraph1="Lin dsay is passionate about providing financial education and empowerment to each of her clients—and has a special affinity for working with women and young professionals. She works closely with each to truly understand their attitudes toward money, their hopes, concerns and more. She believes this is critical to helping them avoid emotional decisions so they can stay on track to accomplish their goals."
              heading2="WHAT MAKES ME KNOWLEDGEABLE"
              paragraph2="After spending her childhood weekends in the office alongside her father, Lindsay officially joined Family Legacy Wealth Partners in 2015. She began her career with Franklin Templeton and then moved to Raymond James as a Transition Consultant. In 2012, she joined TIAA-CREF where she worked one-on-one with individuals to ensure they had both the understanding and the proper retirement plans to work toward their goals. Lindsay became a lead facilitator for TIAA-CREFF's Women to Women program, which she carries over to the team's Women in the Know programs. After graduating from Western Michigan University in 2006, Lindsay earned the CERTIFIED FINANCIAL PLANNER™ designation."
              heading3="GETTING TO KNOW ME"
              paragraph3="Outside of work, Lindsay is active with her husband Mike, young sons Henry, Arlo and Isaac. She enjoys her time on the soccer field, coaching her son’s team or rollerblading with them at the skating rink. When Lindsay has time alone, it is often spent walking, reading or listening to a podcast."
            />
          </div>
          <div className="keen-slider__slide">
            {" "}
            <AboutUsComponent
              image="https://www.raymondjames.com/-/media/rj/advisor-sites/sites/f/a/familylegacypartners/images/bio-headshot-patrick-oneill.jpg?h=248&w=206&la=en&hash=DA8B494EB2AF792AC121168FC6508462"
              imagetitle="Patrick O'Neill, CFP®"
              list1="Investment Executive"
              icon1={<FontAwesomeIcon icon={faEnvelope} />}
              icon2={<FontAwesomeIcon icon={faPhone} />}
              heading1="HOW I CAN HELP YOU"
              paragraph1="Lin dsay is passionate about providing financial education and empowerment to each of her clients—and has a special affinity for working with women and young professionals. She works closely with each to truly understand their attitudes toward money, their hopes, concerns and more. She believes this is critical to helping them avoid emotional decisions so they can stay on track to accomplish their goals."
              heading2="WHAT MAKES ME KNOWLEDGEABLE"
              paragraph2="After spending her childhood weekends in the office alongside her father, Lindsay officially joined Family Legacy Wealth Partners in 2015. She began her career with Franklin Templeton and then moved to Raymond James as a Transition Consultant. In 2012, she joined TIAA-CREF where she worked one-on-one with individuals to ensure they had both the understanding and the proper retirement plans to work toward their goals. Lindsay became a lead facilitator for TIAA-CREFF's Women to Women program, which she carries over to the team's Women in the Know programs. After graduating from Western Michigan University in 2006, Lindsay earned the CERTIFIED FINANCIAL PLANNER™ designation."
              heading3="GETTING TO KNOW ME"
              paragraph3="Outside of work, Lindsay is active with her husband Mike, young sons Henry, Arlo and Isaac. She enjoys her time on the soccer field, coaching her son’s team or rollerblading with them at the skating rink. When Lindsay has time alone, it is often spent walking, reading or listening to a podcast."
            />
          </div>
          <div className="keen-slider__slide">
            <AboutUsComponent
              image="https://www.raymondjames.com/-/media/rj/advisor-sites/sites/f/a/familylegacypartners/images/bio-headshot-robin-stack.jpg?h=248&w=206&la=en&hash=78738EB5B0523389727CB4D4016F1A51"
              imagetitle="Robin Stack"
              list1="Registered Associate"
              icon1={<FontAwesomeIcon icon={faEnvelope} />}
              icon2={<FontAwesomeIcon icon={faPhone} />}
              heading1="HOW I CAN HELP YOU"
              paragraph1="Lin dsay is passionate about providing financial education and empowerment to each of her clients—and has a special affinity for working with women and young professionals. She works closely with each to truly understand their attitudes toward money, their hopes, concerns and more. She believes this is critical to helping them avoid emotional decisions so they can stay on track to accomplish their goals."
              heading2="WHAT MAKES ME KNOWLEDGEABLE"
              paragraph2="After spending her childhood weekends in the office alongside her father, Lindsay officially joined Family Legacy Wealth Partners in 2015. She began her career with Franklin Templeton and then moved to Raymond James as a Transition Consultant. In 2012, she joined TIAA-CREF where she worked one-on-one with individuals to ensure they had both the understanding and the proper retirement plans to work toward their goals. Lindsay became a lead facilitator for TIAA-CREFF's Women to Women program, which she carries over to the team's Women in the Know programs. After graduating from Western Michigan University in 2006, Lindsay earned the CERTIFIED FINANCIAL PLANNER™ designation."
              heading3="GETTING TO KNOW ME"
              paragraph3="Outside of work, Lindsay is active with her husband Mike, young sons Henry, Arlo and Isaac. She enjoys her time on the soccer field, coaching her son’s team or rollerblading with them at the skating rink. When Lindsay has time alone, it is often spent walking, reading or listening to a podcast."
            />
          </div>
          <div className="keen-slider__slide">
            <AboutUsComponent
              image="https://www.raymondjames.com/-/media/rj/advisor-sites/sites/f/a/familylegacypartners/images/bio-headshot-deborah-moultrie.jpg?h=248&w=206&la=en&hash=375B438ADD25F911A6ABF175C0289CCF"
              imagetitle="Deborah Moultrie"
              list1="Office Manager"
              icon1={<FontAwesomeIcon icon={faEnvelope} />}
              icon2={<FontAwesomeIcon icon={faPhone} />}
              heading1="HOW I CAN HELP YOU"
              paragraph1="Lin dsay is passionate about providing financial education and empowerment to each of her clients—and has a special affinity for working with women and young professionals. She works closely with each to truly understand their attitudes toward money, their hopes, concerns and more. She believes this is critical to helping them avoid emotional decisions so they can stay on track to accomplish their goals."
              heading2="WHAT MAKES ME KNOWLEDGEABLE"
              paragraph2="After spending her childhood weekends in the office alongside her father, Lindsay officially joined Family Legacy Wealth Partners in 2015. She began her career with Franklin Templeton and then moved to Raymond James as a Transition Consultant. In 2012, she joined TIAA-CREF where she worked one-on-one with individuals to ensure they had both the understanding and the proper retirement plans to work toward their goals. Lindsay became a lead facilitator for TIAA-CREFF's Women to Women program, which she carries over to the team's Women in the Know programs. After graduating from Western Michigan University in 2006, Lindsay earned the CERTIFIED FINANCIAL PLANNER™ designation."
              heading3="GETTING TO KNOW ME"
              paragraph3="Outside of work, Lindsay is active with her husband Mike, young sons Henry, Arlo and Isaac. She enjoys her time on the soccer field, coaching her son’s team or rollerblading with them at the skating rink. When Lindsay has time alone, it is often spent walking, reading or listening to a podcast."
            />
          </div>
          <div className="keen-slider__slide">
            <AboutUsComponent
              image="https://www.raymondjames.com/-/media/rj/advisor-sites/sites/f/a/familylegacypartners/images/bio-headshot-shanel-talbert.jpg?h=248&w=206&la=en&hash=B5E221167E396595DC6DF82A978184EF"
              imagetitle="Shanel Talbert"
              list1="Client Communications Associate"
              icon1={<FontAwesomeIcon icon={faEnvelope} />}
              icon2={<FontAwesomeIcon icon={faPhone} />}
              heading1="HOW I CAN HELP YOU"
              paragraph1="Lin dsay is passionate about providing financial education and empowerment to each of her clients—and has a special affinity for working with women and young professionals. She works closely with each to truly understand their attitudes toward money, their hopes, concerns and more. She believes this is critical to helping them avoid emotional decisions so they can stay on track to accomplish their goals."
              heading2="WHAT MAKES ME KNOWLEDGEABLE"
              paragraph2="After spending her childhood weekends in the office alongside her father, Lindsay officially joined Family Legacy Wealth Partners in 2015. She began her career with Franklin Templeton and then moved to Raymond James as a Transition Consultant. In 2012, she joined TIAA-CREF where she worked one-on-one with individuals to ensure they had both the understanding and the proper retirement plans to work toward their goals. Lindsay became a lead facilitator for TIAA-CREFF's Women to Women program, which she carries over to the team's Women in the Know programs. After graduating from Western Michigan University in 2006, Lindsay earned the CERTIFIED FINANCIAL PLANNER™ designation."
              heading3="GETTING TO KNOW ME"
              paragraph3="Outside of work, Lindsay is active with her husband Mike, young sons Henry, Arlo and Isaac. She enjoys her time on the soccer field, coaching her son’s team or rollerblading with them at the skating rink. When Lindsay has time alone, it is often spent walking, reading or listening to a podcast."
            />
          </div>
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="dots mb-4">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Slider;
