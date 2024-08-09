// const LoadingDots = () => {
//   let circleCommonClasses = "h-1.5 w-1.5 bg-current rounded-full";

//   return (
//     <div className="flex text-slate-400">
//       <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
//       <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
//       <div className={`${circleCommonClasses} animate-bounce400`}></div>
//     </div>
//   );
// };

// export default LoadingDots;

import { useState, useEffect } from "react";

const LoadingDots = () => {
  const [countdown, setCountdown] = useState(30);
  let circleCommonClasses = "h-1.5 w-1.5 bg-current rounded-full";

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
console.log('countdown',countdown);

  return (
    <div className="flex items-center text-slate-400">
      <div className="flex">
        <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
        <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
        <div className={`${circleCommonClasses} animate-bounce400`}></div>
      <span className="ml-2 text-white">{countdown}s</span>
      </div>
    </div>
  );
};

export default LoadingDots;
