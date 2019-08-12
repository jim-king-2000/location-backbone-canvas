import React from 'react';
import { CanvasTracks } from './CanvasTracks';
import { CanvasPositionMonitor } from './CanvasPositionMonitor';
import { defaultPropertyTemplate } from './common/propertyTemplate';

// properties
// mapKey
// positions
// selectedThing
// selectThingId = thingId => {}
// propertyTemplate
// tracks

export const CanvasTrackMonitor = ({
  mapKey,
  positions,
  tracks,
  selectedThing,
  selectThingId,
  propertyTemplate
}) => (
  <CanvasPositionMonitor
    mapKey={mapKey}
    positions={positions}
    selectedThing={selectedThing}
    selectThingId={selectThingId}
    propertyTemplate={propertyTemplate || defaultPropertyTemplate}
    canvasExtra={<CanvasTracks tracks={tracks} />}
  />
);
