import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)



const canvas = document.getElementById('canvas')

const renderer = new THREE.WebGLRenderer({canvas,antialias:true,depth:true,})

renderer.setSize(window.innerWidth,window.innerHeight)


scene.add(camera)


const geometry = new THREE.BoxGeometry(1,1,1)

const material = new THREE.MeshBasicMaterial({color:"red",wireframe:true})
const cube = new THREE.Mesh(geometry,material)

camera.position.z = 5;

scene.add(cube)


window.addEventListener('resize',()=>{
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
})


const controls = new OrbitControls(camera,renderer.domElement)

controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;
controls.keys = {
    LEFT: 'ArrowLeft',
    UP: 'ArrowUp',
    RIGHT: 'ArrowRight',
    BOTTOM: 'ArrowDown',
  };


 function animate(){
    requestAnimationFrame(animate)
    controls.update()
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene,camera)
  
 }
 animate()
