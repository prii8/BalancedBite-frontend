import { useEffect, useState } from 'react';

function useIsMobile(): boolean {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  },[]);

  return (width <= 480);
}

export default useIsMobile;
