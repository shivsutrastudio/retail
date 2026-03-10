let sliderImages=[]
let currentIndex=0

function displayProperties(list){

const grid=document.getElementById("propertyGrid")

grid.innerHTML=""

list.forEach(p=>{

grid.innerHTML+=`

<div class="bg-white rounded shadow overflow-hidden cursor-pointer"
onclick="openProperty(${p.id})">

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

function openProperty(id){

const p=properties.find(x=>x.id===id)

sliderImages=p.images
currentIndex=0

document.getElementById("modalTitle").innerText=p.title
document.getElementById("modalLocation").innerText=p.location
document.getElementById("modalPrice").innerText="₹"+p.price
document.getElementById("modalInfo").innerText=p.type

document.getElementById("modalImage").src=sliderImages[0]

document.getElementById("whatsappBtn").href=
"https://wa.me/?text=Interested in "+p.title

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