// LOADER
window.onload = () => {
document.getElementById("loader").style.display="none";
};

// AOS INIT
AOS.init({
duration:1000
});

// SCROLL
function scrollToSection(id){
document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

// COUNTERS
const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{
const update=()=>{
const target=+counter.getAttribute("data-target");
const count=+counter.innerText;

const speed=target/80;

if(count<target){
counter.innerText=Math.ceil(count+speed);
setTimeout(update,30);
}else{
counter.innerText=target;
}
};
update();
});

// PARTICLES
particlesJS("particles-js", {
particles:{
number:{value:60},
color:{value:"#ffd700"},
shape:{type:"circle"},
opacity:{value:0.5},
size:{value:3},
move:{enable:true,speed:2}
}
});
