import { useEffect } from "react";
import { useState } from "react";
export const useLocomotiveScroll = () => {
  const [scroller, setScroller] = useState();
  useEffect(() => {
    let scroller;
    import("locomotive-scroll").then((locomotiveModule) => {
      let newScroller = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
      });
      setScroller(newScroller);
    });
    return () => {
      if (scroller) scroller.destroy();
    };
  }, []);
  return scroller;
};

/* new ResizeObserver(() => scroller.update()).observe(
  document.querySelector("[data-scroll-container]")
); 
*/
