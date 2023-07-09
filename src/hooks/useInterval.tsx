import { useEffect, useRef } from 'react';

export function useInterval(callback: ()=> any, delay: number) {
  const savedCallback: any = useRef();
  console.log(callback, delay)
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay]);
}
