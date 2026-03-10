function img(q){
return "https://source.unsplash.com/800x600/?"+q+"&sig="+Math.random()
}

const cities=[
"Delhi","Mumbai","Bangalore","Pune","Noida","Gurgaon",
"Chandigarh","Jaipur","Ahmedabad","Shimla"
]

const types=["1 RK","1 BHK","2 BHK","3 BHK","4 BHK"]
const purposes=["Rent","Buy","Sale"]

let properties=[]

for(let i=1;i<=30;i++){

properties.push({

id:i,

title:`Luxury ${types[i%5]} Property`,

location:cities[i%cities.length],

type:types[i%types.length],

purpose:purposes[i%purposes.length],

price:5000000+(i*250000),

images:[

img("living-room interior"),
img("modern kitchen interior"),
img("bedroom interior"),
img("bathroom interior"),
img("balcony apartment"),
img("house lawn garden"),
img("house parking garage")

]

})

}