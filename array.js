const numeros = [1,2,3]
const nums = [4,5,6]
const [pos0,,pos2] = numeros
const numerosTodos = [...numeros, ...nums]

console.log(pos0,pos2);
console.log(pos0 - pos2)
console.log(numerosTodos)

const numeros2 = [4,5,6]
const [ubicacion0,,ubicacion2] = numeros2
console.log(ubicacion0,ubicacion2)

