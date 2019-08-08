import React from 'react';
import { Polyline, Marker } from 'react-amap';
import { Radial } from 'grommet-icons';
import { lineStyle, colorPool } from './common/PolylineStyle';

export const CanvasLineAndMark = ({ lines, __map__ }) => (
  <>
    {lines && lines.map(line => (
      <React.Fragment key={line.id}>
        <Polyline
          __map__={__map__}
          path={line.polyLines}
          style={{
            strokeColor: colorPool[line.colorIndex % colorPool.length],
            ...lineStyle
          }}
        />
        {line.stops && line.stops.map(stop => (
          <Marker
            __map__={__map__}
            key={stop.id}
            position={stop.location}
            extData={stop}
            offset={[-4, -4]}
            render={
              <div style={{ lineHeight: '8px' }}>
                <Radial
                  size='8px'
                  color={colorPool[line.colorIndex % colorPool.length]}
                />
              </div>
            }
          />
        ))}
      </React.Fragment>
    ))}
  </>
);