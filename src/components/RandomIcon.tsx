import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";

import Container from "./Container";

const allSolidIcons = Object.values(solidIcons);

const RandomIcon = () => {
  const [icon, setIcon] = useState<any>(null);
  const [countdown, setCountdown] = useState<number>(3);
  const [initialRender, setInitialRender] = useState<boolean>(true);

  useEffect(() => {
    if (!initialRender && countdown > 0) {
      const countdownTimer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => clearInterval(countdownTimer);
    }
  }, [initialRender, countdown]);

  const handleClick = () => {
    setInitialRender(false);
    setCountdown(3);
    setTimeout(() => {
      const randomIcon =
        allSolidIcons[Math.floor(Math.random() * allSolidIcons.length)];
      setIcon(randomIcon);
    }, 3000);
  };

  const initialRenderUI = <span>Here will be an icon</span>;
  const iconRender = <FontAwesomeIcon icon={icon} size="5x" />;
  const countdownRender = <span style={{ fontSize: "3rem" }}>{countdown}</span>;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container>
        {initialRender && initialRenderUI}
        {!initialRender && countdown === 0 && icon && iconRender}
        {!initialRender && countdown > 0 && countdownRender}
      </Container>
      <button onClick={handleClick}>Show Random Icon</button>
    </div>
  );
};

export default RandomIcon;
