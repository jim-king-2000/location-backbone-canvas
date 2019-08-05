import React, { Component } from 'react';
import { CanvasContainer } from './CanvasContainer';
import { CanvasPositions } from './CanvasPositions';
import { CanvasReactor } from './CanvasReactor';
import { CanvasInformation } from './CanvasInformation';
import { CanvasPluginZoom } from './CanvasPluginZoom';
import { CanvasTracks } from './CanvasTracks';
import { CanvasPositionMonitor } from './CanvasPositionMonitor';

// properties
// mapKey
// positions
// tracks
// selectedThing
// selectThingId = thingId => {}
// propertyTemplate

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
    propertyTemplate={propertyTemplate}
    canvasExtra={<CanvasTracks tracks={tracks} />}
  />
);
