import { Outlet } from 'react-router-dom'
// import MobileBnb from '../GlobalComponents/MobileBnb'
import useIsMobile from '../../hooks/useIsMobile'
import Sidebar from "../GlobalComponents/Sidebar/Sidebar"
import "./appLayout.scss"
import MobileNavbar from '../GlobalComponents/MobileNavbar/MobileNavbar'
type Props = {}

const AppLayout = (_props: Props) => {

  const isMobile=useIsMobile();
  
  return (
    <>
        {isMobile?<MobileNavbar/>:<Sidebar/>}
        {isMobile?<div className='mobileBg'></div>:<div className='appBg'></div>}
        <Outlet/>
    </>
  )
}

export default AppLayout