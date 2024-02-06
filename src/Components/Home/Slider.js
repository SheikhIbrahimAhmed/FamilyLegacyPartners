import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../Home/Slider.css";
import SliderComponent from "../Home/SliderComponent";
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
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide">
            <SliderComponent
              image="https://www.raymondjames.com/-/media/rj/advisor-sites/global/components/category-tiles/professional-expertise.jpg?la=en&hash=BD2CE718D74A3EE86AD3D06B1EBF69C9"
              heading="EXPERTISE"
              subheading="KNOWLEDGEABLY APPLIED"
              paragraph="Your important financial affairs should only be left to those with not only proven expertise but also the ability to apply it effectively in pursuit of your goals and objectives."
            />
          </div>

          <div className="keen-slider__slide">
            {" "}
            <SliderComponent
              image="https://www.raymondjames.com/-/media/rj/advisor-sites/global/components/category-tiles/breadth-of-service.jpg?la=en&hash=DA33B5A20EEBC862CBD297BFC5E76DCB"
              heading="RESOURCES"
              subheading="VITAL TO SUCCESS"
              paragraph="There are many aspects to investing. We provide a depth of ability and resources to match your needs and to help you make the most of each investment opportunity."
            />
          </div>
          <div className="keen-slider__slide">
            {" "}
            <SliderComponent
              image="https://www.raymondjames.com/-/media/rj/advisor-sites/global/components/category-tiles/strength-of-ab_rj.jpg?la=en&hash=2FC820415EB7CC3DBBB3001FDA378EAA"
              heading="COMMITMENT"
              subheading="WORTH MENTIONING"
              paragraph="Established in 1962, Raymond James has grown to become one of the largest, most well-respected independent financial services companies in the country."
            />
          </div>
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
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
