import { useState, useEffect, useRef } from 'react';

const useOutsideClick = initialValue => {
  const [isActive, setIsActive] = useState(initialValue);
  const ref = useRef(null);

  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsActive(!isActive);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return { ref, isActive, setIsActive };
};

export default useOutsideClick;
