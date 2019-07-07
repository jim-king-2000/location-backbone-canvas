import { transform, WGS84, GCJ02, BD09 } from 'gcoord';

function transform(p, targetCoordinateType) {
  const [longitude, latitude] = transform(
    [p.longitude, p.latitude],
    WGS84,
    targetCoordinateType
  );
  p.longitude = longitude;
  p.latitude = latitude;
}

export function coordinateTransform(p) {
  if (p.coordinateType === 'wgs-84') {
    transform(p, GCJ02);
  } else if (p.coordinateType === 'bd-09') {
    transform(p, BD09)
  }

  return p;
}