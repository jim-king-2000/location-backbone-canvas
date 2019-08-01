import React, { Component } from 'react';

export class CanvasReactor extends Component {
  render() {
    const markers = this.props.markers;
    const __map__ = this.props.__map__;
    const bounds = __map__.getBounds();
    console.log('Render CanvasReactor.');
    console.log(bounds);
    return null;
  }
}