import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import "./ScrollToTop.scss";
const ScrollToTop = () => {
  const [backtoTop, setBacktotop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBacktotop(true);
      } else {
        setBacktotop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-to-top">
      {backtoTop && (
        <button onClick={scrollUp}>
          {" "}
          <ArrowUpwardIcon />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
