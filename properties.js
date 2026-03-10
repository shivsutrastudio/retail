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

`https://source.unsplash.com/800x600/?modern-house,${i}`,
`https://source.unsplash.com/800x600/?living-room,${i}`,
`https://source.unsplash.com/800x600/?kitchen,${i}`,
`https://source.unsplash.com/800x600/?bedroom,${i}`,
`https://source.unsplash.com/800x600/?bathroom,${i}`,
`https://source.unsplash.com/800x600/?balcony,${i}`,
`https://source.unsplash.com/800x600/?parking,${i}`

]

})

}