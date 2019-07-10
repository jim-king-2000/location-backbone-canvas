import React from 'react';
import { Map } from 'react-amap';
import { Text } from 'grommet';

export const CanvasContainer = ({ children, ...props }) => (
  <Map plugins={['Scale']} version='1.4.14' {...props}>
    {children}
    <Text>版权所有&#169; 北京百特比邻信息科技有限公司</Text>
  </Map>
);