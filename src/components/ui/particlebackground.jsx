import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // מחזירים את אפקט הדחייה עם העכבר
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 6, // כמות החלקיקים שתתוסף בזמן לחיצה
            },
            repulse: {
              distance: 150, // מרחק הדחייה של החלקיקים
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#8A2BE2", "#9932CC", "#9400D3", "#4B0082"], // גווני סגול שונים
          },
          links: {
            color: "#8A2BE2", // צבע הקשרים של החלקיקים
            distance: 150,
            enable: true,
            opacity: 0.6, // שקיפות גבוהה יותר
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce", // החלקיקים יידחפו אחורה אם הם נוגעים בקצוות
            },
            random: true, // כל חלקיק ינוע בכיוון רנדומלי
            speed: 4, // מהירות החלקיקים
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800, // הצפיפות של החלקיקים
            },
            value: 150, // כמות החלקיקים
          },
          opacity: {
            value: { min: 0.5, max: 0.8 }, // שקיפות משתנה בין 0.5 ל-0.8
          },
          shape: {
            type: ["circle", "star", "polygon"], // צורות חלקיקים מגוונות
            stroke: {
              width: 0,
              color: "#8A2BE2", // צבע קווים סגול כהה
            },
            polygon: {
              nb_sides: 5, // מספר הצלעות של המצולע
            },
          },
          size: {
            value: { min: 5, max: 10 }, // גודל החלקיקים משתנה בין 5 ל-10
          },
        },
        background: {
          // גרדיאנט צבעים עם גווני סגול עמוקים ומגוונים יותר
          image: "linear-gradient(135deg, #2E0854, #4B0082, #8A2BE2, #9932CC)",
          position: "0% 0%",
          size: "cover",
        },
        fullScreen: {
          zIndex: -1, // שמים את החלקיקים ברקע
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;