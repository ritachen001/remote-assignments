// Assignment 3: Function, Array, and Object

let pricesum = 0;

function avg(data){
  
  for( let i = 0; i < data.products.length; i++ ){
    
        let name = data.products[i].name;
        pricesum += data.products[i].price;
  }
  let average = pricesum / data.size;
  console.log(` average price is ${average} `);
}

avg( { size:3, 
  products:[
    {
    name:"Product 1",
    price:100 },
    {
    name:"Product 2",
    price:700 },
    {
    name:"Product 3",
    price:250 }
  ]
});

