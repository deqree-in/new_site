import * as THREE from 'three';
import texture from './maps/earth_dotted.png';

const VS = `
uniform float u_time;
varying vec2 vuv;
varying vec3 vColor;
varying vec3 normalInterp;
varying vec3 p;

float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}

float noise(vec3 p){
    vec3 a = floor(p);
    vec3 d = p - a;
    d = d * d * (3.0 - 2.0 * d);

    vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
    vec4 k1 = perm(b.xyxy);
    vec4 k2 = perm(k1.xyxy + b.zzww);

    vec4 c = k2 + a.zzzz;
    vec4 k3 = perm(c);
    vec4 k4 = perm(c + 1.0);

    vec4 o1 = fract(k3 * (1.0 / 41.0));
    vec4 o2 = fract(k4 * (1.0 / 41.0));

    vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
    vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

    return o4.y * d.y + o4.x * (1.0 - d.y);
}

vec3 normalizeCoords (vec3 pos) {
  float length = sqrt(
    pos.x * pos.x +
    pos.y * pos.y +
    pos.z * pos.z
  );
  return vec3(
    pos.x / length,
    pos.y / length, 
    pos.z / length
  );
}

void main() {
  vuv = uv;
  vec3 np = normalizeCoords(position);
  vec3 newPos = position + 0.3 * normal * vec3(noise(sin(np * 15.0 + 4.0 * u_time)));
  vec3 newNormal = 0.3 * normal * vec3(noise(sin(np * 15.0 + 4.0 * u_time)));
  
  normalInterp = newNormal;
  vec4 pos4 = modelViewMatrix * vec4(newPos, 1.0);
  p = vec3(pos4) / pos4.w;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
}
`;

const FS = `
uniform sampler2D u_texture;
varying vec2 vuv;
varying vec3 vColor;
varying vec3 normalInterp;
varying vec3 p;

 const vec3 lightPos1 	= vec3(300, 60, 0);
 const vec3 ambientColor = vec3(0.04, 0.04, 0.04);
 const vec3 diffuseColor = vec3(0.05, 0.05, 0.05);
 const vec3 specColor1 	= vec3(0.314, 0.784, 0.471);

 const vec3 lightPos2 = vec3(-300, -60, 0);
 const vec3 specColor2 = vec3(1.0, 0.412, 0.706);
 
 void main() {
   vec3 normal = mix(normalize(normalInterp), normalize(cross(dFdx(p), dFdy(p))), 1.0);
   vec3 lightDir1 = normalize(lightPos1 - p);
   vec3 lightDir2 = normalize(lightPos2 - p);
 
   float lambertian1 = max(dot(lightDir1,normal), 0.0);
   float lambertian2 = max(dot(lightDir2,normal), 0.0);

   float specular1 = 0.0;
   float specular2 = 0.0;
 
   if(lambertian1 > 0.0) {
     vec3 viewDir = normalize(-p);
     vec3 halfDir1 = normalize(lightDir1 + viewDir);
     float specAngle1 = max(dot(halfDir1, normal), 0.0);
     specular1 = pow(specAngle1, 10.0);
   }

   if(lambertian2 > 0.0) {
    vec3 viewDir = normalize(-p);
    vec3 halfDir2 = normalize(lightDir2 + viewDir);
    float specAngle2 = max(dot(halfDir2, normal), 0.0);
    specular2 = pow(specAngle2, 10.0);
  }
 
   gl_FragColor = vec4(ambientColor + lambertian1 * diffuseColor + lambertian2 * diffuseColor + specular1 * specColor1 + specular2 * specColor2, 1.0);
 }
`;

class Sphere extends THREE.Mesh {
  constructor(radius, color, time){
    super();
    this._geometry = new THREE.IcosahedronBufferGeometry(radius, 20);

    const globeTexture = new THREE.TextureLoader().load(texture);
    globeTexture.wrapS = THREE.RepeatWrapping;
    globeTexture.wrapT = THREE.RepeatWrapping;

    // this._material = new THREE.ShaderMaterial({
    //   uniforms: {
    //     u_texture: {
    //       value: globeTexture,
    //     },
    //     u_time: {
    //       value: time,
    //     }
    //   },
    //   vertexShader: VS,
    //   fragmentShader: FS,
    //   vertexColors: true,
    //   // wireframe: true
    // });
    // this._mesh = new THREE.Mesh(this._geometry, this._material);
    // console.log(this._mesh)
    this._material = new THREE.PointsMaterial({size: 0.1, vertexColors: true, color: 0xaaffaa});
    this._mesh = new THREE.Points(this._geometry, this._material);
    // console.log(this._geometry)
  }

  behaviour(){
    this._mesh.rotation.x += 0.01;
    this._mesh.rotation.y += 0.01;
    this._mesh.rotation.z += 0.01;
  }

  getSphere(){
    return this._mesh;
  }

}

export {Sphere};