var width = window.innerWidth,
	height = window.innerHeight;
var camera, scene, renderer;
var mesh;

function init(){
	// field of view (primer elemento)
	// aspect
	// near
	// far
	camera = new THREE.PerspectiveCamera (50, width/height, 100, 1000);
	// posición x,y,z
	camera.position.set(0, 0, 500);
	// new scene
	scene = new THREE.Scene();
	// funcion de mesh
	setMesh();
	// renderer: contexto webgl
	// antialias:render mas suave
	renderer = new THREE.WebGLRenderer ({antialias: true});
	// renderiza los pixeles de nuestro dispositivo a su tamaño
	renderer.setPixelRatio(window.devicePixelRatio);
	// render ancho y alto
	renderer.setSize(width, height);
	// apendea el canvas en cualquier elemento, "dom.Element es todo el html"
	document.body.appendChild(renderer.domElement)
	// resize pantalla
	window.addEventListener("resize", onWindowResize);
}

function setMesh(){
	// ancho, alto, profundidad
	var geometry = new THREE.BoxGeometry (200,200,200);
	// material
	var material = new THREE.MeshBasicMaterial ({ color: 0xff0000, wireframe: true });
	mesh = new THREE.Mesh(geometry, material)
	scene.add(mesh);
}
// ancho y alto
function onWindowResize(){
	width = window.innerWidth;
	height = window.innerHeight;
	// aspecto de camara
	camera.aspect = width/height;
	renderer.setSize(width, height);
}

function animate(){
	requestAnimationFrame(animate);
	render();
}
// funcion de dibujo
function render(){
	mesh.rotation.x += 0.001;
	mesh.rotation.y += 0.001;
	mesh.rotation.z += 0.001;
	// render dentro del contexto webgl, dibuja escena y camara
	renderer.render(scene, camera);

}
// mandar a llamar las funciones para que se hagan
init();
animate();