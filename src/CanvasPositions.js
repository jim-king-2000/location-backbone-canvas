import React from 'react';
import { Marker } from 'react-amap';
import { observer } from 'mobx-react';
import { colorPool } from './common/PolylineStyle';
import CarTopView from '../icon/CarTopView';

export const CanvasPositions = observer(
  ({ __map__, things, events, ...props }) => (
    <>
      {things && things.filter(p => p && p.latitude && p.longitude).map(p => (
        <Marker
          __map__={__map__}
          key={p.thingId}
          render={() => (<CarTopView
            fontSize={30}
            fill={colorPool[p.colorIndex % colorPool.length]}
          />)}
          title={p.isOnline ? '在线' : '离线'}
          offset={[-15, -15]}
          zIndex={150}
          position={p}
          angle={p.heading}
          extData={p}
          events={{
            created: () => __map__.setFitView(),
            ...events
          }}
          {...props}
        />
      ))}
    </>
  )
);