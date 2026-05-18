// ===== SWITCH TABS =====
function openTab(id){
document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
document.getElementById(id).classList.add("active");
}

// ===== SEARCH SYSTEM =====
function search(){
let val=document.getElementById("search").value.toLowerCase();

document.querySelectorAll(".tab").forEach(tab=>{
let text=tab.innerText.toLowerCase();

if(text.includes(val)){
tab.classList.add("active");
}else{
tab.classList.remove("active");
}
});
}
