import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#1e1e1e", // צבע רקע כהה
        },
        particles: {
          number: {
            value: 80, // כמות החלקיקים
          },
          color: {
            value: "#ffffff", // צבע לבן לחלקיקים
          },
          shape: {
            type: "circle", // צורה עגולה
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
          },
          move: {
            enable: true,
            speed: 1.5, // מהירות תנועה של החלקיקים
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // החלקיקים זזים אחורה כשמעבירים עכבר
            },
          },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
};

export default ParticlesBackground;