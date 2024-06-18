import { usePathname } from 'next/navigation';
import React from 'react';

export const usePathChangeEffect = (callback) => {
  const lastPathName = React.useRef(null);
  const pathname = usePathname();

  // auto close the overlay if  pathname is changed
  React.useEffect(() => {
    if (lastPathName.current === null || lastPathName.current === pathname) {
      lastPathName.current = pathname;
    } else if (lastPathName.current !== pathname) {
      lastPathName.current = pathname;
      callback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
};
