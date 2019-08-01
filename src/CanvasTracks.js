import React from 'react';
import { Polyline } from 'react-amap';
import { lineStyle, colorPool } from './common/PolylineStyle';

export const CanvasTracks = ({ tracks, __map__ }) => (
  <>
    {tracks && tracks.map(track => {
      let path = track.splittedTrack || [];
      if (!Array.isArray(path) || !Array.isArray(path[0])) {
        path = [path];
      }
      return path.map((pathItem, i) => <Polyline
        __map__={__map__}
        key={`${track.thingId}-${i}`}
        path={pathItem}
        events={{ created: () => __map__.setFitView() }}
        style={{
          strokeColor: colorPool[track.colorIndex % colorPool.length] ||
            '#006600',
          ...lineStyle
        }} />);
    })}
  </>
);