import { useEffect } from 'react';

export function useOutsideClick(ref, callback) {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchend', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchend', handleClick);
    };
  }, [ref]);
}