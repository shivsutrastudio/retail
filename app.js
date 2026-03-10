let sliderImages=[]
let currentIndex=0

function displayProperties(list){

const grid=document.getElementById("propertyGrid")

grid.innerHTML=""

list.forEach(p=>{

const card=document.createElement("div")

card.className="bg-white rounded shadow overflow-hidden"

card.innerHTML=`

<img src="${p.images[0]}"
class="h-48 w-full object-cover cursor-pointer">

<div class="p-3">

<h3 class="font-bold">${p.title}</h3>

<p>${p.location}</p>

<p class="font-semibold">₹${p.price}</p>

<button
onclick="openProperty(${p.id})"
class="bg-indigo-600 text-white px-3 py-1 mt-2 rounded">

View

</button>

</div>
`

grid.appendChild(card)

})

}

function filterProperties(){

let city=document.getElementById("city").value.toLowerCase()

let filtered=properties.filter(p=>{

return p.location.toLowerCase().includes(city)

})

displayProperties(filtered)

}

function openProperty(id){

const p=properties.find(x=>x.id===id)

sliderImages=p.images
currentIndex=0

document.getElementById("modalTitle").innerText=p.title
document.getElementById("modalLocation").innerText=p.location
document.getElementById("modalPrice").innerText="₹"+p.price

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

function openDashboard(){

window.location.href="dashboard.html"

}

function openAdmin(){

window.location.href="admin.html"

}