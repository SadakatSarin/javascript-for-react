const products = [
    
    { name: 'laptop', price: 3200, brand: 'lenevo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'black' },
    { name: 'watch', price: 4556, brand: 'casio', color: 'yellow' },
    
    { name: 'sunglass', price: 4455, brand: 'ray', color: 'pink' },
    { name: 'gray', price: 8565, brand: 'lenevo', color: 'canon' }


];

const brand = products.map(products => products.brand);

console.log(brand);

const price = products.map(products => products.price);

console.log(price);

products.forEach(products => console.log(products))


products.forEach(products => console.log(products.color))

products.forEach(products => {
    
console.log(products.name);

})

// 3. filter
const cheap = products.filter(products=>products.price < 5000)

console.log(cheap);

const specificName = products.filter(products => products.name.includes('t'));

console.log(specificName);

const special = products.find(p => p.name.includes('n'))

console.log(special);