import "./progressBar.scss"

const ProgressBar = ({progress}:any) => {

  return (
    <div className="progress-wrapper">
      <div className="progressbar-container">
        <div className="progressbar-complete" style={{ width: `${progress}%` }}>
          <div className="progressbar-liquid"></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
