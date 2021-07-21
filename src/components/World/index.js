import * as THREE from 'three';
import { createScene } from './scene';
import { createCamera } from './camera';
import { createRenderer } from './renderer';
import { Sphere } from './Sphere';
import { createLights } from './lights';
import { resizer } from './resizer';
import {Loop} from './Loop';

class World {
  constructor(container) {
    this._scene = createScene();
    this._camera = createCamera();
    this._renderer = createRenderer();
    container.appendChild(this._renderer.domElement);
    this._resizer = resizer(container, this._camera, this._renderer);
    this._time = 0.0;
    this._loop = new Loop(this._camera, this._scene, this._renderer);
    // const globe = new Sphere(3.5, 'black');
    const globe = new Sphere(3.5, 'black', this._time);
    // this._loop._needsUpdate.push(globe.getSphere());
    globe.getSphere().position.set(0, 0, 0);
    const {light, aLight} = createLights();
    this._scene.add(globe.getSphere(), light, aLight);
    this._clock = new THREE.Clock();
  }

  start() {
    this._loop.start(this._clock, this._time);
  }

  stop() {
    this._loop.stop();
  }

  render() {
    this._renderer.render(this._scene, this._camera);
  }
}
export { World };