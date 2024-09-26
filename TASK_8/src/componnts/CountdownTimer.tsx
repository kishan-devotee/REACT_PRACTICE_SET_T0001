import React, { useState, useEffect } from "react";
import { Card, Button, Typography } from "antd";

const { Title } = Typography;

interface CountdownTimerProps {
  initialTime: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  initialTime,
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timer!);
      setIsActive(false);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isActive, timeLeft]);

  const handleStart = () => {
    handleReset();
    if (timeLeft > 0) {
      setIsActive(true);
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setTimeLeft(initialTime);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <Card style={{ width: 300, textAlign: "center" }}>
      <Title level={2}>{formatTime(timeLeft)}</Title>
      <Button
        type="primary"
        onClick={handleStart}
        disabled={isActive || timeLeft === 0}
      >
        Start
      </Button>
      <Button type="default" onClick={handleReset} style={{ marginLeft: 10 }}>
        Reset
      </Button>
    </Card>
  );
};
