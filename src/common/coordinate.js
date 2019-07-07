import { transform, WGS84, GCJ02, BD09 } from 'gcoord';

function transformPoint(p, sourceCoordinateType) {
  const [longitude, latitude] = transform(
    [p.longitude, p.latitude],
    sourceCoordinateType,
    GCJ02
  );
  const newPoint = { ...p };
  newPoint.longitude = longitude;
  newPoint.latitude = latitude;
  return newPoint;
}

export function coordinateTransform(p) {
  if (p.coordinateType === 'wgs-84') {
    return transformPoint(p, WGS84);
  } else if (p.coordinateType === 'bd-09') {
    return transformPoint(p, BD09)
  }

  return p;
}