import useIsMobile from '../../hooks/useIsMobile'
import HomePage from './HomePage';
import Splash from '../Splashscreen/Splash';


export const LandingPage = () => {

  const isMobile = useIsMobile();

  return (
   <>
   {
    isMobile ? <Splash/> : <HomePage/>
   }
   </>
  )
}
