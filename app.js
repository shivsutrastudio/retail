let sliderImages=[]
let currentIndex=0

function displayProperties(list){

const grid=document.getElementById("propertyGrid")

grid.innerHTML=""

list.forEach(p=>{

const card=document.createElement("div")

card.className="bg-white rounded shadow overflow-hidden cursor-pointer"

card.innerHTML=`

<img src="${p.images[0]}"
class="h-48 w-full object-cover">

<div class="p-3">

<h3 class="font-bold">${p.title}</h3>

<p>${p.location}</p>

<p class="font-semibold">₹${p.price}</p>

<p>${p.type}</p>

</div>

`

card.onclick=()=>openProperty(p.id)

grid.appendChild(card)

})

}

function openProperty(id){

const p=properties.find(x=>x.id===id)

sliderImages=p.images

currentIndex=0

document.getElementById("modalTitle").innerText=p.title
document.getElementById("modalLocation").innerText=p.location
document.getElementById("modalPrice").innerText="₹"+p.price
document.getElementById("modalInfo").innerText=p.type

document.getElementById("modalImage").src=sliderImages[0]

document.getElementById("propertyModal").style.display="flex"

}

function nextImage(){

currentIndex=(currentIndex+1)%sliderImages.length

document.getElementById("modalImage").src=sliderImages[currentIndex]

}

function prevImage(){

currentIndex=(currentIndex-1+sliderImages.length)%sliderImages.length

document.getElementById("modalImage").src=sliderImages[currentIndex]

}

function closeModal(){

document.getElementById("propertyModal").style.display="none"

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