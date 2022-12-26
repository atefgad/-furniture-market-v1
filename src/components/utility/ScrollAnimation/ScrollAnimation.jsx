import { useEffect } from "react";
import AOS from "aos";
// Css Animate.css
import "../../../../node_modules/animate.css/animate.min.css";
// Css AOS
import "../../../../node_modules/aos/dist/aos.css";

const ScrollAnimation = ({
  animate = "fade",
  duration = 500,
  delay = 100,
  children,
}) => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div
      className="scroll__animation"
      data-aos={animate}
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
