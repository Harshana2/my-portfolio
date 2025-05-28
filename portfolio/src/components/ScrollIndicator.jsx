import React from "react";

const ScrollIndicator = () => {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <svg
        className="absolute w-full h-full animate-[spin_8s_linear_infinite]"
        viewBox="0 0 100 100"
      >
        <defs>
          <path
            id="circlePath"
            d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
          />
        </defs>
        <text fontSize="10" fill="currentColor">
          <textPath xlinkHref="#circlePath" textLength="210">
            scroll down • scroll down •
          </textPath>
        </text>
      </svg>

      <div className="w-10 h-16 border-2 border-current rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
