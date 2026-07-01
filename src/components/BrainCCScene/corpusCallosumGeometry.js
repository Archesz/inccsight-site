import * as THREE from 'three';
import { createNoise3D } from 'simplex-noise';
import { mulberry32 } from './seededRandom';

// Midsagittal Corpus Callosum outline (genu + rostrum hook on the left,
// splenium bulb on the right), the same anatomical silhouette used in the
// 2D hero animation, re-expressed as centered Three.js Shape coordinates
// (x: anterior(-) to posterior(+), y: inferior(-) to superior(+)).
const OUTLINE = [
  [-0.812, 0.406],
  [-0.437, 0.513], [-0.187, 0.513], [0, 0.5],
  [0.313, 0.481], [0.688, 0.45], [1, 0.375],
  [1.125, 0.344], [1.219, 0.281], [1.25, 0.125],
  [1.269, 0], [1.219, -0.112], [1.063, -0.175],
  [0.906, -0.225], [0.719, -0.225], [0.563, -0.175],
  [0.344, -0.112], [0.219, -0.05], [0.125, -0.012],
  [0, 0.031], [-0.187, 0.063], [-0.344, 0.063],
  [-0.5, 0.063], [-0.594, 0.031], [-0.625, -0.019],
  [-0.656, -0.075], [-0.594, -0.112], [-0.625, -0.175],
  [-0.687, -0.281], [-0.844, -0.281], [-0.906, -0.281],
  [-1.062, -0.281], [-1.137, -0.375], [-1.112, -0.469],
  [-1.087, -0.562], [-0.937, -0.594], [-0.812, -0.55],
  [-0.7, -0.512], [-0.675, -0.425], [-0.719, -0.344],
  [-0.762, -0.269], [-0.825, -0.225], [-0.8, -0.137],
  [-0.775, -0.037], [-0.762, 0.125], [-0.762, 0.25],
  [-0.762, 0.325], [-0.8, 0.375], [-0.812, 0.406],
];

function buildShape(scale) {
  const shape = new THREE.Shape();
  const [x0, y0] = OUTLINE[0];
  shape.moveTo(x0 * scale, y0 * scale);
  for (let i = 1; i < OUTLINE.length; i += 3) {
    const [x1, y1] = OUTLINE[i];
    const [x2, y2] = OUTLINE[i + 1];
    const [x3, y3] = OUTLINE[i + 2];
    shape.bezierCurveTo(x1 * scale, y1 * scale, x2 * scale, y2 * scale, x3 * scale, y3 * scale);
  }
  return shape;
}

// Builds a detailed 3D Corpus Callosum: an extruded + tapered + lightly
// displaced volume so it reads as an organic band rather than a flat plaque.
export function createCorpusCallosumGeometry({ scale = 1, depth = 0.62, noiseAmp = 0.012 } = {}) {
  const shape = buildShape(scale);

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelThickness: 0.05 * scale,
    bevelSize: 0.05 * scale,
    bevelSegments: 4,
    curveSegments: 24,
  });

  geometry.translate(0, 0, -depth / 2);

  const noise3D = createNoise3D(mulberry32(13));
  const pos = geometry.attributes.position;
  const v = new THREE.Vector3();
  const halfDepth = depth / 2;

  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);

    // Taper the two ends (the faces toward the interhemispheric fissure)
    // inward so the band reads as a rounded 3D volume, not an extruded plank.
    const edgeT = Math.min(1, Math.abs(v.z) / halfDepth);
    const taper = 1 - 0.32 * Math.pow(edgeT, 2.2);
    v.x *= taper;
    v.y *= taper;

    // Subtle organic surface noise.
    const n = noise3D(v.x * 3.2, v.y * 3.2, v.z * 3.2);
    v.x += n * noiseAmp;
    v.y += n * noiseAmp;

    pos.setXYZ(i, v.x, v.y, v.z);
  }

  geometry.computeVertexNormals();
  geometry.center();
  return geometry;
}
