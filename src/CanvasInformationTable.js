import React from 'react';
import { observer } from 'mobx-react';
import { Box, Table, TableBody, TableRow, TableCell } from 'grommet';

export const CanvasInformationTable = observer(({ positions, template }) => (
  <Table>
    <TableHeader>
      {Array.isArray(template) && template.map(e => (
        <TabelCell>{e.label}</TabelCell>
      ))}
    </TableHeader>
  </Table>
));