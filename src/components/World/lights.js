import * as THREE from 'three';

export const createLights = () => {
  const light = new THREE.DirectionalLight('white', 5);
  light.position.set(1, 0, 1);
  const aLight = new THREE.AmbientLight("white", 2);
  return {light, aLight};
} 