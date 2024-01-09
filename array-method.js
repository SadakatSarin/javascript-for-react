const products = [
    
    { name: 'laptop', price: 3200, brand: 'lenevo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'black' },
    { name: 'watch', price: 4556, brand: 'casio', color: 'yellow' },
    
    { name: 'sunglass', price: 4455, brand: 'ray', color: 'pink' },
    { name: 'gray', price: 8565, brand: 'lenevo', color: 'canon' }


];

const brand = products.map(products => products.brand);

console.log(brand);