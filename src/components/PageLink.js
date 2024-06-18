'use client';
/** @jsxImportSource theme-ui */

import React from 'react';
// ? source to prevent redirects: https://next-intl-docs.vercel.app/docs/routing/navigation#link
// ? it automatically prefix the href with the current locale, which prevent temporary redirection
import { Link } from 'navigation';

// eslint-disable-next-line react/display-name
export const PageLink = React.forwardRef(
  ({ children, href, sx, ...props }, ref) => {
    // const hrefEndWithSlash = href?.endsWith('/') ? href : href + '/';

    return (
      <Link
        ref={ref}
        sx={{
          variant: 'links.clear',
          ...sx
        }}
        href={href}
        {...props}>
        {children}
      </Link>
    );
  }
);
