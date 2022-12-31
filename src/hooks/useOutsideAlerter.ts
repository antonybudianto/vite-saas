import { MutableRefObject, useEffect } from 'react';

function useOutsideAlerter<T>(
  ref: MutableRefObject<T>,
  enabled = false,
  cb = () => {}
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      // @ts-ignore
      if (enabled && ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    }

    if (enabled) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, enabled]);
}

export default useOutsideAlerter;
