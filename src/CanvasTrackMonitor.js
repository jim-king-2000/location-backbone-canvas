import { CanvasTracks } from './CanvasTracks';
import { CanvasPositionMonitor } from './CanvasPositionMonitor';

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
    propertyTemplate={propertyTemplate}
    canvasExtra={<CanvasTracks tracks={tracks} />}
  />
);
