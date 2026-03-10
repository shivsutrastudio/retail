function openAdmin(){

let pass=prompt("Enter admin password")

if(pass!=="shivadmin"){

alert("Access denied")
return

}

window.location.href="admin.html"

}

function addProperty(){

let title=document.getElementById("title").value
let location=document.getElementById("location").value
let img=document.getElementById("img1").value

if(!title || !location || !img){

alert("Title, location and image required")
return

}

let newProperty={

id:properties.length+1,
title:title,
location:location,
price:5000000,
beds:3,
sqft:1500,
type:"sale",

coords:{
lat:31.1048,
lng:77.1734
},

images:[img]

}

properties.push(newProperty)

alert("Property added successfully")

document.getElementById("title").value=""
document.getElementById("location").value=""
document.getElementById("img1").value=""

}