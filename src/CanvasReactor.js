import React, { Component } from 'react';

export class CanvasReactor extends Component {
  render() {
    const markers = this.props.markers;
    const __map__ = this.props.__map__;
    const bounds = __map__.getBounds();
    const isMarkersOutOfViewport = markers.filter(p => p.latitude && p.longitude).every(
      p => bounds.contains(new AMap.LngLat(p.longitude, p.latitude))
    );
    console.log(isMarkersOutOfViewport);
    if (isMarkersOutOfViewport) __map__.setFitView();
    return null;
  }
}