// SCROLL FUNCTION
function scrollToSection(id){
document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

// COUNTERS
const counters=document.querySelectorAll(".counter");

function runCounters(){
counters.forEach(counter=>{
const target=+counter.getAttribute("data-target");
let count=0;

const update=()=>{
if(count<target){
count+=Math.ceil(target/100);
counter.innerText=count;
setTimeout(update,30);
}else{
counter.innerText=target;
}
};

update();
});
}

runCounters();

// SMALL ANIMATION ON SCROLL
window.addEventListener("scroll",()=>{
document.querySelectorAll(".card").forEach(el=>{
const pos=el.getBoundingClientRect().top;
if(pos < window.innerHeight - 100){
el.style.opacity="1";
el.style.transform="translateY(0)";
}
});
});
