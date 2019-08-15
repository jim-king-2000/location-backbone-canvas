import React, { Component } from 'react';
import { Box } from 'grommet';
import { CanvasContainer } from './CanvasContainer';
import { CanvasPositions } from './CanvasPositions';
import { CanvasReactor } from './CanvasReactor';
import { CanvasInformation } from './CanvasInformation';
import { CanvasPluginZoom } from './CanvasPluginZoom';
import { CanvasInformationTable } from './CanvasInformationTable';
import { defaultPropertyTemplate } from './common/propertyTemplate';

// properties
// mapKey
// positions
// selectedThing
// selectThingId = thingId => {}
// propertyTemplate
// canvasExtra

export class CanvasPositionMonitor extends Component {
  state = {
    tracingMode: false
  }

  render() {
    const positions = this.props.positions;
    const selectThingId = this.props.selectThingId;
    const propertyTemplate = this.props.propertyTemplate ||
      defaultPropertyTemplate;
    return (
      <CanvasContainer mapkey={this.props.mapKey}>
        {this.props.canvasExtra}
        <CanvasPositions
          positions={positions}
          events={{
            click: e => selectThingId(e.target.getExtData().thingId)
          }}
        />
        <CanvasInformation
          onClose={() => selectThingId(undefined) }
          data={this.props.selectedThing}
          template={propertyTemplate}
        />
        <CanvasInformationTable
          height='small'
          overflow='auto'
          positions={positions}
          template={propertyTemplate}
          style={{
            position: 'absolute',
            top: 0
          }}
        />
        <CanvasPluginZoom
          direction='row'
          tracingMode={this.state.tracingMode}
          onChange={e => this.setState({ tracingMode: e.target.checked })}
          style={{
            position: 'absolute',
            bottom: 'small',
            right: 0
          }}
        />
        <CanvasReactor
          markers={positions}
          tracingMode={this.state.tracingMode} />
      </CanvasContainer>
    );
  }
}