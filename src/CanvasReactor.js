import React, { Component } from 'react';

export class CanvasReactor extends Component {
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