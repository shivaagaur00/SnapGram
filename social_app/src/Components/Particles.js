import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesComponent = () => {
  const options = useMemo(() => {
    return {
      background: {
        image: "linear-gradient(to top, #ff7e5f, #feb47b)", // Soft gradient similar to social media aesthetics
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
      },
      particles: {
        number: {
          value: 120,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: ["#FF007F", "#8000FF", "#FF1493", "#00BFFF", "#FFD700"], // Vibrant colors for a fun look
        },
        links: {
          enable: true,
          color: "#ffffff",
          distance: 120,
          opacity: 0.5,
          width: 1.5, // Thicker link lines for emphasis
        },
        move: {
          enable: true,
          speed: 3, // Slower particle speed for smoother animation
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
        },
        size: {
          value: { min: 5, max: 10 }, // Slightly larger particles for better visibility
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 5,
          },
        },
        opacity: {
          value: { min: 0.4, max: 0.9 },
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 0.4,
          },
        },
        shape: {
          type: "circle", // Keep particles circular
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          onClick: {
            enable: true,
            mode: "push", // Adds new particles on click
          },
        },
        modes: {
          repulse: {
            distance: 150,
            duration: 0.4,
          },
          push: {
            quantity: 5, // Adds a few more particles on click
          },
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={options}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default ParticlesComponent;
