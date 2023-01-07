import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ScrollAnimation from "../../utility/ScrollAnimation/ScrollAnimation";

const Counter = () => {
  const [tranlate] = useTranslation();
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMintutes] = useState();
  const [seconds, setSeconds] = useState();

  let interVal;

  const countDown = () => {
    const destination = new Date("JAN 01, 2024").getTime();
    interVal = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((different % (1000 * 60)) / 1000);

      if (destination < 0) {
        clearInterval(interVal.current);
      } else {
        setDays(days);
        setHours(hours);
        setMintutes(minutes);
        setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    countDown();
  }, []);

  return (
    <div className="clock__wrapper d-flex align-items-center gap-3 mt-lg-3">
      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center ">
          <h2 className="text-white fs-3 mb-2">{days} </h2>
          <h5 className="text-white fs-6">{tranlate("offers.days")}</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>

      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center">
          <h2 className="text-white fs-3 mb-2">{hours} </h2>
          <h5 className="text-white fs-6">{tranlate("offers.hours")}</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>
      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center">
          <h2 className="text-white fs-3 mb-2">{minutes} </h2>
          <h5 className="text-white fs-6">{tranlate("offers.minutes")}</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>
      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center">
          <h2 className="text-white fs-3 mb-2">{seconds} </h2>
          <h5 className="text-white fs-6">{tranlate("offers.seconds")}</h5>
        </div>
      </div>
    </div>
  );
};

export default Counter;
