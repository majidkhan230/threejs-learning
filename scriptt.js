const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,0.1,100);


scene.add(camera);

const canvas = document.querySelector("#box")

const renderer = new THREE.WebGLRenderer({canvas})

renderer.setSize(window.innerWidth,window.innerHeight);


const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:"red"})
const cube = new THREE.Mesh(geometry,material)

// cube.rotate.x  = 0.5


scene.add(cube);

camera.position.z = 5
// camera.position.x = 5
// camera.position.y = 2


let clock = new THREE.Clock();
function animate(){
    window.requestAnimationFrame(animate);
    renderer.render(scene,camera);
    // cube.rotation.x=4;
    // cube.rotation.x +=0.01;
    // cube.rotation.y +=0.01;

    // cube.scale.x = 5;
    // cube.scale.z = 5;

    // cube.rotation.y = Math.PI/4;
    // cube.rotation.x = Math.PI/4;
    cube.rotation.y = clock.getElapsedTime();
}


animate();
