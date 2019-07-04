import React from 'react';
import { InfoWindow } from 'react-amap';
import { observer } from 'mobx-react';
import { Table, TableBody, TableRow, TableCell } from 'grommet';

export const CanvasInformation = observer(({
  __map__, onClose, data, template, ...props
}) => (
  <InfoWindow
    __map__={__map__}
    position={data}
    visible={data && data.enabled}
    events={{ close: onClose }}
    {...props}
  >
    {data && <Table>
      <TableBody>
        {template && template.map(t => (
          <TableRow key={t.property}>
            <TableCell>{t.label}</TableCell>
            <TableCell>
              {t.transform ?
                t.transform(data[t.property]) :
                data[t.property]}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>}
  </InfoWindow>
));