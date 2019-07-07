import React from 'react';
import { Map } from 'react-amap';

export const CanvasContainer = ({ children, ...props }) => (
  <Map plugins={['Scale']} version='1.4.14' {...props}>
    {children}
  </Map>
);