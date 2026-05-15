"use client";

import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";

const TREES_PER_SIDE = 6;
const TREE_COUNT = TREES_PER_SIDE * 2;

// Seeded random so positions are stable across hot reloads
function seeded(n: number): number {
  const x = Math.sin(n * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

function createTrunkGeometry(): THREE.BufferGeometry {
  // Profile (radius, y) revolves around Y axis — tapers from buttress flare to narrow top
  const profile = [
    new THREE.Vector2(0.88, 0),
    new THREE.Vector2(0.68, 0.6),
    new THREE.Vector2(0.54, 3),
    new THREE.Vector2(0.44, 8),
    new THREE.Vector2(0.35, 15),
    new THREE.Vector2(0.26, 22),
  ];

  const geo = new THREE.LatheGeometry(profile, 14);
  const pos = geo.attributes.position as THREE.BufferAttribute;

  // Displace vertices radially with layered sine noise → organic bark silhouette
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    const r = Math.sqrt(x * x + z * z);
    if (r < 0.001) continue;
    const a = Math.atan2(z, x);
    const disp =
      Math.sin(a * 3 + y * 0.8) * 0.055 +
      Math.sin(a * 7 + y * 1.6) * 0.028 +
      Math.sin(a * 13 + y * 0.35) * 0.014;
    pos.setX(i, x + (x / r) * disp);
    pos.setZ(i, z + (z / r) * disp);
  }

  pos.needsUpdate = true;
  geo.computeVertexNormals();
  return geo;
}

export default function RedwoodTrunks() {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const geometry = useMemo(() => createTrunkGeometry(), []);

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#7a3f28",
        roughness: 0.97,
        metalness: 0,
      }),
    []
  );

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const matrix = new THREE.Matrix4();
    const rot = new THREE.Euler();
    const zSlots = [-4, -8, -12, -16, -21, -27];

    let idx = 0;
    for (let s = 0; s < TREES_PER_SIDE; s++) {
      const z = zSlots[s] + (seeded(s) - 0.5) * 1.5;
      const xOffset = 2.9 + seeded(s + 20) * 0.7;
      rot.set(0, seeded(s + 40) * Math.PI * 2, 0);

      // Left side
      matrix.makeRotationFromEuler(rot);
      matrix.setPosition(-xOffset, 0, z);
      mesh.setMatrixAt(idx++, matrix);

      // Right side
      rot.y = seeded(s + 60) * Math.PI * 2;
      matrix.makeRotationFromEuler(rot);
      matrix.setPosition(xOffset, 0, z);
      mesh.setMatrixAt(idx++, matrix);
    }

    mesh.instanceMatrix.needsUpdate = true;
  }, []);

  return <instancedMesh ref={meshRef} args={[geometry, material, TREE_COUNT]} />;
}
