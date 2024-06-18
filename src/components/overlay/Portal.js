'use client';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import canUseDom from './utils/canUseDom';

let portalContainer;

export const Portal = ({ children }) => {
  const [el, setEl] = React.useState(null);

  React.useEffect(() => {
    portalContainer = document.querySelector('div[portal-container]');

    if (!portalContainer && canUseDom) {
      portalContainer = document.createElement('div');
      portalContainer.setAttribute('portal-container', '');
      document.body.insertBefore(portalContainer, document.body.childNodes[0]);
    }
    // This fixes SSR
    const portalElement = document.createElement('div');
    setEl(portalElement);
    portalContainer.appendChild(portalElement);

    return () => {
      portalContainer.removeChild(portalElement);
    };
  }, []);

  if (!canUseDom || !el) return null;
  return ReactDOM.createPortal(children, el);
};

Portal.propTypes = {
  children: PropTypes.node.isRequired
};
