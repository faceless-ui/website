import Link from 'next/link';
import React from 'react';
import classes from './index.module.scss';

// NOTE: this component exists so that any element can be linked with a sanitized url, and conditionally passed through local routing
// this adds consistency and safety to any links rendered through the app, in or outside a traditional button component

export const Hyperlink: React.FC<{
  href?: string
  className?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  onClick?: () => void
  newTab?: boolean
}> = (props) => {
  const {
    className,
    href: hrefFromProps,
    children,
    onMouseEnter,
    onMouseLeave,
    onClick,
    newTab
  } = props;

  let href = hrefFromProps;

  const sanitizedHref = href || ''; // todo: sanitize the href as necessary (strip top-level domains, etc)
  let isLocal = true; // todo: check isLocalPath (to conditionally render a link or raw html anchor and open in new tab)

  const sharedProps = {
    className: [
      className,
      classes.hyperlink,
    ].filter(Boolean).join(' '),
    onMouseEnter,
    onMouseLeave,
    onClick,
    ...newTab ? {
      rel: 'noopener noreferrer',
      target: '_blank'
    } : {}
  }

  if (!newTab && isLocal) {
    return (
      <Link
        href={sanitizedHref}
        scroll={false}
      >
        <a {...sharedProps} >
          {children}
        </a>
      </Link>
    )
  }

  return (
    <a
      href={sanitizedHref}
      {...sharedProps}
    >
      {children}
    </a>
  )
}
