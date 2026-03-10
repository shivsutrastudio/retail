const cities=[
"Delhi","Mumbai","Bangalore","Pune",
"Chandigarh","Jaipur","Ahmedabad","Shimla"
]

const types=["1 RK","1 BHK","2 BHK","3 BHK","4 BHK"]

let properties=[]

for(let i=1;i<=30;i++){

properties.push({

id:i,

title:`Luxury ${types[i%5]} Property`,

location:cities[i%cities.length],

type:types[i%types.length],

price:5000000+(i*250000),

images:[

"https://images.unsplash.com/photo-1505691938895-1758d7feb511",
"https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
"https://images.unsplash.com/photo-1584622781564-1d987f7333c1",
"https://images.unsplash.com/photo-1502005097973-6a7082348e28",
"https://images.unsplash.com/photo-1592595896616-c37162298647",
"https://images.unsplash.com/photo-1503376780353-7e6692767b70"

]

})

}