import "./waterProgress.scss";
import Wave from "react-wavify";

const WaterProgress = ({topValue}:any) => {
 
  const customConversion = (inputNumber: number) => Math.min(Math.max(147 - inputNumber * 1.47, 0), 147);
  return (
    <>
      <div className="waveContainer">
        <Wave fill='url(#gradient)'
          paused={false}
          style={{zIndex:-1, transform: "scaleY(1.05)" }}

          options={{
            height: customConversion(topValue),
            amplitude: 10,
            speed: 0.2,
            points: 2
          }}
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#50c5fd" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
        </Wave>
      </div>
    </>
  );
};

export default WaterProgress;
