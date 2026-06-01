import { useEffect, useRef } from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min";

function VantaBackground() {
  const vantaRef = useRef(null);

  useEffect(() => {
  const effect = GLOBE({
  el: vantaRef.current,
  THREE,
  color: 0xff2d2d,
  backgroundColor: 0x000000,
  size: 1.2,
});

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
}

export default VantaBackground;