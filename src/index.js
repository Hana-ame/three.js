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

drawSphereAt(0,0,0); // 0
drawSphereAt(1,1,1); // 1
drawCylinderBetween(spheres[0].position,spheres[1].position);
drawSphereAt(2,2,0); // 2
drawSphereAt(0,2,2); // 3
drawSphereAt(2,0,2); // 4
drawCylinderBetween(spheres[2].position,spheres[1].position);
drawCylinderBetween(spheres[3].position,spheres[1].position);
drawCylinderBetween(spheres[4].position,spheres[1].position);
drawSphereAt(3,3,1); // 5
drawSphereAt(1,3,3); // 6
drawSphereAt(3,1,3); // 7
drawCylinderBetween(spheres[2].position,spheres[5].position);
drawCylinderBetween(spheres[3].position,spheres[6].position);
drawCylinderBetween(spheres[4].position,spheres[7].position);
drawSphereAt(4,4,0); // 8
drawSphereAt(0,4,4); // 9
drawSphereAt(4,0,4); // 10
drawCylinderBetween(spheres[8].position,spheres[5].position);
drawCylinderBetween(spheres[9].position,spheres[6].position);
drawCylinderBetween(spheres[10].position,spheres[7].position);
drawSphereAt(2,2,4); // 11
drawSphereAt(4,2,2); // 12
drawSphereAt(2,4,2); // 13
drawCylinderBetween(spheres[12].position,spheres[5].position);
drawCylinderBetween(spheres[13].position,spheres[5].position);
drawCylinderBetween(spheres[11].position,spheres[6].position);
drawCylinderBetween(spheres[13].position,spheres[6].position);
drawCylinderBetween(spheres[11].position,spheres[7].position);
drawCylinderBetween(spheres[12].position,spheres[7].position);
drawSphereAt(3,1,-1); // 14
drawSphereAt(1,3,-1); // 15
drawCylinderBetween(spheres[2].position,spheres[14].position);
drawCylinderBetween(spheres[2].position,spheres[15].position);
drawSphereAt(-1,1,3); // 16
drawSphereAt(-1,3,1); // 17
drawCylinderBetween(spheres[3].position,spheres[16].position);
drawCylinderBetween(spheres[3].position,spheres[17].position);
drawSphereAt(3,-1,1); // 18
drawSphereAt(1,-1,3); // 19
drawCylinderBetween(spheres[4].position,spheres[18].position);
drawCylinderBetween(spheres[4].position,spheres[19].position);
drawSphereAt(2,0,-2); // 20
drawSphereAt(0,2,-2); // 21
drawCylinderBetween(spheres[20].position,spheres[14].position);
drawCylinderBetween(spheres[21].position,spheres[15].position);
drawSphereAt(-2,0,2); // 22
drawSphereAt(-2,2,0); // 23
drawCylinderBetween(spheres[22].position,spheres[16].position);
drawCylinderBetween(spheres[23].position,spheres[17].position);
drawSphereAt(2,-2,0); // 24
drawSphereAt(0,-2,2); // 25
drawCylinderBetween(spheres[24].position,spheres[18].position);
drawCylinderBetween(spheres[25].position,spheres[19].position);
{
  const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);

  const cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ff00, // 绿色
    transparent: true, // 使材质透明
    opacity: 0.3 // 设置透明度为50%
  });


  // 创建cube
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

  // 设置正方体的位置
  cube.position.set(1, 1, 1); // 设置x, y, z坐标

  scene.add(cube)
}
{
  const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);

  const cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0xff00ff, // 绿色
    transparent: true, // 使材质透明
    opacity: 0.3 // 设置透明度为50%
  });


  // 创建cube
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

  // 设置正方体的位置
  cube.position.set(1, -1, 1); // 设置x, y, z坐标

  scene.add(cube)
}
function animate() {

	requestAnimationFrame( animate );


  // 後始末

	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();

	renderer.render( scene, camera );

}

animate();