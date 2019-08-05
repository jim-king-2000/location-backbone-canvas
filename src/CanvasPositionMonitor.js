import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Box } from 'grommet';
import { CanvasContainer } from './CanvasContainer';
import { CanvasPositions } from './CanvasPositions';
import { CanvasReactor } from './CanvasReactor';
import { CanvasInformation } from './CanvasInformation';
import { CanvasPluginZoom } from './CanvasPluginZoom';

// properties
// mapKey
// positions
// selectedThing
// selectThingId = thingId => {}
// propertyTemplate

@observer
export class CanvasPositionMonitor extends Component {
  state = {
    tracingMode: false
   }

  render() {
    const positions = this.props.positions;
    return (
      <Box flex={{ grow: 1, shrink: 1 }}>
        <CanvasContainer mapkey={mapKey}>
          <CanvasPositions
            things={positions}
            events={{
              click: e => selectThingId(e.target.getExtData().thingId)
            }}
          />
          <CanvasInformation
            onClose={() => selectThingId(undefined) }
            data={this.props.selectedThing}
            template={this.props.propertyTemplate}
          />
          <CanvasPluginZoom
            direction='row'
            style={{
              position: 'absolute',
              top: 0
            }}
            tracingMode={this.state.tracingMode}
            onChange={e => this.setState({ tracingMode: e.target.checked })} />
          <CanvasReactor
            markers={positions}
            tracingMode={this.state.tracingMode} />
        </CanvasContainer>
      </Box>
    );
  }
}