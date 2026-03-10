let sliderImages=[]
let currentIndex=0

function displayProperties(list){

const grid=document.getElementById("propertyGrid")

grid.innerHTML=""

list.forEach(p=>{

grid.innerHTML+=`

<div class="bg-white rounded shadow overflow-hidden">

<img src="${p.images[0]}"
class="h-48 w-full object-cover">

<div class="p-3">

<h3 class="font-bold">${p.title}</h3>

<p>${p.location}</p>

<p class="font-semibold">₹${p.price}</p>

<p>${p.type}</p>

</div>

</div>

`

})

}

function filterProperties(){

let city=document.getElementById("city").value
let type=document.getElementById("ptype").value
let purpose=document.getElementById("purpose").value
let price=document.getElementById("price").value

let filtered=properties.filter(p=>{

return(
(!city || p.location===city) &&
(!type || p.type===type) &&
(!purpose || p.purpose===purpose) &&
(!price || p.price<=price)
)

})

displayProperties(filtered)

}

function openDashboard(){
window.location.href="dashboard.html"
}