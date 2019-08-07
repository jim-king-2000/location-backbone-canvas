import React from 'react';
import { observer } from 'mobx-react';
import { Box, Table, TableHeader, TableBody, TableRow, TableCell } from 'grommet';

export const CanvasInformationTable = observer(({ positions, template }) => (
  <Table>
    <TableHeader>
      {Array.isArray(template) && template.map(e => (
        <TableCell>{e.label}</TableCell>
      ))}
    </TableHeader>
  </Table>
));