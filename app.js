// ===== PAGE SYSTEM =====
function show(id){
document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
document.getElementById(id).classList.add("active");
}

// ===== SEARCH =====
function searchSystem(){
let val=document.getElementById("search").value.toLowerCase();

document.querySelectorAll(".card, li, p").forEach(el=>{
el.style.display = el.innerText.toLowerCase().includes(val)
? "block"
: "none";
});
}

// ===== 3D BACKGROUND =====
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

const renderer=new THREE.WebGLRenderer({alpha:true});
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z=5;

// LIGHT
const light=new THREE.PointLight(0xffd700,2);
light.position.set(2,2,2);
scene.add(light);

// OBJECTS
for(let i=0;i<50;i++){
const geo=new THREE.SphereGeometry(0.08,10,10);
const mat=new THREE.MeshStandardMaterial({color:0xffd700});
const mesh=new THREE.Mesh(geo,mat);

mesh.position.x=(Math.random()-0.5)*10;
mesh.position.y=(Math.random()-0.5)*10;
mesh.position.z=(Math.random()-0.5)*10;

scene.add(mesh);
}

// ANIMATION
function animate(){
requestAnimationFrame(animate);
scene.rotation.y += 0.001;
renderer.render(scene,camera);
}
animate();

// RESIZE
window.addEventListener("resize",()=>{
camera.aspect=window.innerWidth/window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth,window.innerHeight);
});
