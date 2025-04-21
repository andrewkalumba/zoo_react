import React, { useEffect, useState } from 'react';
import styles from './bubbles.module.css';

const Bubbles = ({ bubbleCount = 20 }) => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const randomBubbles = Array.from({ length: bubbleCount }).map((_, index) => ({
      id: index,
      size: Math.random() * 40 + 10, // 10px - 50px
      left: Math.random() * 100,     // % across the screen
      duration: Math.random() * 10 + 5, // 5s - 15s
      delay: Math.random() * 5,         // delay start
      blur: Math.random() < 0.3         // add blur effect to some
    }));
    setBubbles(randomBubbles);
  }, [bubbleCount]);

  return (
    <div className={styles.bubbleWrapper}>
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`${styles.bubble} ${bubble.blur ? styles.blur : ''}`}
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Bubbles;
