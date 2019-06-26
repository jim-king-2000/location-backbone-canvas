import React from 'react';
import { Map } from 'react-amap';

export const CanvasContainer = ({ children, ...props }) => (
  <Map {...props}  plugins={['Scale']}
    version='1.4.14'>
    {children}
  </Map>
);