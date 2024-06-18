'use client';

import { init, push } from '@socialgouv/matomo-next';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export const Matomo = ({ config }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [inited, setInited] = useState(false);
  const [previousPath, setPreviousPath] = useState('');

  /**
   ** Matomo Tracking with Next 13
   * The @socialgouv/matomo-next does not support the app directory based routing from next v13 yet. We therefore had to add our own tracking hook.
   * This implementation is based on the following code example:https://github.com/SocialGouv/mda/pull/286/files#diff-019a472dfdf0f26c5569276dd7262f85991c54a1aa060c7ac63f79586dbbc17a
   * Full code here: https://github.com/SocialGouv/mda/blob/main/apps/web/src/components/utils/client/Matomo.tsx
   * The link to the code example was found in the following github issue: https://github.com/SocialGouv/matomo-next/issues/99
   */

  /**
   ** Initialize Matomo
   */
  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && !inited) {
      if (!inited) {
        init({
          ...config
        });

        setInited(true);
      }
    }
  }, [inited, config]);

  /**
   * * Track Page Changes
   * The @socialgouv/matomo-next does not work with next 13
   * we therefore have to create our own useEffect hook to tack the page changes
   */
  useEffect(() => {
    if (!pathname) {
      return;
    }

    if (!previousPath) {
      return setPreviousPath(pathname);
    }

    push(['setReferrerUrl', `${previousPath}`]);
    push(['setCustomUrl', pathname]);
    push(['deleteCustomVariables', 'page']);
    setPreviousPath(pathname);
    // In order to ensure that the page title had been updated,
    // we delayed pushing the tracking to the next tick.
    setTimeout(() => {
      push(['setDocumentTitle', document.title]);
      push(['trackPageView']);
    });
    /**
     * This is because we don't want to track previousPath
     * could be a if (previousPath === pathname) return; instead
     * But be sure to not send the tracking twice
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  return <></>;
};
