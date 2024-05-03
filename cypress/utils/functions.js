
function changeProductName(productName){
    let producto= ''
    producto = productName.replace(/\s+/g, '-')
    producto = productName.toLowerCase()
    return producto
}
function getRandomIndex(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

module.exports={changeProductName, getRandomIndex}

//separado por comas las funciones creadas 
