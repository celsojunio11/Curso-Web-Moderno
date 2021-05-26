const escola = "Unipam"

console.log(escola.charAt(4))
console.log(escola.charAt(6))//nao retorna nada pq a 6 letra da string nao existe
console.log(escola.charCodeAt(4))
console.log(escola.indexOf('a'))

console.log(escola.substring(1))
console.log(escola.substring(0,5))

console.log('Escola'.concat(escola).concat("!"))
console.log('Escola'+escola+("!"))

console.log(escola.replace('U', 'teste'))

console.log('Joao, Maria, Pedro'.split(','))