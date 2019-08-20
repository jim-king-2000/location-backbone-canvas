import React from 'react';
import { observer } from 'mobx-react';
import { Box, Table, TableHeader, TableBody, TableRow,
  TableCell } from 'grommet';
import { defaultPropertyTemplate } from './common/propertyTemplate';

export const CanvasInformationTable = observer(
  ({ positions, template, ...props }) => {
    template = template || defaultPropertyTemplate;
    return (
      <Box background='#FFFFFFD0' {...props}>
        <Table>
          <TableHeader>
            <TableRow>
              {Array.isArray(template) && template.map(e => (
                <TableCell key={e.property}>{e.label}</TableCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.isArray(positions) && positions.map(p => (
              <TableRow key={p.thingId}>
                {Array.isArray(template) && template.map(e => (
                  <TableCell key={e.property}>
                    {e.transform ? e.transform(p[e.property]) : p[e.property]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    )
  }
);