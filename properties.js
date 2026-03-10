const cities=[
"Delhi","Mumbai","Bangalore","Pune",
"Chandigarh","Jaipur","Ahmedabad","Shimla"
]

const types=["1 RK","1 BHK","2 BHK","3 BHK","4 BHK"]

const images=[
"https://images.unsplash.com/photo-1505691938895-1758d7feb511",
"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
"https://images.unsplash.com/photo-1493809842364-78817add7ffb",
"https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
"https://images.unsplash.com/photo-1502005097973-6a7082348e28",
"https://images.unsplash.com/photo-1613977257363-707ba9348227",
"https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
"https://images.unsplash.com/photo-1584622781564-1d987f7333c1",
"https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
]

let properties=[]

for(let i=1;i<=30;i++){

properties.push({

id:i,

title:`Luxury ${types[i%5]} Property`,

location:cities[i%cities.length],

type:types[i%types.length],

price:5000000+(i*250000),

images:[

images[i%10],
images[(i+1)%10],
images[(i+2)%10],
images[(i+3)%10],
images[(i+4)%10],
images[(i+5)%10],
images[(i+6)%10]

]

})

}s