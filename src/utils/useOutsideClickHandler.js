import { useEffect } from 'react';

const useOutsideClickHandler = (
  ref,
  action,
  disableOutsideClick,
  secondRef = { current: null }
) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!disableOutsideClick) {
        if (
          !ref.current ||
          ref.current?.contains(event.target) ||
          secondRef?.current?.contains(event.target)
        ) {
          return null;
        }
        event.stopPropagation();
        action();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, secondRef]);
};

export default useOutsideClickHandler;
