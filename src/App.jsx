import { useEffect, useState } from 'react';

import './App.css';
import styles from './App.module.scss';

import { Container } from './Form/Container';

const App = () => {
  const [coords, setCoords] = useState([0, 0]);
  const [percentage, setPercentage] = useState(0);

  const handleMouse = e => {
    const { clientX, clientY } = e;
    setCoords([clientX, clientY]);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouse);

    return () => {
      document.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return (
    <div className="app">
      <div
        className={styles.watcher}
        style={{ '--data-value': `${percentage}%` }}
      >
        <img src="/inosuke.png" alt="Inosuke" />
        <div
          className={`${styles.pupil} ${
            coords[0] > 77 ? styles.right : styles.left
          } ${coords[1] > 80 ? styles.bottom : styles.top}`}
        />
        <div
          className={`${styles.pupil} ${
            coords[0] > 77 ? styles.right : styles.left
          } ${coords[1] > 80 ? styles.bottom : styles.top}`}
        />
      </div>
      <Container setPercentage={setPercentage} />
    </div>
  );
};
export default App;
