function recommendProperties(property){

let rec=properties.filter(p=>

p.id!==property.id &&
(
p.location===property.location ||
p.beds===property.beds ||
Math.abs(p.price-property.price)<=3000000
)

).slice(0,3)

showRecommendations(rec)

}

function showRecommendations(list){

const container=document.getElementById("recommendations")

if(!container) return

container.innerHTML=""

list.forEach(p=>{

container.innerHTML+=`

<div class="bg-white shadow rounded p-2">

<img src="${p.images[0]}"
class="h-20 w-full object-cover rounded">

<p class="text-sm">${p.title}</p>

<button onclick="openProperty(${p.id})"
class="text-indigo-600 text-sm">

View

</button>

</div>

`

})

}