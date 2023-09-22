import { Progress } from "antd"

import "./progressCard.scss"
import useIsMobile from "../../../hooks/useIsMobile"
import { useEffect, useState } from "react";


const ProgressCard = ({ currentMacros, base, type }: any) => {

  const isMobile = useIsMobile();
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress(Math.floor((currentMacros/ base) * 100))
  }, [currentMacros])
  

  return (
    <div className="progressCardContainer">
      <Progress size={isMobile ? "default" : 168} strokeWidth={12} strokeColor={"#acc741"} percent={progress} type="dashboard" />
      <div className="progressInfo">
        <p className="progressHeading">{type}</p>
        {base-currentMacros<0?
        <p className="progressSubheading" style={{color:"#acc741"}}> Intake limit reached</p>
        :<p className="progressSubheading">Need {Math.floor(base-currentMacros)}{type === "Calories" ? "Kcal" : "gm"} more</p>}
        
      </div>
    </div>
  )
}

export default ProgressCard