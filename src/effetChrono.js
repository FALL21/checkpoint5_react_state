import React, {  useEffect, useState } from "react";

function EffectChrono() {

    const[timer, setTimer]= useState(0)

    useEffect(() => {

        setInterval(() => {
            setTimer(timer=>timer+1);
    }, 1000);
    }, []);


return (
  <>
   <p>Chrono: {timer}</p>
  </>
);
}
export default EffectChrono;