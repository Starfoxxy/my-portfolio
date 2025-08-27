import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function HeroParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 60 },
          size: { value: 2 },
          move: { enable: true, speed: 0.5 },
          opacity: { value: 0.6 },
          links: { enable: false },
          color: { value: "#ffffff" },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
