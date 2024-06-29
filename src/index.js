import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Stats from 'three/addons/libs/stats.module.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls( camera, renderer.domElement );

//controls.update() must be called after any manual changes to the camera's transform
camera.position.set( 0, 20, 10 );
controls.update();

// entities
const spheres = []
const cylinders = []

function drawSphereAt(x,y,z) {
  // 创建球体几何体
  const geometry = new THREE.SphereGeometry(0.5, 32, 32); // 半径为 0.5，分段数为 32
  // 创建材质
  const material = new THREE.MeshLambertMaterial({ color: 0xff3333 }); 

  const sphere = new THREE.Mesh(geometry, material);
  
  // 设置球体位置
  sphere.position.set(x,y,z);

  scene.add(sphere);

  spheres.push(sphere)
}

let numSpheres = 4;

for (let i = 0; i < numSpheres; i++) {
  // 设置球体位置
  drawSphereAt(
    Math.random() * 5 - 2.5, // 随机 X 坐标，范围为 -2.5 到 2.5
    Math.random() * 5 - 2.5, // 随机 Y 坐标，范围为 -2.5 到 2.5
    Math.random() * 5 - 2.5  // 随机 Z 坐标，范围为 -2.5 到 2.5
  );
}

function getMiddlePosition(v1, v2) {
  console.log(v1,v2);
  console.log( new THREE.Vector3().lerpVectors(v1, v2, 0.5) );
  return new THREE.Vector3().lerpVectors(v1, v2, 0.5);
}

function drawCylinderBetween(v1, v2) {
  // 计算圆柱体位置
  const startPosition = v1;
  const endPosition = v2;
    
  // 计算端点之间的向量
  const direction = new THREE.Vector3().subVectors(endPosition, startPosition);

  // 计算圆柱体的长度
  const length = direction.length();

  // 创建圆柱体几何体
  const cylinderGeometry = new THREE.CylinderGeometry(0.1, 0.1, length); // 半径为 0.1，高度为 1，分段数为 32

  // 创建圆柱体材质
  const cylinderMaterial = new THREE.MeshLambertMaterial({ color: 0x3333ff }); // 蓝色材质

  const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);

  // 计算圆柱体的中心点
  const midpoint = new THREE.Vector3().addVectors(startPosition, endPosition).multiplyScalar(0.5);

  // 设置圆柱体的位置
  cylinder.position.copy(midpoint);


  // 计算圆柱体的旋转
  const axis = new THREE.Vector3(0, 1, 0); // Y轴作为初始方向
  cylinder.quaternion.setFromUnitVectors(axis, direction.clone().normalize());

  // 设置圆柱体高度
  // cylinder.scale.y = startPosition.distanceTo(endPosition); // it also works.

  cylinders.push(cylinder);
  scene.add(cylinder);
}

// 循环创建圆柱体，连接球体
for (let i = 0; i < numSpheres - 1; i++) {
  
  // 计算圆柱体位置
  const startPosition = spheres[i].position;
  const endPosition = spheres[i + 1].position;

  drawCylinderBetween(startPosition, endPosition);
}

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshNormalMaterial({ wireframe: true })

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

const stats = new Stats()
document.body.appendChild(stats.dom)

// 添加光源
const lightWhite = new THREE.DirectionalLight(0xffffff, 1); // 创建一个方向光
lightWhite.position.set(100, 1, 1); // 设置光源位置
scene.add(lightWhite);
// 添加光源
const lightGray = new THREE.DirectionalLight(0xffffff, 0.3); // 创建一个方向光
lightGray.position.set(-100, 1, 1); // 设置光源位置
scene.add(lightGray);

function animate() {

	requestAnimationFrame( animate );


  // 後始末

	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();

	renderer.render( scene, camera );

}

animate();