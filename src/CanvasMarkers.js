import React from 'react';
import { Markers } from 'react-amap';

export const CanvasMarkers = ({ stops, ...props }) => (
  <>
    {stops && <Markers markers={
      stops.map(stop => ({
        position: stop.location
      }))
    } {...props} />}
  </>
);