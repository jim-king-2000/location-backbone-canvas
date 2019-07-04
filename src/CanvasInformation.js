import React from 'react';
import { InfoWindow } from 'react-amap';
import { observer } from 'mobx-react';

export const CanvasInformation = observer(({
  onClose
}) => (
  <InfoWindow
    events={{ close: onClose }}
  >
    abc
  </InfoWindow>
));