import { BiUserCircle } from "react-icons/bi";

import { BsSpeedometer2, BsBookmarks } from "react-icons/bs";

import { PiChartLineUp } from "react-icons/pi";

import './MobileNavbar.scss'

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {}



const MobileNavbar = (_props: Props) => {



    const [activeIcon, setActiveIcon] = useState<string>('');

    const location = useLocation();
    const regex = /\/app\/(.+)/;
    const match = location.pathname.match(regex);
    const navigate = useNavigate();
    const change = (iconName: string) => {
        setActiveIcon(iconName);
        navigate("/app/" + iconName)
    };
    
    useEffect(() => {
        if (match)
            setActiveIcon(match[1])
    }, [match])


    return (

        <div className="bottom-bar">

            <button onClick={() => change('dashboard')}

                className={`mobile-icon ${activeIcon === 'dashboard' ? 'active-tab' : ''}`}>

                <a >

                    <BsSpeedometer2 />

                </a>

            </button>

            <button onClick={() => change('timeline')}

                className={`mobile-icon ${activeIcon === 'timeline' ? 'active-tab' : ''}`}>

                <a ><PiChartLineUp /></a>

            </button>

            <button onClick={() => change('favourite')}

                className={`mobile-icon ${activeIcon === 'favourite' ? 'active-tab' : ''}`}>

                <a><BsBookmarks /></a>

            </button>

            <button onClick={() => change('profile')}

                className={`mobile-icon ${activeIcon === "profile" ? 'active-tab' : ''}`}>

                <a ><BiUserCircle /></a>

            </button>

        </div>

    )

}



export default MobileNavbar;