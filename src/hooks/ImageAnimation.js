import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';


const ImageAnimation = ({ hidden, children }) => {
  const preScroll = useRef(null);
  const elemRef = useRef(null);
  const [scale, setScale] = useState(1.12);

  useEffect(() => {
    const botPos = (element) => element.getBoundingClientRect().bottom;
    const onScroll = () => {
      const divBotPos = botPos(elemRef.current);
      const scrollPos = preScroll.current > window.scrollY;
      preScroll.current = window.scrollY;
      if (scrollPos == null) {
        return;
      }
      if (scrollPos && divBotPos > window.innerHeight) {
        setScale(1.3);
        return;
      }
      if (divBotPos < window.innerHeight) {
        setScale(1.12);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimationOnScroll animateIn="animate__fadeIn">
      <div ref={elemRef}
        className={hidden ? 'overflow-hidden' : ''} >
        <div style={{
          transition: "transform 1000ms ease-in-out",
          transform: `scale(${scale})`,
          transformOrigin: 'top'
        }}>{children}</div>
      </div>
    </AnimationOnScroll>
  );
};
export default ImageAnimation