import * as React from 'react';
import { CSSProperties } from 'react';

const styles: CSSProperties = {
  width: 20,
  height: 20,
  display: 'inline-grid',
  placeItems: 'center',
  transform: 'translateY(4px)'
};

export const IconVenezuela = () => (
  <svg style={styles} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 180 120">
    <defs>
      <g id="s" transform="translate(0, -36)">
        <g id="f">
          <g id="t">
            <path d="M0 -5V0H3" fill="#fff" transform="rotate(18, 0, -5)" id="o" />
            <use xlinkHref="#o" transform="scale(-1,1)" />
          </g>
          <use xlinkHref="#t" transform="rotate(72)" />
        </g>
        <use xlinkHref="#t" transform="rotate(-72)" />
        <use xlinkHref="#f" transform="rotate(144)" />
      </g>
    </defs>
    <path d="M0 0H180V120H0z" fill="#cf142b" />
    <path d="M0 0H180V80H0z" fill="#00247d" />
    <path d="M0 0H180V40H0z" fill="#ffcc00" />
    <g transform="translate(90, 84)">
      <g id="s4">
        <g id="s2">
          <use xlinkHref="#s" transform="rotate(10)" />
          <use xlinkHref="#s" transform="rotate(30)" />
        </g>
        <use xlinkHref="#s2" transform="rotate(40)" />
      </g>
      <use xlinkHref="#s4" transform="rotate(-80)" />
    </g>
  </svg>
);
