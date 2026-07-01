import * as THREE from 'three';
import { createNoise3D } from 'simplex-noise';
import { mulberry32 } from './seededRandom';

// Builds a wrinkled, gyrus-like brain shell by layering simplex noise onto
// an icosahedron and pinching a groove along the midline to suggest the
// interhemispheric fissure between the two hemispheres.
export function createBrainGeometry({ radius = 1.55, detail = 4 } = {}) {
  const geometry = new THREE.IcosahedronGeometry(radius, detail);
  const noise3D = createNoise3D(mulberry32(7));

  const pos = geometry.attributes.position;
  const v = new THREE.Vector3();
  const n = new THREE.Vector3();

  // Brain-like proportions: longer front-to-back (z) than tall (y) or wide (x).
  const scaleX = 0.82;
  const scaleY = 0.74;
  const scaleZ = 1.08;

  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    n.copy(v).normalize();

    const p = v.clone().multiplyScalar(1 / radius);
    let wrinkle =
      0.55 * noise3D(p.x * 2.2, p.y * 2.2, p.z * 2.2) +
      0.3 * noise3D(p.x * 4.6 + 5, p.y * 4.6 + 5, p.z * 4.6 + 5) +
      0.15 * noise3D(p.x * 9.5 + 11, p.y * 9.5 + 11, p.z * 9.5 + 11);
    wrinkle *= radius * 0.09;

    v.addScaledVector(n, wrinkle);
    v.x *= scaleX;
    v.y *= scaleY;
    v.z *= scaleZ;

    // Interhemispheric fissure: pinch a groove along the midline (x ~ 0),
    // narrowing gradually with distance so both hemispheres stay rounded.
    const fissure = Math.exp(-Math.pow(v.x / (radius * 0.16), 2));
    v.x -= Math.sign(v.x || 1) * fissure * radius * 0.07;
    v.y -= fissure * radius * 0.02;

    pos.setXYZ(i, v.x, v.y, v.z);
  }

  geometry.computeVertexNormals();
  return geometry;
}
