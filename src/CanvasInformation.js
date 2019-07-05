import React from 'react';
import { InfoWindow } from 'react-amap';
import { observer } from 'mobx-react';
import { Box, Table, TableBody, TableRow, TableCell } from 'grommet';

export const CanvasInformation = observer(({
  __map__, onClose, data, template, ...props
}) => (
  <>
    {data && <InfoWindow
      __map__={__map__}
      position={{
        latitude: data.latitude,
        longitude: data.longitude
      }}
      visible={!!data}
      events={{ close: onClose }}
      {...props}
    >
      <Box background={{ opacity: 'medium' }}>
        <Table>
          <TableBody>
            {template && template.map(t => (
              data[t.property] === undefined ?
              undefined :
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
        </Table>
      </Box>
    </InfoWindow>}
  </>
));