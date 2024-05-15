import { useEffect, useState } from "preact/hooks";

function getScreenSize() {
  const width = globalThis.innerWidth;
  if (width < 640) {
    return "xs";
  } else if (width < 768) {
    return "sm";
  } else if (width < 1024) {
    return "md";
  } else if (width < 1280) {
    return "lg";
  } else if (width < 1536) {
    return "xl";
  } else {
    return "2xl";
  }
}
export default function ScreenSize() {
  const [screenSize, setScreenSize] = useState("");

  useEffect(() => {
    function handleResize() {
      setScreenSize(getScreenSize());
    }
    globalThis.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      globalThis.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          padding: "8px 16px",
          backgroundColor: getBackgroundColor(screenSize),
          color: getTextColor(screenSize),
        }}
      >
        {screenSize}
      </div>
    </div>
  );
}

function getBackgroundColor(screenSize: string) {
  switch (screenSize) {
    case "xs":
      return "red";
    case "sm":
      return "orange";
    case "md":
      return "yellow";
    case "lg":
      return "green";
    case "xl":
      return "blue";
    default:
      return "gray";
  }
}

function getTextColor(screenSize: string) {
  switch (screenSize) {
    case "xs":
      return "white";
    case "sm":
      return "black";
    case "md":
      return "black";
    case "lg":
      return "white";
    case "xl":
      return "white";
    default:
      return "white";
  }
}
