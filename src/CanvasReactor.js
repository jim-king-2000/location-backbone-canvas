import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export class CanvasReactor extends Component {
  componentDidUpdate() {
    if (!this.props.setFitView) return;
    const __map__ = this.props.__map__;
    __map__.setFitView(__map__.getAllOverlays('marker'));
    if (this.props.onUpdateEnd) this.props.onUpdateEnd();
  }

  render() {
    if (!this.props.tracingMode) return null;

    const __map__ = this.props.__map__;
    const bounds = __map__.getBounds();
    const isMarkersInViewport = this.props.markers
    .filter(p => p.latitude && p.longitude)
    .every(
      p => bounds.contains(new AMap.LngLat(p.longitude, p.latitude))
    );
    if (!isMarkersInViewport) {
      __map__.setFitView(__map__.getAllOverlays('marker'));
    }
    return null;
  }
}