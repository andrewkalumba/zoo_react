import { useState, useEffect } from "react";
import styles from './time.module.css'

const Time = () => { 
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000); 
  
      return () => clearInterval(interval);
    }, []);

 return (
    <div className={styles.timeClock}>
      {currentTime.toLocaleTimeString()}
    </div>
 )
}

export default Time

