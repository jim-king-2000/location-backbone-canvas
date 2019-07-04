import React from 'react';
import { InfoWindow } from 'react-amap';
import { observer } from 'mobx-react';

export const CanvasInformation = observer(({
  __map__, onClose, data
}) => (
  <InfoWindow
    __map__={__map__}
    position={data}
    visible={!!data}
    events={{ close: onClose }}
  >
    <div>abc</div>
  </InfoWindow>
));