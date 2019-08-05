import React, { Component } from 'react';
import { CanvasContainer } from './CanvasContainer';
import { CanvasPositions } from './CanvasPositions';
import { CanvasReactor } from './CanvasReactor';
import { CanvasInformation } from './CanvasInformation';
import { CanvasPluginZoom } from './CanvasPluginZoom';
import { CanvasTracks } from './CanvasTracks';

// properties
// mapKey
// positions
// tracks
// selectedThing
// selectThingId = thingId => {}
// propertyTemplate

export class CanvasTrackMonitor extends Component {
  state = {
    tracingMode: false
  }

  render() {
    const positions = this.props.positions;
    const selectThingId = this.props.selectThingId;
    return (
      <CanvasContainer mapkey={this.props.mapKey}>
        <CanvasTracks tracks={this.props.tracks} />
        <CanvasPositions
          things={positions}
          events={{
            click: e => selectThingId(e.target.getExtData().thingId)
          }} />
        <CanvasInformation
          onClose={() => selectThingId(undefined)}
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
    );
  }
}